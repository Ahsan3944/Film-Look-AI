
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { ControlPanel } from './components/ControlPanel';
import { ImageViewer } from './components/ImageViewer';
import { editImageWithGemini } from './services/geminiService';
import { CAMERA_PROFILES, FILM_LOOKS } from './constants';
import type { CameraProfile, FilmLook } from './types';

const App: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<{ file: File; url: string } | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [selectedCamera, setSelectedCamera] = useState<string>(CAMERA_PROFILES[0].id);
  const [selectedFilm, setSelectedFilm] = useState<string>(FILM_LOOKS[0].id);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setOriginalImage({ file, url });
    setProcessedImage(null);
    setError(null);
  };
  
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1];
        resolve(base64Data);
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleApplyGrade = useCallback(async () => {
    if (!originalImage) {
      setError("Please upload an image first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setProcessedImage(null);

    try {
      const cameraProfile = CAMERA_PROFILES.find(p => p.id === selectedCamera) as CameraProfile;
      const filmLook = FILM_LOOKS.find(l => l.id === selectedFilm) as FilmLook;

      const fullPrompt = `First, apply a camera correction profile to this image. ${cameraProfile.prompt} Then, apply a cinematic film look inspired by ${filmLook.name}. ${filmLook.prompt} Keep the result realistic and high quality.`;
      
      const base64Image = await fileToBase64(originalImage.file);
      
      const editedImageBase64 = await editImageWithGemini(base64Image, originalImage.file.type, fullPrompt);

      if (editedImageBase64) {
        setProcessedImage(`data:${originalImage.file.type};base64,${editedImageBase64}`);
      } else {
        throw new Error("The AI model did not return an image. Please try a different look or image.");
      }
    } catch (e) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
      setError(`Failed to apply grade: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, selectedCamera, selectedFilm]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 xl:col-span-3 bg-gray-800 p-6 rounded-2xl shadow-lg">
            {!originalImage ? (
                <ImageUploader onImageUpload={handleImageUpload} />
            ) : (
                <ControlPanel
                    cameraProfiles={CAMERA_PROFILES}
                    filmLooks={FILM_LOOKS}
                    selectedCamera={selectedCamera}
                    selectedFilm={selectedFilm}
                    onCameraChange={setSelectedCamera}
                    onFilmChange={setSelectedFilm}
                    onApply={handleApplyGrade}
                    isLoading={isLoading}
                    onNewImage={() => {
                      setOriginalImage(null);
                      setProcessedImage(null);
                      setError(null);
                    }}
                />
            )}
          </div>
          <div className="lg:col-span-8 xl:col-span-9">
            {error && (
              <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-xl mb-4" role="alert">
                <strong className="font-bold">Error: </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            <ImageViewer 
              originalImage={originalImage?.url}
              processedImage={processedImage}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
