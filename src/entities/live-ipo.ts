import imageMappings from "./imageMappings";

export type IPO = {
  image: string;
  companyName: string;
  companyDescription: string;
  ipoDate: string;
  price: string;
  lotSize: string;
  link?: string;
};

export const LiveIPOs: IPO[] = [
  {
    image: imageMappings.logoNexus,
    companyName: "Nexus Select Trust REIT",
    companyDescription: `Nexus Select Trust is India's leading real estate investment trust. It owns 17 Grade A urban consumption centres with a total Leasable Area of 9.8 million sqft, two complementary hotel assets (354 keys), and three office assets of 1.3 million sqft.`,
    ipoDate: "May 9, 2023 to May 11, 2023",
    price: "₹95 to ₹100 per share",
    lotSize: "150 Shares",
    link: "nexus",
  },
];
