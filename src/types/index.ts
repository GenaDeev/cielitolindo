export type Metadata = {
  title: string;
  description: string;
  slug: string;
  canonical: string;
  tags?: string[];
  og?: {
    title: string;
    description: string;
    image: string;
  };
  twitter?: {
    title: string;
    description: string;
    image: string;
  }
}