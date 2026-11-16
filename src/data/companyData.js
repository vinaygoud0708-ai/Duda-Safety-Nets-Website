export const COMPANY_INFO = {
  name: "Dúda Safety Nets",
  tagline: "Bangalore's Premier Manufacturer & Authorized Dealer",
  phone: "+91 9611225211",
  phoneClean: "919611225211",
  email: "contact@dudasafetynets.com",
  address: "#10, 1st Cross, 1st Main, Vaderahalli, Muneshwara Layout, MS Palya, Bengaluru - 560097, Karnataka",
  hours: "Monday – Sunday: 8:00 AM – 9:00 PM",
  mapsUrl: "https://maps.google.com/?q=13.0886,77.5458",
  googleEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.126487102123!2d77.543225!3d13.088621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae22961d68a3bb%3A0x6e8e8b61c4710188!2sMuneshwara%20Layout%2C%20Vaderahalli%2C%20Bengaluru%2C%20Karnataka%20560097!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappBase: "https://wa.me/919611225211",
};

export const createWhatsAppLink = (message) => {
  const encoded = encodeURIComponent(message || "Hello Dúda Safety Nets! I want to request a free site inspection and quote for safety nets in Bangalore.");
  return `${COMPANY_INFO.whatsappBase}?text=${encoded}`;
};

export const BANGALORE_AREAS = [
  "MS Palya", "Yelahanka", "Hebbal", "Whitefield", "HSR Layout",
  "Koramangala", "Jayanagar", "Electronic City", "Indiranagar",
  "Marathahalli", "Bellandur", "Sarjapur Road", "Kanakapura Road",
  "Bannerghatta Road", "JP Nagar", "Banashankari", "Rajajinagar",
  "Malleshwaram", "RT Nagar", "Vidyaranyapura", "Sahakara Nagar",
  "Thanisandra", "Hennur Road", "Devanahalli"
];

export const CORE_MATERIALS = [
  {
    id: "garware",
    title: "Garware High-Tensile Nets",
    badge: "ISO 9001 Certified",
    tagline: "India's #1 Safety Standard",
    description: "Original Garware High-Density Polyethylene nets with heat-set knots, 100% virgin polymer, and 300+ KLY UV stabilization for extreme Bangalore sun exposure.",
    specs: [
      { label: "Lifespan", value: "10 - 15 Years" },
      { label: "Breaking Strength", value: "Up to 400 kg" },
      { label: "Mesh Openings", value: "25mm / 30mm / 40mm" },
      { label: "Warranty", value: "Up to 10 Years" },
      { label: "Anchors", value: "SS 304 Eye Bolts" }
    ],
    features: ["Heat-set non-slip knots", "Weather-resistant 100% virgin polymer", "Zero sagging over time", "Child & pet fall protection"]
  },
  {
    id: "hdpe-nylon",
    title: "HDPE Nylon Multi-Filament",
    badge: "Maximum Resilience",
    tagline: "Double Knot Heavy Duty",
    description: "Multi-strand braided nylon netting treated for all-weather resistance, ideal for building shafts, duct areas, monkey prevention, and sports enclosures.",
    specs: [
      { label: "Lifespan", value: "8 - 12 Years" },
      { label: "Breaking Strength", value: "250 - 350 kg" },
      { label: "Mesh Openings", value: "20mm / 30mm / 50mm" },
      { label: "Warranty", value: "5 - 8 Years" },
      { label: "Anchors", value: "Brass & SS 304 Fasteners" }
    ],
    features: ["High abrasion & impact resistance", "Anti-chew animal deterrent", "Flexible for odd architectural shapes", "Available in Green, White & Black"]
  },
  {
    id: "transparent",
    title: "Transparent Monofilament Nets",
    badge: "Aesthetic Choice",
    tagline: "100% Unhindered Skyline View",
    description: "Ultra-thin, crystal-clear 0.8mm - 1.2mm Japanese monofilament yarn. Virtually invisible from 5 meters away while providing robust pigeon protection.",
    specs: [
      { label: "Lifespan", value: "5 - 8 Years" },
      { label: "Breaking Strength", value: "120 - 180 kg" },
      { label: "Mesh Openings", value: "25mm / 30mm" },
      { label: "Warranty", value: "5 Years" },
      { label: "Visibility", value: "98% Light Transmission" }
    ],
    features: ["Zero aesthetic disruption", "Maintains balcony views & sunlight", "Non-toxic & bird-friendly", "Rust-proof perimeter cabling"]
  },
  {
    id: "invisible-grill",
    title: "SS 316 Invisible Grills",
    badge: "Architectural Luxury",
    tagline: "Marine-Grade Cable Safety",
    description: "High-tensile Grade 316 Stainless Steel cables coated in transparent virgin Teflon/Nylon membrane, mounted into high-gauge extruded aluminium tracks.",
    specs: [
      { label: "Cable Diameter", value: "2.0mm / 2.5mm / 3.0mm" },
      { label: "Tensile Strength", value: "400+ kg Break Force" },
      { label: "Cable Spacing", value: "2\" (50mm) or 3\" (75mm)" },
      { label: "Warranty", value: "10 Years Replacement" },
      { label: "Hardware", value: "Marine Grade SS 316" }
    ],
    features: ["Modern architectural design", "Cannot be cut by regular scissors", "Emergency quick-release cuttable", "Zero maintenance & 100% rust-free"]
  }
];

export const WORK_PROCESS = [
  {
    step: "01",
    title: "Requirement Discussion",
    desc: "We discuss your specific safety or bird-control needs, balcony layout, and recommend the optimal net type and aperture for your property.",
    duration: "10 Mins Consultation"
  },
  {
    step: "02",
    title: "Free Doorstep Measurement",
    desc: "Our field engineer visits your Bangalore home with high-precision digital laser tools to take exact measurements and provide a fixed quote.",
    duration: "Same-Day Within 2 Hours"
  },
  {
    step: "03",
    title: "Material Preparation",
    desc: "Genuine Garware rolls or SS 316 cables are precision-cut and pre-tensioned to eliminate sagging, tailored to your exact balcony contours.",
    duration: "Factory Custom Finishing"
  },
  {
    step: "04",
    title: "Installation & Support",
    desc: "Certified rope-access safety technicians securely anchor the net using SS 304/316 hardware, test tension, and hand over your stamped warranty card.",
    duration: "2-3 Hours Rapid Fitment"
  }
];

export const FAQ_ITEMS = [
  {
    q: "How do I know if the Garware safety nets are 100% genuine?",
    a: "We are authorized dealers and provide authentic manufacturer test certificates, genuine Garware branded heat-stamped packaging rolls, and an official stamped warranty card on completion. Our nets are UV-stabilized virgin HDPE with heat-set knots."
  },
  {
    q: "What is the difference between Invisible Grills and Nylon Safety Nets?",
    a: "SS 316 Invisible Grills use ultra-high tensile marine-grade stainless steel cables spaced 2-3 inches apart inside aluminum tracks—offering a sleek, luxury architectural look with 400kg+ fall protection. Nylon and Garware nets use high-strength diamond mesh, which is budget-friendly and completely closes the balcony against both small birds and fall hazards."
  },
  {
    q: "How much time does installation take after booking a site visit?",
    a: "We offer doorstep inspection across Bengaluru within 2 hours of your call. Standard balcony or window installations are completed within 2 to 3 hours on the same day without disturbing your daily routine."
  },
  {
    q: "Do you use rust-proof hardware that will not damage balcony tiles?",
    a: "Yes! We use only SS 304 and SS 316 stainless steel eye-bolts and heavy-duty brass/nylon anchor fasteners. We use specialized diamond-core masonry drill bits to prevent tile chipping or cracking during installation."
  },
  {
    q: "What warranty do you provide on safety nets and invisible grills?",
    a: "We offer up to a 10-Year Comprehensive Replacement Warranty on Garware Safety Nets and SS 316 Invisible Grills against sun degradation, rope breakage, and loose anchors. Nylon HDPE nets come with a 5 to 8-year warranty."
  },
  {
    q: "Are the nets safe for pets like cats and dogs?",
    a: "Absolutely. Our pet safety nets feature smaller 25mm-30mm apertures and reinforced multi-strand braided twine that resists claws and chewing, preventing curious cats and dogs from slipping through balcony railings."
  }
];
