export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  description: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  alt: string;
}
