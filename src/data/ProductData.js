export const ProductData = [
  {
    id: 1,
    name: "ASUS ROG Strix G16",
    brand: "ASUS",
    category: "Laptop",

    img: [
      "https://i.pinimg.com/1200x/6d/60/fa/6d60fafc5dbf9127abd611859fd43381.jpg",
      "https://i.pinimg.com/736x/78/da/76/78da762ac4e15f1eae58f1b97c8f02e2.jpg",
      "https://i.pinimg.com/1200x/71/d1/96/71d196e536e3973fd87230d71f8bd614.jpg",
    ],

    price: 130,
    originalprice: 160,
    discount: 19,

    rating: 4.8,
    reviews: 245,
    stock: 15,

    specification: {
      ram: "32GB DDR5",
      CPU: "AMD Ryzen 9 8940HX",
      GPU: "NVIDIA RTX 5070 8GB",
      SSD: "1TB NVMe SSD",
      size: "16 inch",
      display: "165Hz FHD+ IPS",
    },

    colors: ["Black", "Gray"],
    sizes: ["16 inch"],

    description:
      "ASUS ROG Strix G16 is a powerful gaming laptop featuring AMD Ryzen 9, 32GB DDR5 RAM, NVIDIA RTX 5070 graphics and a fast 1TB NVMe SSD. Perfect for gaming, programming and professional workloads.",

    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: true,
  },
  {
    id: 11,
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech",
    category: "Mouse",

    img: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
      "https://images.unsplash.com/photo-1563297007-0686b7003af7",
    ],

    price: 129,
    originalprice: 159,
    discount: 19,

    rating: 4.8,
    reviews: 342,
    stock: 45,

    specification: {
      sensor: "HERO 2",
      connection: "Wireless",
      DPI: "32,000 DPI",
      buttons: "5 Buttons",
      weight: "60g",
      battery: "95 Hours",
      pollingRate: "2000Hz",
    },

    colors: ["Black", "White", "Pink"],

    description:
      "The Logitech G Pro X Superlight 2 is an ultra-lightweight wireless gaming mouse designed for competitive gamers. It features the HERO 2 sensor with up to 32,000 DPI, a 2000Hz polling rate, LIGHTSPEED wireless technology and an extremely lightweight 60g design.",

    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: false,
  },

  {
    id: 2,
    name: "Apple MacBook Pro 14 M4 Pro",
    brand: "Apple",
    category: "Laptop",

    img: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9",
    ],

    price: 1899,
    originalprice: 2099,
    discount: 10,

    rating: 4.9,
    reviews: 386,
    stock: 10,

    specification: {
      ram: "24GB",
      CPU: "Apple M4 Pro",
      GPU: "Integrated 16-Core GPU",
      SSD: "512GB SSD",
      size: "14.2 inch",
      display: "Liquid Retina XDR",
    },

    colors: ["Space Black", "Silver"],
    sizes: ["14 inch"],

    description:
      "MacBook Pro powered by Apple M4 Pro chip delivers incredible performance for developers, designers, video editors and professional users.",

    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: true,
  },

  {
    id: 3,
    name: "Lenovo Legion 5 Pro",
    brand: "Lenovo",
    category: "Laptop",

    img: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef",
    ],

    price: 1450,
    originalprice: 1650,
    discount: 12,

    rating: 4.7,
    reviews: 178,
    stock: 18,

    specification: {
      ram: "32GB DDR5",
      CPU: "AMD Ryzen 9 7945HX",
      GPU: "RTX 4070 8GB",
      SSD: "1TB NVMe",
      size: "16 inch",
      display: "240Hz WQXGA",
    },

    colors: ["Storm Gray"],
    sizes: ["16 inch"],

    description:
      "Lenovo Legion 5 Pro is designed for serious gaming with a powerful Ryzen processor, RTX 4070 graphics, high refresh rate display and fast storage.",

    featured: true,
    flashsale: true,
    bestseller: false,
    newarrival: false,
  },

  {
    id: 4,
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphone",

    img: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    ],

    price: 999,
    originalprice: 1199,
    discount: 17,

    rating: 4.8,
    reviews: 521,
    stock: 25,

    specification: {
      ram: "12GB",
      CPU: "Snapdragon 8 Elite",
      GPU: "Adreno GPU",
      SSD: "256GB",
      size: "6.9 inch",
      display: "Dynamic AMOLED 2X 120Hz",
    },

    colors: ["Titanium Black", "Titanium Gray", "Titanium Silver"],
    sizes: ["256GB", "512GB", "1TB"],

    description:
      "Samsung Galaxy S25 Ultra combines flagship performance, a stunning AMOLED display, advanced cameras and premium titanium design.",

    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: true,
  },

  {
    id: 5,
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    category: "Smartphone",

    img: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
      "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8",
    ],

    price: 1199,
    originalprice: 1299,
    discount: 8,

    rating: 4.9,
    reviews: 734,
    stock: 20,

    specification: {
      ram: "8GB",
      CPU: "Apple A18 Pro",
      GPU: "6-Core GPU",
      SSD: "256GB",
      size: "6.9 inch",
      display: "Super Retina XDR 120Hz",
    },

    colors: ["Titanium Black", "Natural Titanium", "Desert Titanium"],
    sizes: ["256GB", "512GB", "1TB"],

    description:
      "iPhone 16 Pro Max delivers exceptional performance with the A18 Pro chip, advanced camera system and a beautiful Super Retina XDR display.",

    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: true,
  },

  {
    id: 6,
    name: "Sony WH-1000XM5",
    brand: "Sony",
    category: "Headphone",

    img: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944",
    ],

    price: 299,
    originalprice: 399,
    discount: 25,

    rating: 4.7,
    reviews: 612,
    stock: 30,

    specification: {
      ram: "N/A",
      CPU: "Integrated Processor",
      GPU: "N/A",
      SSD: "N/A",
      size: "40mm Driver",
      display: "N/A",
    },

    colors: ["Black", "Silver"],
    sizes: ["Standard"],

    description:
      "Sony WH-1000XM5 provides industry-leading noise cancellation, premium sound quality and all-day comfort for music, travel and work.",

    featured: false,
    flashsale: false,
    bestseller: true,
    newarrival: false,
  },

  {
    id: 7,
    name: "Logitech G Pro X Superlight 2",
    brand: "Logitech",
    category: "Mouse",

    img: [
      "https://images.unsplash.com/photo-1527814050087-3793815479db",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
      "https://images.unsplash.com/photo-1563297007-0686b7003af7",
    ],

    price: 129,
    originalprice: 159,
    discount: 19,

    rating: 4.8,
    reviews: 342,
    stock: 45,

    specification: {
      ram: "N/A",
      CPU: "HERO 2 Sensor",
      GPU: "N/A",
      SSD: "N/A",
      size: "125 x 63.5 x 40mm",
      display: "N/A",
    },

    colors: ["Black", "White", "Pink"],
    sizes: ["Standard"],

    description:
      "The Logitech G Pro X Superlight 2 is an ultra-lightweight wireless gaming mouse built for competitive gaming with excellent precision and low latency.",

    featured: false,
    flashsale: false,
    bestseller: true,
    newarrival: false,
  },

  {
    id: 8,
    name: "Keychron Q1 Mechanical Keyboard",
    brand: "Keychron",
    category: "Keyboard",

    img: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      "https://images.unsplash.com/photo-1595225476474-87563907a212",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    ],

    price: 169,
    originalprice: 199,
    discount: 15,

    rating: 4.6,
    reviews: 214,
    stock: 22,

    specification: {
      ram: "N/A",
      CPU: "ARM MCU",
      GPU: "N/A",
      SSD: "N/A",
      size: "75%",
      display: "RGB Backlight",
    },

    colors: ["Black", "Gray", "Blue"],
    sizes: ["75%"],

    description:
      "Keychron Q1 is a premium mechanical keyboard featuring a customizable layout, RGB lighting, hot-swappable switches and an aluminum body.",

    featured: false,
    flashsale: false,
    bestseller: false,
    newarrival: true,
  },

  {
    id: 9,
    name: "NVIDIA GeForce RTX 5080",
    brand: "NVIDIA",
    category: "GPU",

    img: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704",
      "https://images.unsplash.com/photo-1555617981-dac3880eac6e",
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c",
    ],

    price: 999,
    originalprice: 1099,
    discount: 9,

    rating: 4.9,
    reviews: 189,
    stock: 8,

    specification: {
      ram: "16GB GDDR7",
      CPU: "N/A",
      GPU: "RTX 5080",
      SSD: "N/A",
      size: "PCIe 5.0",
      display: "4K / 8K Support",
    },

    colors: ["Black"],
    sizes: ["16GB"],

    description:
      "NVIDIA GeForce RTX 5080 delivers next-generation gaming and rendering performance with advanced ray tracing, AI acceleration and GDDR7 memory.",

    featured: true,
    flashsale: false,
    bestseller: true,
    newarrival: true,
  },

  {
    id: 10,
    name: "Apple Watch Series 10",
    brand: "Apple",
    category: "Smartwatch",

    img: [
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1",
    ],

    price: 399,
    originalprice: 449,
    discount: 11,

    rating: 4.7,
    reviews: 276,
    stock: 35,

    specification: {
      ram: "N/A",
      CPU: "S10 SiP",
      GPU: "Integrated",
      SSD: "64GB",
      size: "46mm",
      display: "LTPO3 OLED",
    },

    colors: ["Jet Black", "Silver", "Rose Gold"],
    sizes: ["42mm", "46mm"],

    description:
      "Apple Watch Series 10 features a larger OLED display, powerful S10 chip, advanced health features and a sleek lightweight design.",

    featured: false,
    flashsale: true,
    bestseller: false,
    newarrival: true,
  },

  {
    id: 12,
    name: "Razer BlackWidow V4 Pro",
    brand: "Razer",
    category: "Keyboard",

    img: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef",
      "https://images.unsplash.com/photo-1595225476474-87563907a212",
    ],

    price: 149,
    originalprice: 229,
    discount: 35,

    rating: 4.7,
    reviews: 142,
    stock: 12,

    specification: {
      ram: "N/A",
      CPU: "Razer Command Dial",
      GPU: "N/A",
      SSD: "N/A",
      size: "Full Size",
      display: "Chroma RGB Lighting",
    },

    colors: ["Black"],
    sizes: ["Full Size"],

    description:
      "The Razer BlackWidow V4 Pro is an advanced mechanical gaming keyboard with dedicated macro keys, multi-function roller, and immersive Chroma RGB lighting.",

    featured: true,
    flashsale: true,
    bestseller: false,
    newarrival: false,
  },

  {
    id: 13,
    name: "Anker Soundcore Motion X600",
    brand: "Anker",
    category: "Speaker",

    img: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad",
      "https://images.unsplash.com/photo-1529359744902-80b221207401",
    ],

    price: 139,
    originalprice: 199,
    discount: 30,

    rating: 4.8,
    reviews: 98,
    stock: 20,

    specification: {
      ram: "N/A",
      CPU: "Hi-Res Spatial Audio Processor",
      GPU: "N/A",
      SSD: "N/A",
      size: "50W Output",
      display: "N/A",
    },

    colors: ["Polar Gray", "Aurora Green", "Lunar Blue"],
    sizes: ["Standard"],

    description:
      "Anker Soundcore Motion X600 is a high-fidelity portable Bluetooth speaker delivering spatial audio with 50W output power and IPX7 waterproofing.",

    featured: true,
    flashsale: true,
    bestseller: false,
    newarrival: true,
  },
];