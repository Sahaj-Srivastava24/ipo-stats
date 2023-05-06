import imageMappings from "./imageMappings";

export type IPO = {
  image: string
  companyName: string
  companyDescription: string
  ipoDate: string
  price: string
  lotSize: string
  id: number
}

export const ListedIPOs: IPO[] = [
  {
    image: imageMappings.logoMankind,
    companyName: 'Mankind Pharma Limited',
    companyDescription: 'Incorporated in 1991, Mankind Pharma Limited develops, manufactures, and markets pharmaceutical formulations in various acute and chronic therapeutic areas and several consumer healthcare products',
    ipoDate: 'Apr 25, 2023 to Apr 27, 2023',
    price: '₹1026 to ₹1080 per share',
    lotSize: '13 Shares',
    id: 0
  },
  {
    image: imageMappings.logoAvalon,
    companyName: 'Avalon Technologies Limited',
    companyDescription: 'Incorporated in 1999, Avalon Technologies Limited is a leading fully integrated Electronic Manufacturing Services ("EMS") company with end-to-end capabilities in delivering box-build solutions, focusing on high-value precision-engineered products.',
    ipoDate: 'Apr 3, 2023 to Apr 6, 2023',
    price: '₹415 to ₹436 per share',
    lotSize: '34 Shares',
    id: 2,
  },
  {
    image: imageMappings.logoUdayshivakumar,
    companyName: 'Udayshivakumar Infra Limited',
    companyDescription: 'Incorporated in 2002, Udayshivakumar is engaged in the business of the construction of roads, bridges & Canals.',
    ipoDate: 'Mar 20, 2023 to Mar 23, 2023',
    price: '₹33 to ₹35 per share',
    lotSize: '428 Shares',
    id: 5,
  },
  {
    image: imageMappings.logoGlobalSurface,
    companyName: 'Global Surfaces Limited',
    companyDescription: 'Incorporated in 1991, Global Surfaces Limited is engaged in processing natural stones and manufacturing engineered quartz.',
    ipoDate: 'Mar 13, 2023 to Mar 15, 2023',
    price: '₹133 to ₹140 per share',
    lotSize: '100 Shares',
    id: 4,
  },
  {
    image: imageMappings.logoDigvi,
    companyName: 'Divgi TorqTransfer Systems Limited',
    companyDescription: 'Incorporated in 1964, Divgi Torqtransfer system is one of the leading players supplying transfer case systems to automotive OEMs and the largest supplier of transfer case systems to passenger vehicle manufacturers in India.',
    ipoDate: 'Mar 1, 2023 to Mar 3, 2023',
    price: '₹560 to ₹590 per share',
    lotSize: '25 Shares',
    id: 3,
  },
]