import imageMappings from "./imageMappings";

export type IPO = {
  image: string
  companyName: string
  companyDescription: string
  ipoDate: string
  price: string
  lotSize: string
}

export const LiveIPOs: IPO[] = []