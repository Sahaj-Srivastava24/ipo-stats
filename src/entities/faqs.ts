export type TFAQs = {
  [key: string]: TFAQ[]
}

export type TFAQ = {
  question: string
  answer: string
}

export const FAQs: TFAQs = {
  "IPOs in Indian Markets": [
    {
      question: "What is an IPO?",
      answer:
        "An IPO or Initial Public Offering is the process by which a company goes public by issuing its shares to the public for the first time.",
    },
    {
      question: "What are the benefits of investing in IPOs?",
      answer:
        "Investing in IPOs can provide investors with the opportunity to buy shares in a company at a lower price than the market price, which can lead to significant gains in the long term.",
    },
    {
      question: "What is the process of investing in an IPO?",
      answer:
        "To invest in an IPO, investors need to open a demat account with a stockbroker and then apply for shares through the IPO application process.",
    },
    {
      question: "How are IPO prices determined?",
      answer:
        "IPO prices are determined by the company and its underwriters based on market demand, the company's financial performance, and other factors.",
    },
    {
      question: "What are the risks associated with investing in IPOs?",
      answer:
        "The main risks associated with investing in IPOs include market volatility, lack of historical data, and the possibility of the company not performing as well as expected.",
    },
  ],
  "Process of IPO": [
    {
      question: "What are the steps involved in an IPO process?",
      answer:
        "The steps involved in an IPO process include selecting investment bankers, filing the registration statement with the SEBI, marketing the IPO to investors, setting the offer price, and finally, listing the shares on the stock exchange.",
    },
    {
      question: "What is a prospectus?",
      answer:
        "A prospectus is a legal document that provides information about the company, its business operations, financial statements, and other key information related to the IPO.",
    },
    {
      question: "What is the role of underwriters in an IPO?",
      answer:
        "Underwriters are financial institutions that help the company to issue shares in the primary market by buying the shares themselves and then selling them to the public.",
    },
    {
      question: "What is a book-building process?",
      answer:
        "The book-building process is a mechanism used to determine the demand for shares in an IPO by allowing investors to bid for shares at various prices.",
    },
    {
      question: "What is the lock-in period for IPO shares?",
      answer:
        "The lock-in period is the period during which the shares issued in an IPO cannot be sold or transferred by the company's promoters and other key members.",
    },
  ],
  "Listing and Trading of IPOs": [
    {
      question: "What is the listing process for an IPO?",
      answer:
        "The listing process involves the shares of the company being listed on a stock exchange for trading, allowing investors to buy and sell shares in the secondary market.",
    },
    {
      question: "When do IPO shares start trading?",
      answer:
        "IPO shares start trading on the stock exchange a few days after the IPO closes and the shares are listed on the exchange.",
    },
    {
      question:
        "What is the difference between the primary and secondary market?",
      answer:
        "The primary market is where the company issues shares to the public for the first time, while the secondary market is where investors buy and sell shares among themselves after they have been listed on a stock exchange.",
    },
    {
      question:
        "How is the price of an IPO share determined on the stock exchange?",
      answer:
        "The price of an IPO share is determined based on the supply and demand for the shares in the secondary market, and can fluctuate depending on various factors such as market conditions, company performance, and investor sentiment.",
    },
    {
      question:
        "Can IPO shares be sold immediately after listing on the stock exchange?",
      answer:
        "Yes, IPO shares can be sold immediately after listing on the stock exchange, subject to certain restrictions such as the lock-in period for promoters and other key members.",
    },
  ],
  "Regulations and Compliance": [
    {
      question: "What is SEBI and what is its role in IPOs?",
      answer:
        "SEBI or Securities and Exchange Board of India is the regulatory body for securities markets in India and oversees the issuance of IPOs to ensure compliance with regulations and protect investor interests.",
    },
    {
      question: "What are the disclosure requirements for IPOs?",
      answer:
        "IPOs are required to disclose detailed information about the company's financial performance, business operations, and other key information that investors would need to make informed decisions about investing in the company.",
    },
    {
      question: "What is the minimum subscription requirement for an IPO?",
      answer:
        "The minimum subscription requirement for an IPO is 90% of the total issue size. If the subscription falls below this level, the IPO is considered a failure and the issue is withdrawn.",
    },
    {
      question:
        "What are the penalties for non-compliance with IPO regulations?",
      answer:
        "Non-compliance with IPO regulations can lead to penalties and fines imposed by SEBI, as well as legal action by investors who may suffer losses due to the non-compliance.",
    },
    {
      question: "What is the role of merchant bankers in an IPO?",
      answer:
        "Merchant bankers are financial institutions that help companies to raise capital through IPOs by providing various services such as underwriting, marketing, and pricing of the shares.",
    },
  ],
};