import type { CameraProfile, FilmLook } from './types';

export const CAMERA_PROFILES: CameraProfile[] = [
  {
    id: 'generic-srgb',
    name: 'Generic sRGB (Default)',
    prompt: 'Assume a standard sRGB color space. Gently balance the tones, ensuring natural colors without major shifts.'
  },
  {
    id: 'sony-slog3',
    name: 'Sony S-Log3',
    prompt: 'The image was shot in Sony S-Log3/S-Gamut3.Cine. Correct this log profile to a standard Rec.709 color space, expanding the contrast and saturating the colors to a natural, neutral baseline.'
  },
  {
    id: 'canon-clog2',
    name: 'Canon C-Log2',
    prompt: 'The image was shot in Canon C-Log2/Cinema Gamut. Convert this log footage to a standard Rec.709 color space, increasing contrast and saturation to achieve a clean, accurate starting point.'
  },
  {
    id: 'arri-logc',
    name: 'ARRI LogC',
    prompt: 'The image was shot in ARRI LogC/ARRI Wide Gamut. Process this log profile into a standard Rec.709 color space, restoring contrast and color to a natural and balanced state, ready for grading.'
  },
  {
    id: 'fuji-flog',
    name: 'Fuji F-Log',
    prompt: 'The image was shot in Fuji F-Log. Normalize this to a standard Rec.709 color space. This involves boosting contrast and saturation to achieve a natural, lifelike appearance.'
  },
  {
    id: 'red-log3g10',
    name: 'RED Log3G10',
    prompt: 'The image was shot in RED Log3G10/REDWideGamutRGB. Convert this log profile to a standard Rec.709 color space, carefully mapping the wide gamut and flat contrast to a natural, vibrant image.'
  },
  {
    id: 'bmd-film-gen5',
    name: 'Blackmagic Film Gen 5',
    prompt: 'The image was shot using Blackmagic Design Film Gen 5 color science. Correct this to a standard Rec.709 color space, expanding the dynamic range and saturation for a clean, cinematic base.'
  },
  {
    id: 'dji-dlog',
    name: 'DJI D-Log',
    prompt: 'The image was shot in DJI D-Log. Normalize this flat profile to a standard Rec.709 color space, increasing contrast and saturation to bring out the natural colors of the scene.'
  },
  {
    id: 'panasonic-vlog',
    name: 'Panasonic V-Log',
    prompt: 'The image was shot in Panasonic V-Log. Convert this to a standard Rec.709 color space, restoring contrast and color vibrancy for a realistic and professional look.'
  }
];

export const FILM_LOOKS: FilmLook[] = [
  {
    id: 'kodak-portra-400',
    name: 'KD Portra 400',
    prompt: 'Emulate the look of Kodak Portra 400. This is known for its beautiful, warm skin tones, low contrast, and fine grain. Desaturate greens slightly and ensure highlights have a soft, gentle roll-off.'
  },
  {
    id: 'fuji-velvia-50',
    name: 'FJ Velvia 50',
    prompt: 'Emulate the look of Fuji Velvia 50. This is a slide film famous for its high saturation, especially vibrant reds and greens, and strong contrast. Create deep shadows and punchy colors.'
  },
  {
    id: 'kodak-ektar-100',
    name: 'KD Ektar 100',
    prompt: 'Emulate the look of Kodak Ektar 100. This film has very high saturation, fine grain, and a slightly cool, clean look. Emphasize blues and reds while keeping the image sharp and detailed.'
  },
  {
    id: 'cinestill-800t',
    name: 'CS 800T',
    prompt: 'Emulate the look of CineStill 800T. This is a tungsten-balanced film known for its cool, cinematic tones and characteristic red halation around bright light sources. Shift the color balance towards cyan/blue and add subtle red glows to highlights.'
  },
  {
    id: 'fuji-pro-400h',
    name: 'FJ Pro 400H',
    prompt: 'Emulate the look of Fuji Pro 400H. This film is loved for its soft, pastel-like colors, especially beautiful minty greens and cyans, and smooth skin tones. Create a light, airy feel with low contrast.'
  },
  {
    id: 'ilford-hp5-plus-400',
    name: 'ILF HP5+ 400',
    prompt: 'Emulate the look of Ilford HP5+ 400 black and white film. Create a classic monochrome look with rich blacks, detailed midtones, and a pronounced but pleasing grain structure. The contrast should be strong but not overly harsh.'
  },
  {
    id: 'kodak-kodachrome-64',
    name: 'KD Kodachrome 64',
    prompt: 'Emulate the look of Kodachrome 64 slide film. This look is defined by its rich color saturation, exceptional sharpness, and a distinct, almost painterly quality. Render reds and blues vividly, maintain strong blacks, and give the image a timeless, archival feel.'
  },
  {
    id: 'agfa-vista-200',
    name: 'AG Vista 200',
    prompt: 'Emulate the look of Agfa Vista 200. This consumer film is known for its warm, reddish cast, vibrant saturation, and pleasing contrast. Enhance the reds and oranges, and give the overall image a nostalgic, slightly faded quality.'
  },
  {
    id: 'fuji-superia-400',
    name: 'FJ Superia 400',
    prompt: 'Emulate the look of Fuji Superia 400. This film is characterized by its cooler color balance, with an emphasis on lush greens and cyans. It provides a versatile, clean look with slightly muted skin tones and a fine grain structure.'
  },
  {
    id: 'technicolor-three-strip',
    name: 'Technicolor Three-Strip',
    prompt: 'Emulate the iconic look of the Technicolor three-strip process from classic Hollywood. Create hyper-realistic, deeply saturated colors. Reds should be rich and velvety, blues should be deep and cyan-like, and greens should be vibrant. The overall image should have a surreal, larger-than-life feel.'
  }
];
