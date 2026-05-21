export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string | null;
}

export const products: Product[] = [
  // --- Flash Disks / USB Drives ---
  {
    id: 1,
    name: "DataMax 32GB USB 2.0 Flash Drive",
    price: 6.99,
    description:
      "Reliable and compact 32GB USB 2.0 drive for everyday document storage and transfer.",
    image: null,
  },
  {
    id: 2,
    name: "SwiftDrive 64GB USB 3.0",
    price: 12.99,
    description:
      "High-speed 64GB USB 3.0 flash drive with a sleek metal casing and capless design.",
    image: null,
  },
  {
    id: 3,
    name: "Titan Dual-Port 128GB (Type-A & Type-C)",
    price: 24.99,
    description:
      "Versatile 128GB drive featuring both USB Type-A and Type-C connectors for PC and smartphone use.",
    image: null,
  },
  {
    id: 4,
    name: "Velocity 256GB USB 3.2 Gen 1",
    price: 39.99,
    description:
      "Ultra-fast 256GB flash drive with read speeds up to 400MB/s, perfect for large video files.",
    image: null,
  },
  {
    id: 5,
    name: "RuggedArmor 512GB Waterproof USB",
    price: 79.99,
    description:
      "Durable, waterproof, and shock-resistant 512GB flash disk designed for extreme outdoor conditions.",
    image: null,
  },
  {
    id: 6,
    name: "Core Storage 1TB Extreme Pro",
    price: 149.99,
    description:
      "Massive 1TB storage in a pocket-sized form factor. SSD-like performance in a USB stick.",
    image: null,
  },
  {
    id: 7,
    name: "EcoFlash 16GB Swivel Drive",
    price: 4.99,
    description:
      "Basic 16GB flash drive with a classic 360-degree swivel cover and a lanyard hole.",
    image: null,
  },
  {
    id: 8,
    name: "NanoFit 64GB Low-Profile USB",
    price: 14.99,
    description:
      "Tiny, plug-and-stay 64GB flash drive ideal for car audio systems or expanding laptop storage.",
    image: null,
  },
  {
    id: 9,
    name: "SecureVault 128GB Encrypted USB",
    price: 45.99,
    description:
      "Hardware-encrypted 128GB flash drive with a physical keypad for ultimate data security.",
    image: null,
  },
  {
    id: 10,
    name: "Lumina 256GB RGB Gaming Flash Disk",
    price: 49.99,
    description:
      "High-performance 256GB USB 3.1 drive featuring customizable RGB lighting.",
    image: null,
  },

  // --- Memory Cards (SD & MicroSD) ---
  {
    id: 11,
    name: "MicroCore 32GB MicroSDHC Class 10",
    price: 8.99,
    description:
      "Standard 32GB MicroSD card, ideal for basic smartphones and point-and-shoot cameras.",
    image: null,
  },
  {
    id: 12,
    name: "SwiftCard 64GB MicroSDXC UHS-I",
    price: 13.99,
    description:
      "Fast 64GB MicroSD card with an SD adapter, great for Full HD video recording.",
    image: null,
  },
  {
    id: 13,
    name: "GamerPro 128GB MicroSDXC",
    price: 22.99,
    description:
      "Optimized 128GB MicroSD card for portable gaming consoles with fast load times.",
    image: null,
  },
  {
    id: 14,
    name: "AppLoad 256GB MicroSDXC A2",
    price: 34.99,
    description:
      "A2-rated 256GB MicroSD card designed to load smartphone apps quickly and smoothly.",
    image: null,
  },
  {
    id: 15,
    name: "ActionCam 512GB Extreme MicroSD",
    price: 69.99,
    description:
      "High-endurance 512GB MicroSD card built for 4K action cameras and drones.",
    image: null,
  },
  {
    id: 16,
    name: "PhotoMaster 32GB SDHC UHS-I",
    price: 11.99,
    description:
      "Reliable 32GB full-size SD card for digital cameras and photography enthusiasts.",
    image: null,
  },
  {
    id: 17,
    name: "ProCapture 64GB SDXC UHS-II",
    price: 29.99,
    description:
      "Professional-grade 64GB SD card with UHS-II technology for rapid continuous burst shooting.",
    image: null,
  },
  {
    id: 18,
    name: "CineCard 128GB SDXC V90",
    price: 89.99,
    description:
      "Premium 128GB SD card with V90 video speed class, guaranteed to sustain 8K video recording.",
    image: null,
  },
  {
    id: 19,
    name: "StudioPro 256GB SDXC",
    price: 54.99,
    description:
      "High-capacity 256GB SD card for professional photographers shooting in RAW format.",
    image: null,
  },
  {
    id: 20,
    name: "Endurance 1TB DashCam MicroSD",
    price: 129.99,
    description:
      "Massive 1TB High-Endurance MicroSD card designed for continuous 24/7 recording in dash cams and security cameras.",
    image: null,
  },
];
