export interface Space {
  id: string
  name: string
  tagline: string
  description: string
  thumbnail: string
  images: string[]
  capacity: string
}

export const heroContent = {
  heroImage: "https://cdn.prod.website-files.com/65f82e537b14755c37f50b36/660d33f0b852314714689585_prangana8.webp",
  heroTitle: "Kaup Pada",
  heroSubtitle: "The event venue — where every celebration finds its home",
  experienceTitle: "Where every celebration becomes a story to tell",
  experienceDescription: "Nestled in the serene landscapes, Kaup Pada offers a perfect blend of charm and character. Whether it's a wedding, a corporate retreat, or an intimate gathering, our venue transforms every occasion into something unforgettable.",
  ctaText: "Plan your celebration at Kaup Pada",
}

export const spaces: Space[] = [
  {
    id: "aaradhya",
    name: "Aaradhya",
    tagline: "A grand hall where celebrations come alive",
    description: "Aaradhya is our crown jewel — a magnificently designed indoor hall that blends contemporary elegance with traditional warmth. Bathed in natural light through the day and transformed by ambient lighting at night, this space is perfect for weddings, receptions, and grand celebrations. The soaring ceilings and exquisite detailing create an atmosphere of timeless sophistication.",
    thumbnail: "/interiors/515A0453.jpg",
    images: [
      "/interiors/515A0453.jpg",
      "/interiors/515A0454.jpg",
      "/interiors/515A0455.jpg",
      "/interiors/515A0456.jpg",
    ],
    capacity: "Accommodates up to 200 guests",
  },
  {
    id: "saajni",
    name: "Saajni",
    tagline: "An open-air haven surrounded by nature's embrace",
    description: "Saajni is our enchanting outdoor venue where nature sets the stage for your most beautiful moments. Surrounded by lush greenery and adorned with fragrant blooms, this space offers a serene escape from the ordinary. Ideal for daytime ceremonies, cocktail evenings, and intimate garden parties, Saajni brings the charm of the outdoors to your celebration.",
    thumbnail: "/interiors/515A0457.jpg",
    images: [
      "/interiors/515A0457.jpg",
      "/interiors/515A0458.jpg",
      "/interiors/515A0460.jpg",
      "/interiors/515A0461.jpg",
    ],
    capacity: "Up to 150 guests",
  },
  {
    id: "nirmiti",
    name: "Nirmiti",
    tagline: "Where every detail is crafted for memorable moments",
    description: "Nirmiti is a testament to thoughtful design — a versatile banquet space that adapts seamlessly to your vision. Whether it's a sit-down dinner, a cocktail reception, or a cultural performance, this space offers the perfect backdrop. With its refined interiors and state-of-the-art amenities, Nirmiti ensures every event unfolds effortlessly.",
    thumbnail: "/interiors/515A0462.jpg",
    images: [
      "/interiors/515A0462.jpg",
      "/interiors/515A0516.jpg",
      "/interiors/515A0734.jpg",
    ],
    capacity: "Seats up to 120 guests",
  },
  {
    id: "ananda-kuteera",
    name: "Ananda Kuteera",
    tagline: "An intimate enclave for your closest celebrations",
    description: "Ananda Kuteera is our cozy, intimate venue designed for smaller gatherings that require a personal touch. Perfect for haldi ceremonies, mehendi nights, baby showers, and private dinners, this space offers warmth and privacy. With its charming decor and secluded ambiance, Ananda Kuteera makes every intimate celebration feel extraordinary.",
    thumbnail: "/interiors/515A0812.jpg",
    images: [
      "/interiors/515A0812.jpg",
      "/interiors/515A0814.jpg",
    ],
    capacity: "Accommodates up to 30 guests",
  },
]

export const galleryImages: string[] = [
  "/interiors/515A0453.jpg",
  "/interiors/515A0454.jpg",
  "/interiors/515A0455.jpg",
  "/interiors/515A0456.jpg",
  "/interiors/515A0457.jpg",
  "/interiors/515A0458.jpg",
  "/interiors/515A0460.jpg",
  "/interiors/515A0461.jpg",
  "/interiors/515A0462.jpg",
  "/interiors/515A0516.jpg",
  "/interiors/515A0734.jpg",
  "/interiors/515A0812.jpg",
  "/interiors/515A0814.jpg",
]
