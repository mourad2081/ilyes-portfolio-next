// ─── Portfolio Data for Ilyes Boudissa ───────────────────────────────────────
// All content extracted from the original HTML portfolio files.
// Edit this single file to update all portfolio content.

export const personalInfo = {
  name: "Ilyes Boudissa",
  initials: "IB",
  role: "Senior Procurement Specialist & Project Manager",
  location: "Berlin, Germany",
  email: "ilyesboudissa@icloud.com",
  linkedin: "https://linkedin.com/in/ilyesboudissa/",
  bio: "Result-oriented leader expert in strategic sourcing, vendor negotiation, and OTIF optimization for EPC and industrial projects.",
};

export const stats = [
  { value: "5+", label: "years_exp" },
  { value: "$100M+", label: "managed" },
  { value: "100%", label: "compliance" },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyColor?: string;
  companyIcon?: string;
  date: string;
  shortDesc: string;
  fullDesc: string;
}

export const experiences: Experience[] = [
  {
    id: "fanin",
    role: "Procurement & Sourcing Specialist",
    company: "Fanin Technology",
    companyColor: "#0FAAFF",
    companyIcon: "💡",
    date: "Apr 2024 – Present",
    shortDesc: "Strategic sourcing and P2P optimization utilizing AI analytics.",
    fullDesc:
      "Responsible for executing end-to-end strategic sourcing strategies within the energy sector. Focused on leveraging data analytics and AI tools to evaluate vendor proposals, optimize the procure-to-pay (P2P) lifecycle, and ensure consistent On-Time In-Full (OTIF) project delivery across various technical packages.",
  },
  {
    id: "engcb-pm",
    role: "Procurement Project Manager",
    company: "ENGCB",
    companyColor: "#e8a020",
    companyIcon: "🏗️",
    date: "Oct 2023 – Mar 2024",
    shortDesc: "Full-cycle procurement leadership for $100M+ EPC projects.",
    fullDesc:
      "Directed comprehensive procurement operations for large-scale EPC projects. Core responsibilities included cross-functional team leadership, standardizing compliance protocols (such as ISO and Incoterms), and negotiating complex international contracts to maintain strict project budgets and timelines.",
  },
  {
    id: "engcb-spec",
    role: "Procurement Specialist",
    company: "ENGCB",
    companyColor: "#e8a020",
    companyIcon: "🏗️",
    date: "Oct 2020 – Sep 2023",
    shortDesc: "Supplier relationship management and quality compliance for technical packages.",
    fullDesc:
      "Managed a diverse portfolio of international and local suppliers for critical mechanical and electrical packages. Ensured strict quality compliance through regular onsite audits, evaluated competitive bids, and streamlined logistics and customs clearance processes to support uninterrupted site operations.",
  },
  {
    id: "gnosis",
    role: "Admin & Procurement Coordinator",
    company: "Gnosis IT",
    companyColor: "#a855f7",
    companyIcon: "💻",
    date: "Jan 2020 – Sep 2020",
    shortDesc: "Administrative coordination and vendor management for IT operations.",
    fullDesc:
      "Facilitated smooth daily operations by coordinating administrative workflows, managing IT asset inventories, and overseeing vendor agreements. Supported public tender submissions by preparing detailed commercial documentation, bill of quantities (BOQ) comparisons, and compliance matrices.",
  },
];

export interface Education {
  title: string;
  institution?: string;
}

export const education: Education[] = [
  { title: "Postgraduate Business Admin", institution: "IU International University" },
  { title: "Engineering Degree, Hydraulics", institution: "ENSH" },
];

export const services = [
  {
    id: "market",
    icon: "Search",
    title: "Market Analysis",
    desc: "Comprehensive market research and benchmarking to identify qualified international vendors and support data-driven decisions.",
  },
  {
    id: "vendor",
    icon: "Users",
    title: "Vendor Management",
    desc: "Contract negotiation, KPI monitoring, and relationship building to ensure On-Time In-Full (OTIF) delivery and compliance.",
  },
  {
    id: "p2p",
    icon: "Zap",
    title: "P2P Optimization",
    desc: "Streamlining the Purchase-to-Pay lifecycle using AI analytics and digital tools to reduce lead times and costs.",
  },
];

export const competencies = [
  "Negotiation",
  "Leadership",
  "Risk Mgmt",
  "Global Sourcing",
  "Contract Law",
  "Cost Analysis",
  "Logistics",
  "Spend Analytics",
];

export const tools = [
  { name: "SAP S/4HANA", color: "#0FAAFF", logo: "sap" },
  { name: "SAP Ariba", color: "#0070D2", logo: "ariba" },
  { name: "MS Excel", color: "#217346", logo: "excel" },
  { name: "Power BI", color: "#F2C811", logo: "powerbi" },
  { name: "MS Teams", color: "#6264A7", logo: "teams" },
  { name: "MS Outlook", color: "#0078D4", logo: "outlook" },
  { name: "Google Sheets", color: "#34A853", logo: "gsheets" },
  { name: "Google Drive", color: "#4285F4", logo: "gdrive" },
  { name: "ChatGPT", color: "#10A37F", logo: "openai" },
  { name: "MS Office", color: "#D83B01", logo: "office" },
  { name: "Zoom", color: "#2D8CFF", logo: "zoom" },
  { name: "Tableau", color: "#E97627", logo: "tableau" },
];

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  tags: string[];
  status: string;
  mapCenter: [number, number];
  mapZoom: number;
  budget?: string;
  metrics: { label: string; value: string; sub: string; gradient: string }[];
  features: {
    icon: string;
    title: string;
    desc: string;
    items?: string[];
  }[];
}

export const projects: Project[] = [
  {
    slug: "46km-pipeline-rehabilitation",
    title: "46 km Pipeline Rehabilitation",
    shortTitle: "46 km Pipeline Rehabilitation",
    description:
      "Full-cycle procurement for a crude oil pipeline rehabilitation across 46 km of Saharan terrain for SONATRACH — Africa's largest oil & gas company — replacing carbon steel with advanced fiberglass (GRP) technology under an EPC framework.",
    image: "https://i.ibb.co/fVshT2nq/Gemini-Generated-Image-k118a0k118a0k118.png",
    tags: ["SONATRACH", "Oil & Gas — Upstream", "EPC Contract", "46 km Pipeline", "24\" Diameter GRP"],
    status: "Delivered",
    mapCenter: [31.5, 5.5],
    mapZoom: 7,
    metrics: [
      { label: "Budget Range", value: "$10M–$15M", sub: "Total Project Budget Range", gradient: "from-amber-500 to-yellow-400" },
      { label: "Procurement", value: "~40%", sub: "Procurement Share of Budget", gradient: "from-green-500 to-emerald-400" },
      { label: "Line Items", value: "20+", sub: "Procurement Line Items", gradient: "from-blue-500 to-cyan-400" },
      { label: "Vendors", value: "10+", sub: "International Vendors Managed", gradient: "from-red-500 to-rose-400" },
    ],
    features: [
      {
        icon: "Shield",
        title: "Strategic Fiberglass (GRP) Sourcing",
        desc: "Managed the full international sourcing lifecycle for 46 km of advanced 24-inch GRP pipes, an alternative chosen for its superior corrosion resistance in harsh Saharan conditions.",
      },
      {
        icon: "Zap",
        title: "Pipeline Accessories & Fittings",
        desc: "Procured all complementary pipeline components required for system integrity:",
        items: [
          "GRP Elbows, Tees & Reducers (24\")",
          "Flange Adapters & Coupling Systems",
          "Cathodic Protection Kits",
        ],
      },
      {
        icon: "Globe",
        title: "International Logistics & Compliance",
        desc: "Coordinated complex multi-modal logistics (sea and overland) from international manufacturers to the remote Saharan project site, ensuring full customs and regulatory compliance.",
      },
    ],
  },
  {
    slug: "30km-carbon-steel-pipeline",
    title: "30 km Carbon Steel Pipeline",
    shortTitle: "30 km Carbon Steel Pipeline",
    description:
      "Strategic procurement management for a 30 km, 24-inch carbon steel pipeline (API 5L X60) for SONATRACH under an EPC framework. Managed the complete sourcing lifecycle of critical pipeline accessories, electrical/I&C packages, and engineering subcontracts across complex mixed terrains.",
    image: "https://i.ibb.co/qYFMHjW7/Gemini-Generated-Image-g6y2dxg6y2dxg6y2.png",
    tags: ["SONATRACH", "Procurement Lead", "EPC Contract", "30 km Pipeline", "API 5L X60"],
    status: "Delivered",
    mapCenter: [33.5, 3.0],
    mapZoom: 7,
    metrics: [
      { label: "Pipeline", value: "30 km", sub: "Materials Sourced For", gradient: "from-amber-500 to-yellow-400" },
      { label: "Electrovalves", value: "3+", sub: "Complex Electrovalves", gradient: "from-blue-500 to-cyan-400" },
      { label: "Supply", value: "100%", sub: "Client Pipe Supply Handled", gradient: "from-red-500 to-rose-400" },
      { label: "Terrain", value: "Mixed", sub: "Desert & Agricultural Zones", gradient: "from-purple-500 to-indigo-400" },
    ],
    features: [
      {
        icon: "Shield",
        title: "Pipeline Accessories & Critical Components",
        desc: "Sourced all mechanical pipeline accessories needed for a carbon steel network, including valves, fittings, and high-integrity components under strict API and ASME standards.",
      },
      {
        icon: "Zap",
        title: "Electrical & I&C Packages",
        desc: "Managed the complete procurement for:",
        items: [
          "Motorized & Manual Electrovalves",
          "SCADA & Telecom Infrastructure",
          "Full Electrical Power Distribution",
        ],
      },
      {
        icon: "Globe",
        title: "Client-Furnished Pipe Management",
        desc: "Acted as the liaison for SONATRACH-supplied pipes. Managed receiving, inspection, transport logistics, and integration into the EPC contractor's construction schedule.",
      },
    ],
  },
  {
    slug: "137km-el-borma-pipeline",
    title: "137 km El Borma Pipeline Replacement",
    shortTitle: "137 km El Borma Pipeline",
    description:
      "End-to-end procurement and supply chain execution for the replacement of the OD1 16\" 137 KM El Borma oil pipeline. A highly critical infrastructure project characterized by complex international sourcing, rigorous regulatory compliance, and demanding maritime logistics.",
    image: "https://i.ibb.co/TxJNfLJx/Gemini-Generated-Image-fxg8vxfxg8vxfxg8.png",
    tags: ["SONATRACH", "EPC Framework", "137 km", "16\" Pipeline"],
    status: "In Progress",
    mapCenter: [32.0, 8.0],
    mapZoom: 6,
    metrics: [
      { label: "Total Value", value: "$40M+", sub: "Total Project Budget Range", gradient: "from-green-500 to-emerald-400" },
      { label: "Contracts", value: "06", sub: "Signed Agreements", gradient: "from-orange-500 to-amber-400" },
      { label: "Duration", value: "24 mo", sub: "Project Timeline", gradient: "from-purple-500 to-indigo-400" },
      { label: "Scale", value: "137 km", sub: "16-inch Pipeline", gradient: "from-blue-500 to-cyan-400" },
    ],
    features: [
      {
        icon: "Shield",
        title: "Regulatory Compliance (ARH)",
        desc: "Handled the complex compliance lifecycle required by the Hydrocarbon Regulatory Authority (ARH). Supported the successful submission and approval of detailed ARH dossiers, ensuring zero regulatory bottlenecks prior to equipment fabrication and delivery.",
      },
      {
        icon: "CreditCard",
        title: "International Sourcing",
        desc: "Sourced highly specialized mechanical equipment essential for pipeline integrity and safety, including:",
        items: [
          "Monobloc Isolation Joints (High Pressure)",
          "Anchor Flange Kits",
          "Full adherence to strict international quality standards",
        ],
      },
      {
        icon: "Ship",
        title: "Maritime & Overland Logistics",
        desc: "Managed end-to-end delivery logistics from European and Asian manufacturers via complex maritime routes to Algerian ports, followed by overland transportation to the remote southern project site.",
      },
    ],
  },
  {
    slug: "marine-terminal-water-treatment",
    title: "Marine Terminal Water Treatment Infrastructure",
    shortTitle: "Marine Terminal Infrastructure",
    description:
      "End-to-end management of the engineering and procurement lifecycle for an advanced industrial wastewater collection and treatment system. This environmental initiative focuses on regulatory alignment and specialized mechanical integration within a critical port corridor.",
    image: "https://i.ibb.co/kVfD8MYj/Gemini-Generated-Image-qkhj4mqkhj4mqkhj.png",
    tags: ["Environmental", "Marine Terminal", "Water Treatment"],
    status: "In Progress",
    mapCenter: [36.75, 5.08],
    mapZoom: 12,
    metrics: [
      { label: "Project Budget", value: "$32M", sub: "Estimated Total Contract Value", gradient: "from-green-500 to-emerald-400" },
      { label: "Requisitions", value: "22", sub: "Technical Supply Packages", gradient: "from-orange-500 to-amber-400" },
      { label: "Execution", value: "36 mo", sub: "Total Project Timeline", gradient: "from-purple-500 to-indigo-400" },
      { label: "Qualified Vendors", value: "15+", sub: "Managed Tier-1 Suppliers", gradient: "from-blue-500 to-cyan-400" },
    ],
    features: [
      {
        icon: "BookOpen",
        title: "Specialized Water Treatment",
        desc: "Orchestrating the supply of specialized MBR (Membrane Bioreactor) systems, oxidation basins, and biological filtration units. Overseeing the integration of mechanical sub-assemblies from international industrial partners.",
      },
      {
        icon: "Zap",
        title: "Mechanical & Instrument Sourcing",
        desc: "Managing diverse procurement lots via stringent international standards, focusing on high-integrity components:",
        items: [
          "High-Precision Flow & Level Instrumentation",
          "Heavy-Duty Submersible Pumping Packages",
          "ATEX-Certified Electrical & Automation Systems",
        ],
      },
      {
        icon: "Shield",
        title: "Logistics & Compliance Management",
        desc: "Coordinating complex sea-freight logistics for oversized basins and machinery. Managing customs synchronization to ensure critical path items reach terminal facilities without demurrage or regulatory delay.",
      },
    ],
  },
];

export const achievements = [
  {
    title: "AI-Driven Sourcing Optimization",
    action: "Implemented AI analytics at Fanin Technology.",
    result: "Identified new cost-saving opportunities.",
    color: "blue",
  },
  {
    title: "EPC Compliance Strategy",
    action: "Standardized SOPs and audit controls.",
    result: "Achieved 100% compliance with ISO/Incoterms.",
    color: "green",
  },
  {
    title: "Strategic Cost Reduction",
    action: "Negotiated high-value international supply contracts.",
    result: "Consistently secured $100M+ projects under budget.",
    color: "purple",
  },
];

export const resources = [
  {
    title: "Global Supplier Database",
    desc: "An intelligent, comprehensive Excel database containing detailed information and categorizations for international suppliers specifically within the Energy Sector.",
    tag: ".XLSX",
    color: "green",
    url: "https://docs.google.com/spreadsheets/d/193UVYdpjnNe8zGBAZI5QWqPtgX99N9q0/edit?usp=sharing&ouid=113682910236456067051&rtpof=true&sd=true",
  },
  {
    title: "Procurement Intelligence Dashboard",
    desc: "An automated tracking tool featuring a command center, Earned Value Management (EVM), cash flow forecasting, and smart vendor alerts.",
    tag: ".XLSX",
    color: "blue",
    url: "https://docs.google.com/spreadsheets/d/1P4CjVk0VJ_XjlX3pk6dhSHp6zBRKfHhd/edit?usp=drive_link&ouid=113682910236456067051&rtpof=true&sd=true",
  },
  {
    title: "Smart Bid Evaluation Matrix",
    desc: "An automated evaluation tool to streamline tender analysis. Features compliance gating, weighted technical/commercial scoring, and side-by-side vendor comparisons.",
    tag: ".XLSX",
    color: "purple",
    url: "https://docs.google.com/spreadsheets/d/1zlHJb4DEN46fpWDF57UPQxRpfDSdMFoC/edit?usp=drive_link&ouid=113682910236456067051&rtpof=true&sd=true",
  },
];
