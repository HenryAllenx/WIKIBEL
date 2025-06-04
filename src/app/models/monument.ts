export interface Imonument {
  id: number;
  name: string;
  longitude: number | null;
  latitude: number | null;
  founding_year: number;
  district: string;
  description: string;
  open_hours: string;
  image: string;
}
