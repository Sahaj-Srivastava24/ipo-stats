import imageMappings from "./imageMappings";

export type IPO = {
  image: string
  companyName: string
  companyDescription: string
  ipoDate: string
  price: string
  lotSize: string
  link?: string
}

export const LiveIPOs: IPO[] = [
  {
    image: imageMappings.logoNexus,
    companyName: 'Nexus Select Trust REIT',
    companyDescription: `
Real Estate Investment Trust (REIT) is an investment vehicle that owns & manages investment grade and income-producing real estates properties such as offices, malls, industrial parks, warehouses, hospitality, healthcare centers, and almost any asset that can produce an annuity revenue stream. Similar to mutual funds in which funds are raised from investors for investing in equity stocks, REITs raise a pool of funds for investment in rent-yielding assets.`,
    ipoDate: 'May 9, 2023 to May 11, 2023',
    price: '₹95 to ₹100 per share',
    lotSize: '150 Shares',
    link: 'nexus'
  },
]