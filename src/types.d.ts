export type Children = {
  children: React.ReactNode;
};

export type CarType = {
  type: string;
  name: string;
  price: number;
  stars: number;
  image: string;
  info: {
    icon: string;
    text: string;
  }[];
};
