export type TimelineItem = {
  title: string;
  era: string;
  image: string;
  memory: string;
  accent: string;
};

export type GalleryImage = {
  src: string;
  title: string;
  caption: string;
};

export type MemoryCard = {
  title: string;
  description: string;
  accent: string;
};

export type BirthdayContent = {
  recipientName: string;
  heroImage: string;
  favoriteImage: string;
  nextBirthday: string;
  turningAge: number;
  introLines: string[];
  headline: string;
  subheadline: string;
  letterTitle: string;
  letterParagraphs: string[];
  quote: string;
  audioTrack: string;
  timeline: TimelineItem[];
  gallery: GalleryImage[];
  memories: MemoryCard[];
};
