export interface Props {
  isCartOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsCartOpen: any;
}

export interface ContainerProps {
  isOpen: boolean;
}

export interface CartProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
}
