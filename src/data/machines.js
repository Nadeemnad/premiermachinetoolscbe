export const MACHINES_DATA = [
  {
    id: "pmt-st-200",
    name: "PMT SprintTurn 200 Pro",
    series: "Precision CNC Turning Center",
    category: "cnc-turning",
    industry: ["automotive", "aerospace", "general"],
    badge: "Most Popular",
    image: "/images/lathe_machine.jpg",
    tagline: "High-speed slant-bed CNC turning center engineered for heavy cutting and precision shafts.",
    priceRange: "₹18.5L – ₹24.0L",
    specs: {
      maxTurningDia: "320 mm",
      maxTurningLength: "450 mm",
      spindleSpeed: "4,500 RPM",
      spindleMotor: "11 / 15 kW",
      chuckSize: "8 inch (200 mm)",
      turretStations: "12-Station BMT-45 Live Tooling",
      rapidTraverse: "30 m/min (X/Z)",
      positioningAccuracy: "±0.003 mm",
      controller: "Fanuc 0i-TF Plus / Siemens 828D",
      weight: "4,200 kg"
    },
    features: [
      "Heavy-duty 45° slant bed monoblock casting for superior vibration damping",
      "Cartridge-type high precision spindle with P4 grade angular contact bearings",
      "Hydraulic 8-inch 3-jaw chuck with programmable hollow cylinder",
      "Fast servo-driven hydraulic 12-station indexing turret (0.18s indexing time)",
      "High-pressure 20-bar chip flush and automated chip conveyor"
    ]
  },
  {
    id: "pmt-vm-850",
    name: "PMT V-Mill 850 Performance",
    series: "Vertical Machining Center (VMC)",
    category: "vmc",
    industry: ["automotive", "die-mold", "general"],
    badge: "Flagship VMC",
    image: "/images/hero_cnc.jpg",
    tagline: "High-rigidity 3/4 Axis VMC optimized for rapid die & mold manufacturing and heavy machining.",
    priceRange: "₹26.0L – ₹33.5L",
    specs: {
      tableSize: "1,000 × 500 mm",
      travelXYZ: "850 / 520 / 560 mm",
      spindleSpeed: "10,000 / 12,000 RPM Direct Drive",
      spindleTaper: "BT-40 / BBT-40 Big Plus",
      spindleMotor: "15 / 18.5 kW High Torque",
      atcCapacity: "24 Tools Arm-type Twin Arm",
      rapidTraverse: "36 / 36 / 30 m/min",
      positioningAccuracy: "±0.002 mm",
      controller: "Mitsubishi M80 / Fanuc 0i-MF Plus",
      weight: "5,800 kg"
    },
    features: [
      "Meehanite high-grade casting with wide stance roller linear guideways",
      "Ceramic hybrid bearings with refrigerated oil coolant circulating system",
      "Through-spindle coolant (CTS) 20 Bar ready for deep hole drilling",
      "Twin-arm automatic tool changer (ATC) tool-to-tool time 1.5 seconds",
      "Full enclosure guarding with wash-down system and screw-type chip augers"
    ]
  },
  {
    id: "pmt-aero-5x",
    name: "PMT Aero-5X Precision Center",
    series: "Simultaneous 5-Axis Machining Center",
    category: "vmc",
    industry: ["aerospace", "medical", "die-mold"],
    badge: "Aerospace Grade",
    image: "/images/vmc_5axis.jpg",
    tagline: "Ultra-precision 5-axis trunnion machining center for aerospace blisks, impellers, and medical implants.",
    priceRange: "₹65.0L – ₹85.0L",
    specs: {
      tableDiameter: "Ø 600 mm Cradle Trunnion",
      travelXYZ: "650 / 650 / 500 mm",
      tiltAxisA: "-120° to +30°",
      rotaryAxisC: "360° Continuous",
      spindleSpeed: "18,000 / 24,000 RPM HSK-A63",
      spindleMotor: "25 kW Synchronous Built-in",
      atcCapacity: "40 / 60 Tools Chain Type",
      rapidTraverse: "48 m/min",
      positioningAccuracy: "±0.0015 mm with Heidenhain Glass Scales",
      controller: "Heidenhain TNC 640 / Siemens Sinumerik ONE",
      weight: "8,900 kg"
    },
    features: [
      "Rigid torque motor driven direct A/C tilting rotary table with zero backlash",
      "Dynamic thermal compensation sensors across columns and spindle housing",
      "Laser non-contact tool breakage detection and Renishaw OMP60 optical probe",
      "5-axis simultaneous kinematics calibration cycle (Auto-Kinematics)",
      "High-pressure 50 Bar CTS with dual bag filtration unit"
    ]
  },
  {
    id: "pmt-lathe-400",
    name: "PMT MasterLathe 400 Heavy",
    series: "Precision All-Geared Industrial Lathe",
    category: "precision-lathes",
    industry: ["general", "automotive", "pumps"],
    badge: "Shopfloor Workhorse",
    image: "/images/lathe_machine.jpg",
    tagline: "Rugged, induction hardened bed lathe for Coimbatore's pump, motor, and general engineering job shops.",
    priceRange: "₹5.5L – ₹8.2L",
    specs: {
      swingOverBed: "450 mm",
      distanceBetweenCenters: "1,000 / 1,500 mm",
      spindleBore: "58 mm / 80 mm Large Bore",
      spindleSpeeds: "16 Steps (25 – 1,800 RPM)",
      bedWidth: "340 mm Induction Hardened (55 HRC)",
      tailstockQuillDia: "65 mm (MT-4 taper)",
      mainMotor: "5.5 kW (7.5 HP)",
      digitalReadout: "3-Axis Precision Glass Scale DRO Included",
      positioningAccuracy: "0.01 mm",
      weight: "2,400 kg"
    },
    features: [
      "Heavily ribbed bed casting with gap bed removable piece for large flange turning",
      "Hardened and ground alloy steel gears running in continuous oil bath",
      "Precision taper roller bearings on spindle with runout <0.005 mm",
      "Quick-change universal gearbox for metric, imperial, and module threads",
      "Integrated emergency foot brake and automatic lubrication pump"
    ]
  },
  {
    id: "pmt-turn-mega",
    name: "PMT MegaTurn 650 XL",
    series: "Heavy-Duty Slant Bed CNC Lathe",
    category: "cnc-turning",
    industry: ["automotive", "heavy-engineering", "pumps"],
    badge: "Heavy Duty",
    image: "/images/lathe_machine.jpg",
    tagline: "High-torque CNC lathe designed for large diameter pump impellers, flanges, and oilfield valves.",
    priceRange: "₹34.0L – ₹42.0L",
    specs: {
      maxTurningDia: "650 mm",
      maxTurningLength: "1,200 mm",
      spindleSpeed: "2,500 RPM (High Torque Gearbox)",
      spindleMotor: "22 / 26 kW",
      chuckSize: "12 / 15 inch Hydraulic",
      turretStations: "12-Station Heavy BMT-65",
      rapidTraverse: "24 / 24 m/min",
      positioningAccuracy: "±0.003 mm",
      controller: "Fanuc 0i-TF Plus (Manual Guide i)",
      weight: "7,800 kg"
    },
    features: [
      "2-speed ZF gearbox for extreme low-end torque up to 1,450 Nm",
      "Wide box ways with Turcite-B coated mating surfaces hand-scraped to perfection",
      "Programmable servo tailstock with MT-5 live center",
      "Heavy-duty hinge belt chip conveyor with oil skimmer",
      "Automatic tool setter arm for rapid tool offset calibration"
    ]
  },
  {
    id: "pmt-tools-carbide",
    name: "PMT UltraHard Precision Tooling Kit",
    series: "Carbide End Mills & Tooling Systems",
    category: "tooling",
    industry: ["automotive", "aerospace", "die-mold"],
    badge: "Tooling & Accessories",
    image: "/images/tooling_accessories.jpg",
    tagline: "Solid micrograin tungsten carbide end mills, high-balance BT40 tool holders, and precision collets.",
    priceRange: "₹1,200 – ₹45,000 / set",
    specs: {
      coating: "AlTiN / TiSiN Nano-Composite Coating",
      hardness: "Up to 68 HRC Hardened Steel Cutters",
      holders: "BT40 / BT50 Dual Contact ER32, ER40, Hydraulic Chucks",
      colletRunout: "< 0.003 mm Ultra Precision",
      balancing: "G2.5 @ 25,000 RPM Dynamic Balanced",
      accessories: "Edge Finders, Z-Axis Setters, Pull Studs, Clamping Kits",
      origin: "Engineered in Coimbatore with German Carbide Rods",
      weight: "Customizable Tooling Package"
    },
    features: [
      "Ultra-fine grain carbide substrate with superior thermal shock resistance",
      "Variable helix angle flutes to eliminate chatter during aggressive trochoidal milling",
      "Pre-balanced toolholders ensure spindle life protection at high RPMs",
      "Hermetic seals for coolant pressures up to 70 Bar",
      "Same-day dispatch across Coimbatore, Tirupur, Erode, and Chennai"
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "PMT's V-Mill 850 has been running 20 hours a day in our automotive pump manufacturing unit in Peelamedu, Coimbatore. The accuracy is consistently within 3 microns. Their local support team arrives within 2 hours whenever we need routine servicing.",
    author: "R. Sundararajan",
    title: "Managing Director",
    company: "Apex Precision Auto Components Ltd, Coimbatore",
    rating: 5,
    machine: "PMT V-Mill 850 Performance"
  },
  {
    quote: "We invested in the PMT Aero-5X for our aerospace subcontracting projects. The surface finish on titanium blisks eliminated secondary polishing. Outstanding value compared to imported European machines with zero compromise on rigidity.",
    author: "K. Mohanraj",
    title: "Chief of Manufacturing",
    company: "AeroTech Components & Forgings, Coimbatore",
    rating: 5,
    machine: "PMT Aero-5X Precision Center"
  },
  {
    quote: "As a premier job-shop in SIDCO Kurichi, we rely on three PMT SprintTurn 200 lathes. The cycle time reduction on hardened steel shafts helped us win high-volume OEM contracts.",
    author: "G. Venkatesh",
    title: "Plant Operations Head",
    company: "Sri Krishna Engineering Works, SIDCO Coimbatore",
    rating: 5,
    machine: "PMT SprintTurn 200 Pro"
  }
];

export const STATS = [
  { value: "30+", label: "Years Engineering Legacy", subtext: "Serving Coimbatore Since 1994" },
  { value: "1,500+", label: "Machines Installed", subtext: "Across India & Middle East" },
  { value: "±0.002mm", label: "Machining Tolerance", subtext: "German & Japanese Standards" },
  { value: "< 4 Hrs", label: "Local Service Response", subtext: "Dedicated TN Service Hub" }
];

export const INDUSTRIES = [
  {
    id: "automotive",
    title: "Automotive & Electric Mobility",
    desc: "Engine blocks, transmission shafts, EV motor casings, brake discs, and high-volume precision turned pins.",
    icon: "Car",
    highlights: ["Cycle-time optimization", "High-volume repeatability", "Auto-gantry loader compatibility"]
  },
  {
    id: "aerospace",
    title: "Aerospace & Defense",
    desc: "Titanium impellers, turbine blisks, structural airframe forgings, and high-temperature alloy components.",
    icon: "Plane",
    highlights: ["Simultaneous 5-axis capability", "Laser tool probing", "Heidenhain optical glass scales"]
  },
  {
    id: "pumps",
    title: "Pumps, Motors & Valves",
    desc: "Coimbatore's hallmark pump impellers, submersible motor shafts, valve bodies, and hydraulic manifolds.",
    icon: "Zap",
    highlights: ["Deep boring stability", "Heavy casting face turning", "Vibration damping Meehanite iron"]
  },
  {
    id: "die-mold",
    title: "Die, Mold & Tooling",
    desc: "Plastic injection molds, press stamping dies, forging tools, and high-hardness (60+ HRC) core cavity milling.",
    icon: "Boxes",
    highlights: ["High-speed 18k RPM spindle", "Mirror finish surface milling", "Nano-smoothing lookahead"]
  }
];

export const FAQS = [
  {
    q: "Do you provide on-site installation and operator training in Coimbatore and Tamil Nadu?",
    a: "Yes! Every Premier Machine Tools purchase includes complimentary on-site uncrating, precision leveling, laser alignment calibration, CNC controller commissioning, and thorough hands-on training for your machine operators and programmers."
  },
  {
    q: "What warranty and Annual Maintenance Contract (AMC) terms are provided?",
    a: "All PMT machines include an extensive 12-Month Comprehensive On-Site Warranty covering spindle, guideways, ball screws, hydraulics, and CNC controllers. Following the first year, we offer Gold & Platinum AMC packages with guaranteed 4-hour breakdown response in Coimbatore industrial belts."
  },
  {
    q: "Can PMT machines be customized with specific CNC controllers (Fanuc, Siemens, Mitsubishi)?",
    a: "Absolutely. We build and configure machines according to your factory's standardization. You can select between Fanuc 0i-TF/MF Plus, Siemens Sinumerik 828D/ONE, Mitsubishi M80, or Heidenhain TNC 640 controllers."
  },
  {
    q: "Do you assist with MSME machine financing and bank subsidies?",
    a: "Yes, our sales advisory team assists you with project reports, proforma invoices, and coordination for MSME subsidies (e.g. CGTMSE, CLCSS), SIDBI machinery equipment loans, and fast-track leasing options."
  },
  {
    q: "Where is your showroom and demo center located?",
    a: "Our state-of-the-art live machine demo center and manufacturing assembly unit is located in SIDCO Industrial Estate, Kurichi, Coimbatore, Tamil Nadu. You are welcome to bring your workpiece drawings and raw material for live test-cutting demonstrations."
  }
];
