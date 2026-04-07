export enum Expansion {
  Virus = 'virus',
  Virus2 = 'virus2',
  Halloween = 'halloween',
}

export interface Card {
  id: string;
  title: string;
  icon: string;
  description: string;
  expansion: Expansion;
  extraInfo?: {
    text: string;
    image: string;
  }[];
}
