export const SERVICE_CATEGORIES = [
  { id: "all", label: "All (16)" },
  { id: "home", label: "Home & Balcony" },
  { id: "birds", label: "Birds & Pigeons" },
  { id: "sports", label: "Sports & Turf" },
  { id: "commercial", label: "Commercial" }
];

export const SERVICES = [
  {
    id: "pigeon-safety-nets",
    title: "Pigeon Safety Nets",
    category: "birds",
    badge: "Most Popular",
    image: "./images/pigeon-safety-nets.jpg",
    shortDesc: "100% pigeon-proofing for balconies, utility ledges, and AC outdoor units without blocking airflow or sunlight.",
    fullDesc: "Specially engineered high-density UV-treated polyethylene netting that prevents pigeon roosting, droppings, and bird-borne parasites while preserving your exterior view. Mounted with SS 304 eye-bolts with zero sag guarantee.",
    specs: {
      material: "Garware HDPE / Nylon Monofilament",
      meshSize: "25mm / 30mm / 40mm",
      twine: "0.8mm to 2.5mm Braided",
      warranty: "5 - 10 Years",
      suitableFor: "Balconies, Utility Areas, AC Ledges, Windows"
    },
    highlights: ["Harmless to birds", "Zero drop in light or breeze", "High aesthetic clarity"]
  },
  {
    id: "children-safety-nets",
    title: "Children Safety Nets",
    category: "home",
    badge: "Maximum Fall Safety",
    image: "./images/children-safety-nets.jpg",
    shortDesc: "High-tensile fall-prevention barrier for high-rise balconies, stairwells, and windows with 350kg+ load rating.",
    fullDesc: "Child safety netting engineered with industrial heat-set knot geometry to safeguard toddlers and young children from high-rise falls. Withstands heavy body impacts, climbing pressure, and intense Bangalore sunlight.",
    specs: {
      material: "Garware High-Density Polyethylene",
      meshSize: "25mm / 30mm",
      twine: "1.5mm - 2.5mm Multi-Strand",
      warranty: "10 Years Replacement",
      suitableFor: "High-Rise Balconies, Staircase Voids, Open Windows"
    },
    highlights: ["Tested breaking strength > 350kg", "Anchor spacing 1.5 - 2 inches", "Certified child-safe virgin polymer"]
  },
  {
    id: "invisible-grills",
    title: "SS 316 Invisible Grills",
    category: "home",
    badge: "Architectural Luxury",
    image: "./images/invisible-grills.jpg",
    shortDesc: "High-tensile marine-grade stainless steel cables inside aluminum tracks offering high security with completely unhindered views.",
    fullDesc: "The ultimate modern balcony design. High-tensile Grade 316 stainless steel wire ropes encased in clear protective nylon sheaths, anchored into heavy-gauge extruded aluminium tracks. Fire-safe, rust-proof, and virtually transparent from a distance.",
    specs: {
      material: "Marine Grade SS 316 Wire Rope",
      meshSize: "2\" (50mm) or 3\" (75mm) Cable Spacing",
      twine: "2.0mm / 2.5mm / 3.0mm Cable Diameter",
      warranty: "10 Years Comprehensive",
      suitableFor: "Luxury Apartments, High-Rise Villas, French Windows"
    },
    highlights: ["400kg+ tensile breaking strength", "Zero rust in all seasons", "Emergency cuttable for fire rescue"]
  },
  {
    id: "cricket-nets",
    title: "Cricket Practice Nets",
    category: "sports",
    badge: "Sports Grade",
    image: "./images/cricket-nets.jpg",
    shortDesc: "Heavy-duty impact-absorbing cricket batting & bowling cage nets for rooftops, schools, academies, and clubs.",
    fullDesc: "Engineered specifically to absorb high-velocity leather cricket ball impacts (up to 160 km/h). Weatherproof, knotless or knotted high-tensile HDPE twine constructed with reinforced perimeter guy-wire roping.",
    specs: {
      material: "Heavy-Duty Braided HDPE Multi-Strand",
      meshSize: "30mm / 45mm Square Mesh",
      twine: "2.5mm to 4.0mm High Denier Twine",
      warranty: "5 - 8 Years",
      suitableFor: "Apartment Terraces, Cricket Academies, Schools, Farmhouses"
    },
    highlights: ["Ball impact shock-absorbing weave", "Custom MS pipe structure fabrication", "Complete cage enclosure"]
  },
  {
    id: "duct-area-nets",
    title: "Duct Area Covering Nets",
    category: "commercial",
    badge: "Certified Rope Access",
    image: "./images/duct-area-nets.jpg",
    shortDesc: "Deep building shaft netting to stop pigeon infestation, foul odors, and debris accumulation in apartments.",
    fullDesc: "Plumbing shafts and duct areas are common pigeon nesting hazards. Our certified rope-access technicians descend deep shafts to seal duct voids completely from top to bottom, keeping shafts hygienic and pigeon-free.",
    specs: {
      material: "Garware UV-Treated Heavy Nylon",
      meshSize: "30mm / 40mm",
      twine: "1.5mm - 2.0mm Heavy Twine",
      warranty: "8 Years Guarantee",
      suitableFor: "Apartment Plumbing Shafts, Commercial Ventilation Wells"
    },
    highlights: ["Deep-shaft rope access installation", "Prevents foul smells & diseases", "Debris fall protection"]
  },
  {
    id: "house-covering-nets",
    title: "Whole House Covering Nets",
    category: "commercial",
    badge: "Complete Enclosure",
    image: "./images/house-covering-nets.jpg",
    shortDesc: "Full building facade encapsulation for villas, standalone homes, and apartments for 100% bird & monkey freedom.",
    fullDesc: "For standalone villas and apartment blocks facing heavy bird or monkey intrusions across all facades. A continuous, seamless external protective envelope covers all windows, balconies, and parapets while remaining subtle to the eye.",
    specs: {
      material: "Garware High-Density Polyethylene",
      meshSize: "25mm / 30mm",
      twine: "1.2mm - 2.0mm Braided Nylon",
      warranty: "8 - 10 Years",
      suitableFor: "Independent Villas, Residential Towers, Heritage Buildings"
    },
    highlights: ["Zero unsealed gaps", "Preserves outdoor architecture", "Heavy-gauge boundary wire"]
  },
  {
    id: "monkey-safety-nets",
    title: "Monkey Protection Nets",
    category: "home",
    badge: "Extra Heavy Duty",
    image: "./images/monkey-safety-nets.jpg",
    shortDesc: "Reinforced thick-gauge safety netting designed to withstand aggressive monkeys climbing, shaking, and biting.",
    fullDesc: "Monkeys possess immense jaw strength and climbing weight that easily damage lightweight nets. Our monkey defense systems utilize heavy 2.5mm - 3.5mm thick braided nylon with reinforced steel perimeter boundary cabling.",
    specs: {
      material: "Double-Knot Thick Gauge Braided Nylon",
      meshSize: "40mm / 50mm Diamond Pattern",
      twine: "2.5mm - 3.5mm Extra Heavy",
      warranty: "5 - 8 Years",
      suitableFor: "Balconies near trees, Terraces, Kitchen utility ledges"
    },
    highlights: ["Bite-resistant high-denier material", "Anchor pull-tested for 250kg+", "Keeps pets & homes secure"]
  },
  {
    id: "bird-spikes",
    title: "Stainless Steel Bird Spikes",
    category: "birds",
    badge: "Zero Maintenance",
    image: "./images/bird-spikes.jpg",
    shortDesc: "SS 304 marine-grade anti-perch spikes on UV-stabilized polycarbonate bases for narrow window ledges and AC units.",
    fullDesc: "Humane, zero-harm physical deterrent that prevents pigeons and crows from landing or roosting on narrow horizontal surfaces like AC outdoor units, window sills, signboards, and parapet walls.",
    specs: {
      material: "SS 304 Grade Metal Rods on Polycarbonate",
      meshSize: "Multi-Angle 32 Spike Cluster per Foot",
      twine: "1.3mm Stainless Steel Rods",
      warranty: "100% Rust-Proof Lifetime",
      suitableFor: "AC Outdoor Units, Narrow Sills, Parapet Borders, Signages"
    },
    highlights: ["Does not harm birds", "Extreme heat & UV resistant", "Industrial silicone adhesive or screw fixed"]
  },
  {
    id: "coconut-tree-nets",
    title: "Coconut Tree Safety Nets",
    category: "commercial",
    badge: "Property Protection",
    image: "./images/coconut-tree-nets.jpg",
    shortDesc: "Suspended catchment nets under coconut trees to prevent falling coconuts and dry fronds from damaging cars and people.",
    fullDesc: "Falling coconuts can weigh over 2-3 kg and cause severe injuries or vehicle damage. Our heavy-gauge catchment nets are suspended with high-tension nylon guy-wires underneath the tree canopy to safely arrest falling coconuts.",
    specs: {
      material: "High Impact Absorption Braided HDPE",
      meshSize: "40mm / 50mm Mesh",
      twine: "2.5mm - 3.5mm Heavy Multi-Ply",
      warranty: "5 Years",
      suitableFor: "Apartment Driveways, Villa Gardens, Parking Lots, Playgrounds"
    },
    highlights: ["Saves parked luxury vehicles", "Tensioned sling catchment design", "Leaves tree growth undisturbed"]
  },
  {
    id: "glass-protection-nets",
    title: "Glass Facade Protection Nets",
    category: "commercial",
    badge: "Facade Defense",
    image: "./images/glass-protection-nets.jpg",
    shortDesc: "Protective mesh barriers for commercial glass curtain walls, atriums, and skylights against debris and birds.",
    fullDesc: "Prevents high-speed bird collisions, falling hail, and debris from cracking costly architectural glass facades. Also prevents glass shatter fragments from falling onto pedestrian zones below during extreme storms.",
    specs: {
      material: "UV-Stabilized Translucent Monofilament",
      meshSize: "25mm / 30mm",
      twine: "1.2mm - 2.0mm High Tensile",
      warranty: "8 Years",
      suitableFor: "IT Tech Parks, Corporate Atriums, Glass Skylights, Showrooms"
    },
    highlights: ["95% optical transparency", "Complies with high-rise building norms", "Wind-tunnel tested aerodynamic load"]
  },
  {
    id: "drag-nets",
    title: "Drag Nets & Perimeter Netting",
    category: "sports",
    badge: "Field Safety",
    image: "./images/drag-nets.jpg",
    shortDesc: "Heavy ground-dragging boundary nets for sports fields, multi-purpose turfs, agricultural ponds, and storage yards.",
    fullDesc: "Rugged bottom-weighted perimeter nets designed to divide athletic grounds, prevent sports balls from rolling into traffic or drains, and provide secure containment across industrial yards.",
    specs: {
      material: "Marine-Grade Polyethylene with Weighted Bottom",
      meshSize: "25mm / 40mm / 50mm",
      twine: "2.0mm - 3.0mm Braided",
      warranty: "5 Years",
      suitableFor: "Sports Complexes, School Playgrounds, Football Turfs, Farms"
    },
    highlights: ["Heavy lead-line weighted lower hem", "Abrasion-resistant dragged surface", "Quick slide curtain hardware"]
  },
  {
    id: "staircase-terrace-nets",
    title: "Staircase & Terrace Nets",
    category: "home",
    badge: "Child & Senior Safety",
    image: "./images/staircase-terrace-nets.jpg",
    shortDesc: "Vertical void netting for open stairwells and open roof terraces to prevent fatal falls in multi-storey residences.",
    fullDesc: "Open staircase wells and low terrace parapets pose severe hazards for toddlers, elderly family members, and house pets. We fit seamless vertical nets from floor to ceiling or along handrails with customized brackets to harmonize with interior aesthetics.",
    specs: {
      material: "Garware HDPE / White Nylon Monofilament",
      meshSize: "25mm / 30mm",
      twine: "1.5mm - 2.5mm Multi-Strand",
      warranty: "8 - 10 Years",
      suitableFor: "Duplex Bungalows, Apartment Stairwells, Open Terraces, Lofts"
    },
    highlights: ["Custom fit to spiral & straight stairs", "Matches interior wall paint (White/Ivory/Clear)", "Zero sag under bodyweight"]
  },
  {
    id: "pet-cat-safety-nets",
    title: "Pet & Cat Safety Nets",
    category: "home",
    badge: "Claw & Chew Resistant",
    image: "./images/pet-cat-safety-nets.jpg",
    shortDesc: "Bite-resistant, small-mesh balcony and window netting to keep playful cats and dogs safe from high-rise falls.",
    fullDesc: "High-Rise Syndrome is a leading cause of pet injuries in Bangalore. Our specialized pet nets feature tight 20mm-25mm apertures and multi-core braided twine that resists feline clawing and teeth chewing while giving pets fresh air.",
    specs: {
      material: "Multi-Filament High-Twist Nylon",
      meshSize: "20mm / 25mm Claw-Safe Mesh",
      twine: "1.5mm - 2.0mm Heavy Braided",
      warranty: "5 - 8 Years",
      suitableFor: "Balconies, Grills, Kitchen Windows, Open Balcony Rails"
    },
    highlights: ["Tight mesh stops small kittens slipping through", "Smooth edge knots protect paws", "Non-toxic food-safe polymer"]
  },
  {
    id: "sports-nets",
    title: "Multi-Sport Ground Netting",
    category: "sports",
    badge: "Turf & Academy",
    image: "./images/sports-nets.jpg",
    shortDesc: "High-altitude boundary netting for football turfs, box cricket, badminton courts, and school athletic facilities.",
    fullDesc: "Complete perimeter netting systems up to 40 feet high for modern artificial turf grounds. Designed with heavy-gauge GI boundary wire ropes and turnbuckles to withstand high winds and repeated heavy football strikes.",
    specs: {
      material: "UV-Stabilized High Tenacity Polyethylene",
      meshSize: "40mm / 45mm / 50mm",
      twine: "2.5mm - 3.5mm Multi-Filament",
      warranty: "5 - 7 Years",
      suitableFor: "Commercial 5-a-side Football Turfs, Box Cricket, Tennis Courts"
    },
    highlights: ["Resists 100+ km/h ball strikes", "Full rooftop cage & side walls", "Complete GI pole support integration"]
  },
  {
    id: "construction-safety-nets",
    title: "Construction & Debris Nets",
    category: "commercial",
    badge: "Industrial Safety",
    image: "./images/construction-safety-nets.jpg",
    shortDesc: "Heavy-duty dual-layer fall arrest and fine debris containment nets complying with Indian & International safety standards.",
    fullDesc: "Heavy-duty dual-mesh safety nets engineered for building construction sites. Features an inner 10mm-20mm fine debris mesh to catch falling tools and mortar, backed by a high-tensile 100mm load-bearing rope net that catches falling personnel.",
    specs: {
      material: "High-Tensile Polypropylene + Micro Debris Mesh",
      meshSize: "Dual Layer: 100mm Primary + 20mm Secondary",
      twine: "4.0mm - 8.0mm Heavy Polypropylene Rope",
      warranty: "Project Certified Standard",
      suitableFor: "High-Rise Construction, Scaffolding, Demolition Zones"
    },
    highlights: ["Tested for 100kg drop from 6 meters", "Complies with IS 5175 safety norms", "Reduces site injury liability"]
  },
  {
    id: "garden-bird-shade-nets",
    title: "Anti-Bird, Garden & Shade Nets",
    category: "birds",
    badge: "Eco & Plant Care",
    image: "./images/garden-bird-shade-nets.jpg",
    shortDesc: "Multi-purpose agro shade nets (50%–90% shade) protecting rooftop gardens, balconies, and plants from heat & birds.",
    fullDesc: "Protects delicate terrace gardens, potted plants, and outdoor sitting lounges from scorching Bangalore UV sun rays while stopping birds from plucking fruits or vegetables. Available in attractive Forest Green, White, and Beige.",
    specs: {
      material: "100% Virgin HDPE Knitted Ribbon",
      meshSize: "50% / 75% / 90% Sunlight Filtration",
      twine: "Tape & Monofilament Hybrid Knit",
      warranty: "5 Years UV Stabilized",
      suitableFor: "Terrace Gardens, Greenhouse Balconies, Pergolas, Nurseries"
    },
    highlights: ["Regulates micro-climate for plants", "Shields against birds & insects", "Reduces balcony heat up to 6°C"]
  }
];
