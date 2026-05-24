export interface Product {
  NAME: string;
  CAPACITY: {
    SIZE: string;
    PRICE: number;
  }[];
  COLOR: string[];
}

export const PRODUCT: Product = {
  NAME: "ByteMax Nanoblades",
  CAPACITY: [
    { SIZE: "512 MB", PRICE: 39 },
    { SIZE: "1 TB", PRICE: 69 },
    { SIZE: "2 TB", PRICE: 129 },
  ],
  COLOR: ["Obsidian", "Cream", "Brass"],
};
