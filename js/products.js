/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

 window.products = [
  {
    id: "p1",
    title: "Epiphone Firebird",
    description: "Firebird Vintage Sunburst",
    price: 85900,
    discontinued: false,
    imageUrl: "images/firebird.png",
    categories: ["c1"]
  },
  {
    id: "p2",
    title: "Gibson Custom Shop Les Paul",
    description: "1959 Les Paul Standard Reissue VOS",
    price: 829900,
    discontinued: true,
    imageUrl: "images/customlespaul.png",
    categories: ["c1"]
  },
  {
    id: "p3",
    title: "Fender Player Plus Telecaster",
    description: "Player Plus Telecaster, Maple Fingerboard",
    price: 139999,
    imageUrl: "images/fenderplayerplustele.png",
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p4",
    title: "Fender American Professional Stratocaster",
    description: "American Professional II Stratocaster, Maple Fingerboard",
    price: 217999,
    imageUrl: "images/fenderstrat.jpg",
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p5",
    title: "Gibson Custom Shop Flying V",
    description: "1958 Korina Flying V - Black Pickguard",
    price: 1199900,
    imageUrl: "images/flyingv.png",
    discontinued: false,
    categories: ["c1"]
  },
  {
    id: "p6",
    title: "Gibson J-45",
    description: "J-45 Standard Vintage Sunburst",
    price: 349900,
    imageUrl: "images/j45.jpg",
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p7",
    title: "Taylor Grand Auditorium",
    description: "Grand Auditorium All-Koa Solid-Top",
    price: 239900,
    imageUrl: "images/taylorkoa.png",
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p8",
    title: "Martin D-45",
    description: "2018 D-45 Dreadnought",
    price: 1234900,
    imageUrl: "images/martind45.jpg",
    discontinued: true,
    categories: ["c2"]
  },
  {
    id: "p9",
    title: "Yamaha FG800M",
    description: "FG800M Solid Spruce Top",
    price: 26999,
    imageUrl: "images/yamaha.jpg",
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p10",
    title: "Seagull S6",
    description: "S6 Original Acoustic Guitar",
    price: 64900,
    imageUrl: "images/seagull.jpg",
    discontinued: false,
    categories: ["c2"]
  },
  {
    id: "p11",
    title: "Fender Vibro Champ",
    description: "68 Custom Vibro Champ Reverb",
    price: 114999,
    imageUrl: "images/vibrochamp.jpg",
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p12",
    title: "VOX AC30",
    description: "AC30 30 Watt 2x12 Tube Combo",
    price: 169999,
    imageUrl: "images/ac30.jpg",
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p13",
    title: "Orange Micro Terror",
    description: "PPC108 Micro Terror 1x8",
    price: 13499,
    imageUrl: "images/orange.jpg",
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p14",
    title: "Line 6 DT25",
    description: "Line 6 DT25 1x12 Combo",
    price: 149900,
    imageUrl: "images/line6.jpg",
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p15",
    title: "Dr.Z Jetta",
    description: "Dr.Z Jetta 30W Tube Head",
    price: 217500,
    imageUrl: "images/drz.jpg",
    discontinued: false,
    categories: ["c3"]
  },
  {
    id: "p16",
    title: "Dunlop Cry Baby",
    description: "Original Cry Baby Wah",
    price: 13499,
    imageUrl: "images/crybaby.jpg",
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "p17",
    title: "Boss DS1",
    description: "DS1 Distortion Pedal",
    price: 8599,
    imageUrl: "images/ds1.jpg",
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "p18",
    title: "Strymon Reverb",
    description: "Big Sky Reverb",
    price: 59700,
    imageUrl: "images/bigsky.jpg",
    discontinued: false,
    categories: ["c4"]
  },
  {
    id: "p19",
    title: "MXR M169",
    description: "Carbon Copy Analog Delay",
    price: 23699,
    discontinued: false,
    imageUrl: "images/m169.jpg",
    categories: ["c4"]
  },
  {
    id: "p20",
    title: "Fulltone Custom Effects",
    description: "OCD V2 Obsessive Compulsive Drive Pedal",
    price: 16000,
    discontinued: false,
    imageUrl: "images/ocd.jpg",
    categories: ["c4"]
  }
];
