export type TFAQs = {
  [key: string]: TFAQ[]
}

export type TFAQ = {
  question: string
  answer: string
}

export const FAQs: TFAQs = {
  "General": [
    {
      question: "What is an IPO?",
      answer:
        "An IPO or Initial Public Offering is the process by which a company goes public by issuing its shares to the public for the first time.",
    },
    {
      question: "What is the IPO price band?",
      answer:
        "Price bands signify the upper and lower share price thresholds for a bookbuilding IPO. Investors can submit bids within the upper and lower limits,called floor price and cap price, respectively.",
    },
    {
      question: "What is the lot size?",
      answer:
        "Lot size is the minimum number of shares that an investor needs to bid for. It is different for each IPO and is fixed by the company.",
    },
    {
      question: "What is the cut-off price? ",
      answer:
        "The offer price at which shares are issued to investors in an IPO is known as the cut- off price, which can be any price within the specified price band",
    },
  ],
  "Investor Types": [
    {
      question: "What is Non-Institutional Investors (NII)",
      answer:
        "Resident Indian individuals, NRIs, HUFs, HNIs, Companies, Corporate Bodies, Scientific Institutions, Societies, and Trusts who apply for more than Rs 2 lakhs of IPO shares fall under the NII category.",
    },
    {
      question: "What is Retail Individual Investors (RII)",
      answer:
        "Resident Indian Individuals, NRIs and HUFs who apply for less than Rs 2 lakhs in an IPO fall under the RII category.Not less than 35% of the Offer is reserved for the RII category..",
    },
    {
      question: "What is Qualified Institutional Bidders (QIB)",
      answer:
        "Public financial institutions, commercial banks, mutual funds, Foreign Portfolio Investors, etc can apply in the QIB category.SEBI registration is required for institutions to apply under this category.",
    },
    {
      question: "Who are Anchor investors?",
      answer:
        "An anchor investor in a public issue is a QIB making an application for a value of Rs 10 crores or more through the book- building process.An anchor investor can attract investors to public offers before they hit the market to boost their confidence.",
    },
  ],
  "Grey Market": [
    {
      question: "What is Grey Market? ",
      answer:
        "IPO Grey Market is an unofficial market where IPO applications or shares are bought and sold before they become officially available for trading on the stock exchange.",
    },
    {
      question: "How are Grey market prices decided?",
      answer:
        "Just like the stock market or commodity market trading, IPO Grey Market Premiums are decided on the basis of demand and supply.",
    },
    {
      question:
        "What is GMP?",
      answer:
        "GMP or Grey Market Premium is the premium at which the IPO shares are traded in the grey market.GMP is a rough estimation of how the shares will perform on listing day.",
    },
  ],
  "SME IPO": [
    {
      question: "What is SME IPO?",
      answer:
        "SMEs are Small and medium Enterprises. SME IPOs are the IPO issued by these SME companies.",
    },
    {
      question: "Difference between Mainline IPO and SME IPO? ",
      answer:
        "Companies with minimum post-issue paid-up capital of Rs 10 crores can raise funds through Mainboard IPO.Those with minimum post- issue capital of Rs 1 crore and a maximum of Rs 25 crore are eligible for SME IPO.",
    },
    {
      question: "What is SME exchange?",
      answer:
        "SME exchange is a stock exchange dedicated for trading the shares of small and medium enterprises(SMEs) who, otherwise, find it difficult to get listed in the main exchanges.",
    },
  ]
};