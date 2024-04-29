const tabs = {
  Featured: {
    "Trending Collection": ["Seasonal", "Mother's Day"],
  },
  New: {
    "Novelty Gifts": ["Customized mugs", "Funny socks", "Quirky gadgets"],
    "For the Eco Conscious": [
      "Reusable water bottles",
      "Bamboo toothbrushes",
      "Recycled notebooks",
    ],
    "For the pet lover": [
      "Pet grooming kits",
      "Pet portrait frames",
      "Pet-themed clothing",
    ],
    "Gifts for Kids": [
      "Educational toys",
      "Interactive storybooks",
      "Colorful puzzles",
    ],
    "Everyday Jewelry": [
      "Minimalist necklaces",
      "Classic earrings",
      "Stylish bracelets",
    ],
  },
  "Home decor": {
    "Living Room": ["Throw pillows", "Wall art", "Decorative plants"],
    "Kitchen & Dining": ["Cookware sets", "Table linens", "Kitchen gadgets"],
    Bedroom: ["Bedding sets", "Nightstands", "Decorative lamps"],
  },
  "Food & drink": {
    "Gourmet Food": [
      "Artisanal cheeses",
      "Craft chocolates",
      "Specialty coffees",
    ],
    Beverages: ["Fine wines", "Craft beers", "Organic teas"],
    "Cooking Essentials": [
      "Spices & herbs",
      "Oils & vinegars",
      "Baking ingredients",
    ],
  },
  Women: {
    Clothing: ["Dresses", "Tops & blouses", "Pants & jeans"],
    Accessories: ["Handbags", "Scarves", "Hats & caps"],
    Shoes: ["Heels", "Flats", "Sneakers"],
  },
  "Beauty & wellness": {
    Skincare: ["Facial cleansers", "Moisturizers", "Face masks"],
    Haircare: ["Shampoos", "Conditioners", "Styling products"],
    Wellness: ["Essential oils", "Supplements", "Yoga accessories"],
  },
  Jewelry: {
    Necklaces: ["Pendants", "Chains", "Lockets"],
    Earrings: ["Studs", "Hoop earrings", "Drop earrings"],
    Bracelets: ["Bangles", "Cuffs", "Charm bracelets"],
  },
  "Paper & novelty": {
    Stationery: ["Notebooks", "Greeting cards", "Planners"],
    Books: ["Fiction", "Non-fiction", "Children's books"],
    "Party Supplies": ["Balloons", "Party favors", "Cake toppers"],
  },
  "Kids & baby": {
    "Toys & Games": ["Building blocks", "Dolls", "Board games"],
    Clothing: ["Onesies", "Baby outfits", "Toddler dresses"],
    "Baby Gear": ["Strollers", "Car seats", "Baby carriers"],
  },
  Pets: {
    "Food & Treats": ["Dry food", "Wet food", "Treats"],
    Toys: ["Chew toys", "Interactive toys", "Plush toys"],
    Accessories: ["Collars & leashes", "Pet beds", "Grooming tools"],
  },
  Men: {
    Clothing: ["Shirts", "T-shirts", "Jeans"],
    Accessories: ["Belts", "Wallets", "Ties"],
    Shoes: ["Boots", "Sneakers", "Dress shoes"],
  },
};

const nav = {
  Company: ["About Us", "Newsroom", "Careers"],
  Support: ["Help Center", "Faire Markets", "Sell on Faire"],
  Connect: ["Blog", "Instagram", "Facebook", "Twitter"],
};

const products = [
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "ALL THE WAYS TO SAY",
    images: [
      "https://cdn.faire.com/fastly/e82378d54f810ced4520b1bc594694fb4a6462c275d4a0030a25970add77016c.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=926,926,x0,y234,safe&width=720",
      "https://cdn.faire.com/fastly/591557964661387e37e8e4853f95d87bd5b3cb79d7547638bc29232ec405d337.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Hindbag",
    images: [
      "https://cdn.faire.com/fastly/b58e94d0465e492a25c945a8bdb3b2faf342134541a5216c17e45c51e9d39f1d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=800,800,x0,y0,safe&width=720",
      "https://cdn.faire.com/fastly/c1bb39e5de859ee8653f2d071e805ad5a805e8d7f93b51ba282b3576a8127006.webp?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/5393cc5490e857dd28648e260b981b5ed3e526ae32d87e054c0cdfc0c2a95533.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/d241732fe7e5d0173f76a74496e16716ed8f77d1c6ca078f1abc08470098dbf2.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "The K2 Yak chews",
    images: [
      "https://cdn.faire.com/fastly/6ff663e745c9b37999d6f477c72cc5b7863d9556a3a127b65df366f7a91a9a86.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/523093896ded531cb6f53ccb20d7c35364114dc6494f1938e9477173bce30c06.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "The K2 Yak chews",
    images: [
      "https://cdn.faire.com/fastly/6ff663e745c9b37999d6f477c72cc5b7863d9556a3a127b65df366f7a91a9a86.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/523093896ded531cb6f53ccb20d7c35364114dc6494f1938e9477173bce30c06.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "ALL THE WAYS TO SAY",
    images: [
      "https://cdn.faire.com/fastly/e82378d54f810ced4520b1bc594694fb4a6462c275d4a0030a25970add77016c.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=926,926,x0,y234,safe&width=720",
      "https://cdn.faire.com/fastly/591557964661387e37e8e4853f95d87bd5b3cb79d7547638bc29232ec405d337.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "ALL THE WAYS TO SAY",
    images: [
      "https://cdn.faire.com/fastly/e82378d54f810ced4520b1bc594694fb4a6462c275d4a0030a25970add77016c.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=926,926,x0,y234,safe&width=720",
      "https://cdn.faire.com/fastly/591557964661387e37e8e4853f95d87bd5b3cb79d7547638bc29232ec405d337.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "ALL THE WAYS TO SAY",
    images: [
      "https://cdn.faire.com/fastly/e82378d54f810ced4520b1bc594694fb4a6462c275d4a0030a25970add77016c.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=926,926,x0,y234,safe&width=720",
      "https://cdn.faire.com/fastly/591557964661387e37e8e4853f95d87bd5b3cb79d7547638bc29232ec405d337.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "ALL THE WAYS TO SAY",
    images: [
      "https://cdn.faire.com/fastly/e82378d54f810ced4520b1bc594694fb4a6462c275d4a0030a25970add77016c.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=926,926,x0,y234,safe&width=720",
      "https://cdn.faire.com/fastly/591557964661387e37e8e4853f95d87bd5b3cb79d7547638bc29232ec405d337.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "ALL THE WAYS TO SAY",
    images: [
      "https://cdn.faire.com/fastly/e82378d54f810ced4520b1bc594694fb4a6462c275d4a0030a25970add77016c.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=926,926,x0,y234,safe&width=720",
      "https://cdn.faire.com/fastly/591557964661387e37e8e4853f95d87bd5b3cb79d7547638bc29232ec405d337.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "ALL THE WAYS TO SAY",
    images: [
      "https://cdn.faire.com/fastly/e82378d54f810ced4520b1bc594694fb4a6462c275d4a0030a25970add77016c.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=926,926,x0,y234,safe&width=720",
      "https://cdn.faire.com/fastly/591557964661387e37e8e4853f95d87bd5b3cb79d7547638bc29232ec405d337.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Hindbag",
    images: [
      "https://cdn.faire.com/fastly/b58e94d0465e492a25c945a8bdb3b2faf342134541a5216c17e45c51e9d39f1d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=800,800,x0,y0,safe&width=720",
      "https://cdn.faire.com/fastly/c1bb39e5de859ee8653f2d071e805ad5a805e8d7f93b51ba282b3576a8127006.webp?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/5393cc5490e857dd28648e260b981b5ed3e526ae32d87e054c0cdfc0c2a95533.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/d241732fe7e5d0173f76a74496e16716ed8f77d1c6ca078f1abc08470098dbf2.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "The K2 Yak chews",
    images: [
      "https://cdn.faire.com/fastly/6ff663e745c9b37999d6f477c72cc5b7863d9556a3a127b65df366f7a91a9a86.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/523093896ded531cb6f53ccb20d7c35364114dc6494f1938e9477173bce30c06.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "Mad Beauty",
    images: [
      "https://cdn.faire.com/fastly/cb330f1a51fde7e28aff43a66ce0bf991c6f89ecde8a0c1e0bffcd697fb72f2d.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/06814dc743e85469459b8aa6335cfc7d3d131992aec0f10f89ee5a185ece7666.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/2a80434d2907f359a4b4975605778f73cc67c61345bb30460e43558cd2a1bc4d.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
  {
    name: "The K2 Yak chews",
    images: [
      "https://cdn.faire.com/fastly/6ff663e745c9b37999d6f477c72cc5b7863d9556a3a127b65df366f7a91a9a86.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
      "https://cdn.faire.com/fastly/523093896ded531cb6f53ccb20d7c35364114dc6494f1938e9477173bce30c06.jpeg?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=720&precrop=1:1,smart&width=720",
    ],
    ratings: 4.8,
  },
];

const listItems = [
  { text: "Terms of Service", url: "#" },
  { text: "Privacy Policy", url: "#" },
  { text: "Cookie Policy", url: "#" },
  { text: "IP Policy", url: "#" },
  { text: "Sitemap", url: "#" },
];

export { nav, tabs, products, listItems };
