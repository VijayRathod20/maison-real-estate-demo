/* ===== Sample listing data =====
   In the real Wix build this becomes a Wix Data Collection (CMS),
   and each card links to a dynamic page. Swap these records for the
   client's sample data — same fields, same structure. */
const LISTINGS = [
  {
    id: 1,
    title: "Cliffside Glass Villa",
    location: "Malibu, CA",
    price: 4250000,
    beds: 4, baths: 5, area: 4200,
    tag: "For sale",
    lat: 34.0259, lng: -118.7798,
    amenities: ["Pool", "Sea view", "Garage", "Gym"],
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    desc: "A sculptural glass residence perched above the Pacific. Floor-to-ceiling windows, infinity pool and a private path to the shore."
  },
  {
    id: 2,
    title: "The Garden Townhouse",
    location: "Lisbon, Portugal",
    price: 890000,
    beds: 3, baths: 2, area: 2100,
    tag: "For sale",
    lat: 38.7223, lng: -9.1393,
    amenities: ["Garden", "Garage"],
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80",
    desc: "Restored 19th-century townhouse with a walled garden, original tilework and a sun-filled rooftop terrace over the Alfama rooftops."
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "Dubai, UAE",
    price: 3100000,
    beds: 3, baths: 4, area: 3400,
    tag: "For sale",
    lat: 25.1972, lng: 55.2744,
    amenities: ["Pool", "Gym", "Sea view"],
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
    desc: "Full-floor penthouse with wraparound terraces, a private pool and uninterrupted views of the marina skyline."
  },
  {
    id: 4,
    title: "Modern Forest Retreat",
    location: "Aspen, CO",
    price: 2750000,
    beds: 5, baths: 4, area: 5100,
    tag: "For sale",
    lat: 39.1911, lng: -106.8175,
    amenities: ["Garage", "Garden", "Gym"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    desc: "Warm timber-and-stone retreat tucked into the pines. Vaulted living spaces, heated floors and a wellness suite with sauna."
  },
  {
    id: 5,
    title: "Coastal Minimalist House",
    location: "Sydney, Australia",
    price: 1980000,
    beds: 4, baths: 3, area: 2800,
    tag: "For sale",
    lat: -33.8688, lng: 151.2093,
    amenities: ["Pool", "Sea view", "Garden"],
    img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    desc: "Clean white-rendered home steps from the beach, with an open courtyard, lap pool and seamless indoor-outdoor living."
  },
  {
    id: 6,
    title: "City Loft Apartment",
    location: "New York, NY",
    price: 1250000,
    beds: 2, baths: 2, area: 1500,
    tag: "For sale",
    lat: 40.7128, lng: -74.0060,
    amenities: ["Gym", "Garage"],
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
    desc: "Bright converted loft with exposed brick, oversized industrial windows and a doorman building in the heart of SoHo."
  },
  {
    id: 7,
    title: "Provence Stone Farmhouse",
    location: "Provence, France",
    price: 1450000,
    beds: 5, baths: 3, area: 3600,
    tag: "For sale",
    lat: 43.9352, lng: 5.0539,
    amenities: ["Pool", "Garden", "Garage"],
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80",
    desc: "Honey-stone mas surrounded by lavender fields, with a heated pool, olive grove and a beautifully renovated farmhouse kitchen."
  },
  {
    id: 8,
    title: "Lakefront Contemporary",
    location: "Lake Como, Italy",
    price: 3850000,
    beds: 4, baths: 4, area: 3900,
    tag: "For sale",
    lat: 45.9856, lng: 9.2580,
    amenities: ["Pool", "Sea view", "Garden", "Gym"],
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    desc: "Glass-and-steel villa on the water's edge with a private dock, infinity pool and panoramic views across Lake Como."
  }
];
