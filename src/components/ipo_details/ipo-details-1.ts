import fileMappings from "components/entities/fileMappings";
import imageMappings from "components/entities/imageMappings";

type TIPODetails = {
  ipo_date: string;
  listing_date: string;
  face_value: string;
  price: string;
  lot_size: string;
  fresh_issue?: string;
  total_issue_size: string;
  offer_for_sale?: string;
  issue_type: string;
  listing_at: string;
};

type TIPOTimeTable = {
  opening_date: string;
  closing_date: string;
  basis_of_allotment: string;
  initiation_of_refunds: string;
  credit_of_shares_to_demat: string;
  listing_date: string;
  upi_mandate_confirmation_cut_off_time: string;
};

type TCompanyFinancials = {
  assets: {
    columns: string[];
    records: {
      "As at": string;
      "Total Non-Current Assets"?: string;
      "Total Current Assets"?: string;
      "Total Assets": string;
      "Total Equity"?: string;
      "Total Non-Current Liabilities"?: string;
      "Total Current Liabilities"?: string;
      "Total Liabilities"?: string;
      "Total Equity and Liabilities": string;
    }[];
  };
  profit_loss: {
    columns: string[];
    records: {
      "As at": string;
      "Total Income": string;
      "Total Expenses": string;
      "Profit Before Tax": string;
      "Total Tax Expense": string;
      "Profit for the period": string;
    }[];
  };
  cash_flow: {
    columns: string[];
    records: {
      "As at": string;
      "Net cash inflow from operating activities (A)": string;
      "Net cash outflow from investing activities (B)": string;
      "Net cash inflow/(outflow) from financing activities (C)": string;
      "Net foreign exchange difference": string;
      "Cash and cash equivalents at the beginning of the period/ year": string;
      "Cash and cash equivalents at period/ year end": string;
    }[];
  };
};

type TCompany = {
  name: string;
  value: string;
  drhp: string;
  rhp: string;
  description: string;
  image: string;
  risks: string[];
  ipo_details: TIPODetails;
  ipo_tentative_timetable: TIPOTimeTable;
  company_financials: TCompanyFinancials;
};

export const companies: TCompany[] = [
  {
    name: "Mankind Pharma Limited",
    drhp: fileMappings.drhpMankind,
    rhp: fileMappings.rhpMankind,
    description: `
Incorporated in 1991, Mankind Pharma Limited develops, manufactures, and markets pharmaceutical formulations across various acute and chronic therapeutic areas and several consumer healthcare products.
In India, the business is active in a number of acute and chronic therapeutic fields, including anti-infectives, cardiovascular, gastrointestinal, anti-diabetic, neuro/CNS, vitamins/minerals/nutrients, and respiratory.
It has over 36 brands, including Manforce (Rx), Moxikind-CV, Amlokind-AT, Unwanted-Kit, Candiforce, Gudcef, Glimestar-M, Prega News, Dydroboon, Codistar, Nurokind-Gold, Nurokind Plus-RF, Nurokind-LC, Asthakind-DX, Cefakind, Monticope, Telmikind-H, Telmikind, Gudcef-CV, and Unwanted-72, among them.
Mankind Pharma has one of the largest distribution networks of medical representatives in the Indian pharmaceutical market. Over 80% of doctors in India prescribed their formulations and has been ranked number 4th in terms of domestic sales during the Financial Year 2022.
The company has earned numerous awards and recognitions and including The Best of Bharat Awards 2022 by exchange4media in the year 2022, and Silver Medal from National Awards for Manufacturing Competitiveness Assessment 2021 instituted by International Research Institute for Manufacturing.
Mankind has a pan-India marketing presence, with a field force of 11,691 medical representatives and 3,561 field managers, as of December 31, 2022. They operate 25 manufacturing facilities across India and had 4,121 manufacturing personnel as of December 31, 2022.
As of December 31, 2022, the Company had a team of over 600 scientists and a dedicated in-house R&D center with four units located in IMT Manesar, Gurugram, Haryana and Thane, Maharashtra.
  `,
    risks: [
      `Any disruption, slowdown or shutdown in our manufacturing or research and development
operations could adversely affect our business, financial condition, cash flows and results of
operations.`,

      `One of the brothers of our Promoters, Ramesh Juneja and Rajeev Juneja, who is deemed to be a part
of the Promoter Group under the Securities and Exchange Board of India (Issue of Capital and
Disclosure Requirements) Regulations, 2018 has not provided consent to be identified as a member
of the Promoter Group and has not provided any information in respect of himself and his relevant
entities as Promoter Group.`,

      `Any delay, interruption or reduction in the supply of our raw materials or finished formulations from
our third-party suppliers and manufacturers, or an increase in the costs of such raw materials and
finished formulations, may adversely impact the pricing and supply of our products and have an
adverse effect on our business, financial condition, cash flows and results of operations.`,
    ],
    image: imageMappings.logoMankind,
    value: "In ₹ millions",
    ipo_details: {
      ipo_date: "Apr 25, 2023 to Apr 27, 2023",
      listing_date: "May 8, 2023",
      face_value: "₹1 per share",
      price: "₹1026 to ₹1080 per share",
      lot_size: "13 Shares",
      total_issue_size: "40,058,844 shares",
      offer_for_sale: "40,058,844 shares of ₹1 (100%)",
      issue_type: "Book Built Issue IPO",
      listing_at: "BSE, NSE",
    },
    ipo_tentative_timetable: {
      opening_date: "Apr 25, 2023",
      closing_date: "Apr 27, 2023",
      basis_of_allotment: "May 3, 2023",
      initiation_of_refunds: "May 4, 2023",
      credit_of_shares_to_demat: "May 5, 2023",
      listing_date: "May 8, 2023",
      upi_mandate_confirmation_cut_off_time: "5.00 PM on the issue closing day",
    },
    company_financials: {
      assets: {
        columns: [
          "As at",
          "Total Non-Current Assets",
          "Total Current Assets",
          "Total Assets",
          "Total Equity",
          "Total Non-Current Liabilities",
          "Total Current Liabilities",
          "Total Liabilities",
          "Total Equity and Liabilities",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Non-Current Assets": "47,409.21",
            "Total Current Assets": "44,068.19",
            "Total Assets": "91,477.40",
            "Total Equity": "63,163.08",
            "Total Non-Current Liabilities": "2,079.63",
            "Total Current Liabilities": "26,234.69",
            "Total Liabilities": "28,314.32",
            "Total Equity and Liabilities": "91,477.40",
          },
          {
            "As at": "March 31, 2021",
            "Total Non-Current Assets": "24,659.95",
            "Total Current Assets": "39,066.37",
            "Total Assets": "63,726.32",
            "Total Equity": "48,628.89",
            "Total Non-Current Liabilities": "1,563.45",
            "Total Current Liabilities": "13,533.98",
            "Total Liabilities": "15,097.43",
            "Total Equity and Liabilities": "63,726.32",
          },
          {
            "As at": "March 31, 2020",
            "Total Non-Current Assets": "22,510.70",
            "Total Current Assets": "28,222.15",
            "Total Assets": "50,732.85",
            "Total Equity": "36,715.70",
            "Total Non-Current Liabilities": "1,431.26",
            "Total Current Liabilities": "12,585.89",
            "Total Liabilities": "14,017.15",
            "Total Equity and Liabilities": "50,732.85",
          },
        ],
      },
      profit_loss: {
        columns: [
          "As at",
          "Total Income",
          "Total Expenses",
          "Profit Before Tax",
          "Total Tax Expense",
          "Profit for the period",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Income": "79,775.84",
            "Total Expenses": "60,174.33",
            "Profit Before Tax": "19,745.99",
            "Total Tax Expense": "5,216.43",
            "Profit for the period": "14,529.56",
          },
          {
            "As at": "March 31, 2021",
            "Total Income": "63,853.80",
            "Total Expenses": "47,054.46",
            "Profit Before Tax": "16,916.11",
            "Total Tax Expense": "3,985.77",
            "Profit for the period": "12,930.34",
          },
          {
            "As at": "March 31, 2020",
            "Total Income": "59,756.54",
            "Total Expenses": "45,494.54",
            "Profit Before Tax": "14,377.35",
            "Total Tax Expense": "3,815.87",
            "Profit for the period": "10,561.48",
          },
        ],
      },
      cash_flow: {
        columns: [
          "As at",
          "Net cash inflow from operating activities (A)",
          "Net cash outflow from investing activities (B)",
          "Net cash inflow/(outflow) from financing activities (C)",
          "Net foreign exchange difference",
          "Cash and cash equivalents at the beginning of the period/ year",
          "Cash and cash equivalents at period/ year end",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Net cash inflow from operating activities (A)": "9,197.76",
            "Net cash outflow from investing activities (B)": "-13,691.43",
            "Net cash inflow/(outflow) from financing activities (C)":
              "6,046.20",
            "Net foreign exchange difference": "4.78",
            "Cash and cash equivalents at the beginning of the period/ year":
              "1,273.28",
            "Cash and cash equivalents at period/ year end": "2,830.59",
          },
          {
            "As at": "March 31, 2021",
            "Net cash inflow from operating activities (A)": "11,372.44",
            "Net cash outflow from investing activities (B)": "-12,222.11",
            "Net cash inflow/(outflow) from financing activities (C)": "-78.11",
            "Net foreign exchange difference": "3.75",
            "Cash and cash equivalents at the beginning of the period/ year":
              "2,197.31",
            "Cash and cash equivalents at period/ year end": "1,273.28",
          },
          {
            "As at": "March 31, 2020",
            "Net cash inflow from operating activities (A)": "10,697.05",
            "Net cash outflow from investing activities (B)": "-4,391.55",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-5,307.38",
            "Net foreign exchange difference": "36.04",
            "Cash and cash equivalents at the beginning of the period/ year":
              "1,163.15",
            "Cash and cash equivalents at period/ year end": "2,197.31",
          },
        ],
      },
    },
  },
  {
    name: "Nexus Select Trust REIT",
    value: "In ₹ millions",
    drhp: fileMappings.drhpMankind,
    rhp: fileMappings.rhpMankind,
    description: `
    Nexus Select Trust is a retail REIT (Real Estate Investment Trust) that owns and operates high-quality shopping malls and other retail properties in India. It is sponsored by global investment firm Blackstone



i. It has a portfolio of 17 operational shopping malls across 14 major cities, covering a 9.8 million square feet area. Some of its prominent properties include Select Citywalk in Delhi, Nexus Seawoods in Navi Mumbai, Nexus Koramangala in Bengaluru, Nexus Elante in Chandigarh, and Nexus Ahmedabad One in Ahmedabad.

ii. It also owns two complementary hotel assets (354 keys), and three office assets of 1.3 million square feet as of December 31, 2022.

iii. It has a diversified tenant base of over 1,000 national and international brands across around 3,000 stores. Some of its leading tenants are Apple, Zara, H&M, Uniqlo, Sephora, Superdry, Lifestyle, Shoppers Stop, Starbucks, McDonalds among others.

iv. It generates income from leasing out retail space to various brands and tenants. It also enhances the value of its properties by investing in renovation, expansion and tenant mix optimization. It distributes at least 90% of its net distributable cash flow to its unit holders as dividends on a quarterly basis.

v. It plans to double its portfolio in next 4-5 years through acquisition mode. It has a strong pipeline of potential acquisitions of over 10 million square feet across 12 cities.
  `,
    risks: [
      `The determination of the Price Band is based on various factors and assumptions, and the enterprise value
(“EV”) to EBITDA ratio, market capitalization to tangible assets and market capitalization to revenue
from operations ratio may not be indicative of the market price of the Equity Shares on listing or thereafter.`,

      `Our manufacturing facilities are critical to our business. Any disruption in the continuous operations of
our manufacturing facilities, including due to the COVID-19 pandemic, or a similar public health threat
would have a material adverse effect on our business, results of operations and financial condition`,

      `We source our raw material from suppliers, primarily on purchase order basis, who may not perform their
contractual obligations in a timely manner, or at all. Any increase in the cost of our raw material or
components, delay, shortage, interruption or reduction in the supply of raw materials and major
production inputs to manufacture our products may adversely affect our business, results of operations,
cash flows and financial condition.`,
    ],
    image: imageMappings.logoNexus,
    ipo_details: {
      ipo_date: "May 9, 2023 to May 11, 2023",
      listing_date: "May 19, 2023",
      face_value: "₹ per share",
      price: "₹95 to ₹100 per share",
      lot_size: "150 Shares",
      total_issue_size: "32,00,00,000 shares",
      fresh_issue: "14,00,00,000 shares (43.75%)",
      offer_for_sale: "18,00,00,000 shares (56.25%)",
      issue_type: "Book Built Issue REIT",
      listing_at: "BSE, NSE",
    },
    ipo_tentative_timetable: {
      opening_date: "May 9, 2023",
      closing_date: "May 11, 2023",
      basis_of_allotment: "May 16, 2023",
      initiation_of_refunds: "May 17, 2023",
      credit_of_shares_to_demat: "May 18, 2023",
      listing_date: "May 19, 2023",
      upi_mandate_confirmation_cut_off_time: "5.00 PM on the issue closing day",
    },
    company_financials: {
      assets: {
        columns: [
          "As at",
          "Total Non-Current Assets",
          "Total Current Assets",
          "Total Assets",
          "Total Equity",
          "Total Non-Current Liabilities",
          "Total Current Liabilities",
          "Total Liabilities",
          "Total Equity and Liabilities",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Non-Current Assets": "76,224.09",
            "Total Current Assets": "14,673.57",
            "Total Assets": "90,897.66",
            "Total Equity": "17,238.38",
            "Total Non-Current Liabilities": "63,531.64",
            "Total Current Liabilities": "10,127.64",
            "Total Liabilities": "73,659.28",
            "Total Equity and Liabilities": "90,897.66",
          },
          {
            "As at": "March 31, 2021",
            "Total Non-Current Assets": "77,180.72",
            "Total Current Assets": "12,412.87",
            "Total Assets": "89,593.59",
            "Total Equity": "16,621.80",
            "Total Non-Current Liabilities": "63,843.70",
            "Total Current Liabilities": "9,128.09",
            "Total Liabilities": "72,971.79",
            "Total Equity and Liabilities": "89,593.59",
          },
          {
            "As at": "March 31, 2020",
            "Total Non-Current Assets": "83,294.52",
            "Total Current Assets": "11,981.83",
            "Total Assets": "95,276.35",
            "Total Equity": "23,255.13",
            "Total Non-Current Liabilities": "60,566.15",
            "Total Current Liabilities": "11,455.07",
            "Total Liabilities": "72,021.22",
            "Total Equity and Liabilities": "95,276.35",
          },
        ],
      },
      profit_loss: {
        columns: [
          "As at",
          "Total Income",
          "Total Expenses",
          "Profit Before Tax",
          "Total Tax Expense",
          "Profit for the period",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Income": "13,985.15",
            "Total Expenses": "5,405.33",
            "Profit Before Tax": "723.25",
            "Total Tax Expense": "832.77",
            "Profit for the period": "109.52",
          },
          {
            "As at": "March 31, 2021",
            "Total Income": "10,479.70",
            "Total Expenses": "4,349.44",
            "Profit Before Tax": "-2,102.46",
            "Total Tax Expense": "-111.36",
            "Profit for the period": "-1,991.10",
          },
          {
            "As at": "March 31, 2020",
            "Total Income": "17,081.88",
            "Total Expenses": "6,309.73",
            "Profit Before Tax": "2,555.48",
            "Total Tax Expense": "488.12",
            "Profit for the period": "2,067.36",
          },
        ],
      },
      cash_flow: {
        columns: [
          "As at",
          "Net cash inflow from operating activities (A)",
          "Net cash outflow from investing activities (B)",
          "Net cash inflow/(outflow) from financing activities (C)",
          "Net foreign exchange difference",
          "Cash and cash equivalents at the beginning of the period/ year",
          "Cash and cash equivalents at period/ year end",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Net cash inflow from operating activities (A)": "7,474.78",
            "Net cash outflow from investing activities (B)": "-2,706.85",
            "Net cash inflow/(outflow) from financing activities (C)":
              "4,381.78",
            "Net foreign exchange difference": "NA",
            "Cash and cash equivalents at the beginning of the period/ year":
              "2,509.36",
            "Cash and cash equivalents at period/ year end": "2,895.51",
          },
          {
            "As at": "March 31, 2021",
            "Net cash inflow from operating activities (A)": "4,132.70",
            "Net cash outflow from investing activities (B)": "748.97",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-4,028.35",
            "Net foreign exchange difference": "NA",
            "Cash and cash equivalents at the beginning of the period/ year":
              "1,656.04",
            "Cash and cash equivalents at period/ year end": "2,509.36",
          },
          {
            "As at": "March 31, 2020",
            "Net cash inflow from operating activities (A)": "9,106.15",
            "Net cash outflow from investing activities (B)": "-10,081.75",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-1,060.27",
            "Net foreign exchange difference": "NA",
            "Cash and cash equivalents at the beginning of the period/ year":
              "1,571.37",
            "Cash and cash equivalents at period/ year end": "1,656.04",
          },
        ],
      },
    },
  },
  {
    name: "Avalon Technologies Limited",
    drhp: fileMappings.drhpAvalon,
    rhp: fileMappings.rhpAvalon,
    description: `
    Incorporated in 1999, Avalon Technologies Limited is a leading fully integrated Electronic Manufacturing Services ("EMS") company. They have end-to-end capabilities in delivering box-build solutions in India, focusing on high-value precision engineered products. The company is one of the leaders in the segment in India in terms of revenue in Fiscal 2022.

    Through a unique global delivery model, Avalon offers a full stack product and solution suite, right from printed circuit board (PCB) design and assembly to the manufacture of complete electronic systems (Box Build), to certain global original equipment manufacturers (OEMs), including OEMs located in countries like China, Netherlands, United States, and Japan.
    
    The offerings of Avalon Technologies Limited include PCB design and assembly, cable assembly and wire harnesses, sheet metal fabrication and machining, magnetics, injection molded plastics, and end-to-end box build of electronic systems.
    
    With its notable specialization in manufacturing and providing design support for critical integrated assemblies, sub-assemblies, components, and enclosures for multiple industry verticals, they help customers receive the best of services.
  `,
    risks: [
      `The determination of the Price Band is based on various factors and assumptions, and the enterprise value
(“EV”) to EBITDA ratio, market capitalization to tangible assets and market capitalization to revenue
from operations ratio may not be indicative of the market price of the Equity Shares on listing or thereafter.`,

      `Our manufacturing facilities are critical to our business. Any disruption in the continuous operations of
our manufacturing facilities, including due to the COVID-19 pandemic, or a similar public health threat
would have a material adverse effect on our business, results of operations and financial condition`,

      `We source our raw material from suppliers, primarily on purchase order basis, who may not perform their
contractual obligations in a timely manner, or at all. Any increase in the cost of our raw material or
components, delay, shortage, interruption or reduction in the supply of raw materials and major
production inputs to manufacture our products may adversely affect our business, results of operations,
cash flows and financial condition.`,
    ],
    image: imageMappings.logoAvalon,
    value: "In ₹ millions",
    ipo_details: {
      ipo_date: "Apr 3, 2023 to Apr 6, 2023",
      listing_date: "Apr 18, 2023",
      face_value: "₹2 per share",
      price: "₹415 to ₹436 per share",
      lot_size: "34 Shares",
      total_issue_size: "19,839,450 shares ",
      fresh_issue: "7,339,450 shares (36.99%)",
      offer_for_sale: "12,500,000 shares of ₹2 (63.01%)",
      issue_type: "Book Built Issue IPO",
      listing_at: "BSE, NSE",
    },
    ipo_tentative_timetable: {
      opening_date: "Apr 3, 2023",
      closing_date: "Apr 6, 2023",
      basis_of_allotment: "Apr 12, 2023",
      initiation_of_refunds: "Apr 13, 2023",
      credit_of_shares_to_demat: "Apr 17, 2023",
      listing_date: "Apr 18, 2023",
      upi_mandate_confirmation_cut_off_time: "5.00 PM on the issue closing day",
    },
    company_financials: {
      assets: {
        columns: [
          "As at",
          "Total Non-Current Assets",
          "Total Current Assets",
          "Total Assets",
          "Total Equity",
          "Total Non-Current Liabilities",
          "Total Current Liabilities",
          "Total Liabilities",
          "Total Equity and Liabilities",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Non-Current Assets": "1,376.76",
            "Total Current Assets": "4,502.86",
            "Total Assets": "5,879.62",
            "Total Equity": "871.91",
            "Total Non-Current Liabilities": "1,017.57",
            "Total Current Liabilities": "3,990.14",
            "Total Liabilities": "5,007.71",
            "Total Equity and Liabilities": "5,879.62",
          },
          {
            "As at": "March 31, 2021",
            "Total Non-Current Assets": "1,328.73",
            "Total Current Assets": "3,796.11",
            "Total Assets": "5,124.84",
            "Total Equity": "282.08",
            "Total Non-Current Liabilities": "1,051.09",
            "Total Current Liabilities": "3,791.67",
            "Total Liabilities": "4,842.76",
            "Total Equity and Liabilities": "5,124.84",
          },
          {
            "As at": "March 31, 2020",
            "Total Non-Current Assets": "1,369.91",
            "Total Current Assets": "3,126.58",
            "Total Assets": "4,496.49",
            "Total Equity": "34.46",
            "Total Non-Current Liabilities": "792.13",
            "Total Current Liabilities": "3,669.90",
            "Total Liabilities": "4,462.03",
            "Total Equity and Liabilities": "4,496.49",
          },
        ],
      },
      profit_loss: {
        columns: [
          "As at",
          "Total Income",
          "Total Expenses",
          "Profit Before Tax",
          "Total Tax Expense",
          "Profit for the period",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Income": "8,516.50",
            "Total Expenses": "7,852.09",
            "Profit Before Tax": "864.31",
            "Total Tax Expense": "182.67",
            "Profit for the period": "681.64",
          },
          {
            "As at": "March 31, 2021",
            "Total Income": "6,958.97",
            "Total Expenses": "6,670.68",
            "Profit Before Tax": "288.29",
            "Total Tax Expense": "57.47",
            "Profit for the period": "230.82",
          },
          {
            "As at": "March 31, 2020",
            "Total Income": "6,531.48",
            "Total Expenses": "6,378.53",
            "Profit Before Tax": "152.95",
            "Total Tax Expense": "29.69",
            "Profit for the period": "123.26",
          },
        ],
      },
      cash_flow: {
        columns: [
          "As at",
          "Net cash inflow from operating activities (A)",
          "Net cash outflow from investing activities (B)",
          "Net cash inflow/(outflow) from financing activities (C)",
          "Net foreign exchange difference",
          "Cash and cash equivalents at the beginning of the period/ year",
          "Cash and cash equivalents at period/ year end",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Net cash inflow from operating activities (A)": "138.59",
            "Net cash outflow from investing activities (B)": "-165.69",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-208.36",
            "Net foreign exchange difference": "-0.33",
            "Cash and cash equivalents at the beginning of the period/ year":
              "313.38",
            "Cash and cash equivalents at period/ year end": "77.59",
          },
          {
            "As at": "March 31, 2021",
            "Net cash inflow from operating activities (A)": "55.16",
            "Net cash outflow from investing activities (B)": "-262.62",
            "Net cash inflow/(outflow) from financing activities (C)": "279.64",
            "Net foreign exchange difference": "-4.73",
            "Cash and cash equivalents at the beginning of the period/ year":
              "245.93",
            "Cash and cash equivalents at period/ year end": "313.38",
          },
          {
            "As at": "March 31, 2020",
            "Net cash inflow from operating activities (A)": "657.25",
            "Net cash outflow from investing activities (B)": "-192.70",
            "Net cash inflow/(outflow) from financing activities (C)": "0.88",
            "Net foreign exchange difference": "36.04",
            "Cash and cash equivalents at the beginning of the period/ year":
              "203.92",
            "Cash and cash equivalents at period/ year end": "245.93",
          },
        ],
      },
    },
  },
  {
    name: "Divgi TorqTransfer Systems Limited",
    drhp: fileMappings.drhpDigvi,
    rhp: fileMappings.rhpDigvi,
    description: `
    Incorporated in 1964, Divgi TorqTransfer Systems Limited is engaged in the business as an automotive component entity. They are among the very few automotive component entities in India with the capability to develop and provide system-level transfer cases, torque couplers, and dual-clutch automatic transmission solutions.

    Divgi TorqTransfer is one of the leading players supplying transfer case systems to automotive OEMs in India and the largest supplier of transfer case systems to passenger vehicle manufacturers in India. Not only thi are also the only player manufacturing and exporting transfer cases to global OEMs from India, and the only manufacturer of torque couplers in India.
    
    Divgi TorqTransfer Systems Limited manufactures and supplies its products under a wide range which includes-
    
        Torque transfer systems (which includes four-wheel-drive ("4WD") and all-wheel-drive ("AWD") products);
        Synchronizer systems for manual transmissions and DCT;
        Components for the above-mentioned product categories for torque transfer systems and synchronizer systems in manual transmission, DCT, and EVs.
    
    Alongside, they have also developed
    
        Transmission systems for EVs;
        DCT systems;
        Rear wheel drive manual transmissions.
    
    Divgi TorqTransfer Systems Limited also takes pride in being among the few companies that serve as both, systems-level solution providers and component kit suppliers to global OEMs and Tier I transmission systems suppliers.
  `,
    risks: [
      `Our business largely depends upon our top five customers, and the loss of such customers or a significant reduction in
purchases by such customers will have a material adverse impact on our business.`,
      `The geographical concentration of our exports to certain countries and the inability to operate and grow our business
in such countries may have a material adverse effect on our business, financial condition, results of operations, cash
flows and future business prospects.`,
      `Our business could be adversely affected by volatility in the price or availability of raw materials and components.`
    ],
    image: imageMappings.logoDigvi,
    value: "In ₹ millions",
    ipo_details: {
      ipo_date: "Mar 1, 2023 to Mar 3, 2023",
      listing_date: "Mar 14, 2023",
      face_value: "₹5 per share",
      price: "₹560 to ₹590 per share",
      lot_size: "25 Shares",
      total_issue_size: "[.] shares",
      fresh_issue: "[.] shares",
      offer_for_sale: "3,934,243 shares of ₹5 ",
      issue_type: "Book Built Issue IPO",
      listing_at: "BSE, NSE",
    },
    ipo_tentative_timetable: {
      opening_date: "Mar 1, 2023",
      closing_date: "Mar 3, 2023",
      basis_of_allotment: "Mar 9, 2023",
      initiation_of_refunds: "Mar 10, 2023",
      credit_of_shares_to_demat: "Mar 13, 2023",
      listing_date: "Mar 14, 2023",
      upi_mandate_confirmation_cut_off_time: "5.00 PM on the issue closing day",
    },
    company_financials: {
      assets: {
        columns: [
          "As at",
          "Total Non-Current Assets",
          "Total Current Assets",
          "Total Assets",
          "Total Equity",
          "Total Non-Current Liabilities",
          "Total Current Liabilities",
          "Total Liabilities",
          "Total Equity and Liabilities",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Non-Current Assets": "1,418.25",
            "Total Current Assets": "2,635.45",
            "Total Assets": "4,053.70",
            "Total Equity": "3,400.15",
            "Total Non-Current Liabilities": "54.79",
            "Total Current Liabilities": "598.76",
            "Total Liabilities": "653.55",
            "Total Equity and Liabilities": "4,053.70",
          },
          {
            "As at": "March 31, 2021",
            "Total Non-Current Assets": "1,132.71",
            "Total Current Assets": "2,496.11",
            "Total Assets": "3,628.82",
            "Total Equity": "2,958.76",
            "Total Non-Current Liabilities": "60.14",
            "Total Current Liabilities": "609.92",
            "Total Liabilities": "670.06",
            "Total Equity and Liabilities": "3,628.82",
          },
          {
            "As at": "March 31, 2020",
            "Total Non-Current Assets": "990.67",
            "Total Current Assets": "2,046.33",
            "Total Assets": "3,037.00",
            "Total Equity": "2,095.33",
            "Total Non-Current Liabilities": "55.45",
            "Total Current Liabilities": "886.22",
            "Total Liabilities": "941.67",
            "Total Equity and Liabilities": "3,037.00",
          },
        ],
      },
      profit_loss: {
        columns: [
          "As at",
          "Total Income",
          "Total Expenses",
          "Profit Before Tax",
          "Total Tax Expense",
          "Profit for the period",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Income": "2,418.74",
            "Total Expenses": "1,797.21",
            "Profit Before Tax": "621.53",
            "Total Tax Expense": "160.02",
            "Profit for the period": "461.51",
          },
          {
            "As at": "March 31, 2021",
            "Total Income": "1,950.25",
            "Total Expenses": "1,424.69",
            "Profit Before Tax": "525.56",
            "Total Tax Expense": "145.12",
            "Profit for the period": "380.44",
          },
          {
            "As at": "March 31, 2020",
            "Total Income": "1,707.40",
            "Total Expenses": "1,329.78",
            "Profit Before Tax": "377.62",
            "Total Tax Expense": "97.23",
            "Profit for the period": "280.39",
          },
        ],
      },
      cash_flow: {
        columns: [
          "As at",
          "Net cash inflow from operating activities (A)",
          "Net cash outflow from investing activities (B)",
          "Net cash inflow/(outflow) from financing activities (C)",
          "Net foreign exchange difference",
          "Cash and cash equivalents at the beginning of the period/ year",
          "Cash and cash equivalents at period/ year end",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Net cash inflow from operating activities (A)": "510.77",
            "Net cash outflow from investing activities (B)": "-510.78",
            "Net cash inflow/(outflow) from financing activities (C)": "-29.33",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "202.87",
            "Cash and cash equivalents at period/ year end": "173.53",
          },
          {
            "As at": "March 31, 2021",
            "Net cash inflow from operating activities (A)": "269.65",
            "Net cash outflow from investing activities (B)": "-245.78",
            "Net cash inflow/(outflow) from financing activities (C)": "-26.23",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "205.23",
            "Cash and cash equivalents at period/ year end": "202.87",
          },
          {
            "As at": "March 31, 2020",
            "Net cash inflow from operating activities (A)": "383.29",
            "Net cash outflow from investing activities (B)": "-243.06",
            "Net cash inflow/(outflow) from financing activities (C)": "-57.51",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "122.51",
            "Cash and cash equivalents at period/ year end": "205.23",
          },
        ],
      },
    },
  },
  {
    name: "Global Surfaces Limited",
    drhp: fileMappings.drhpGlobalSurface,
    rhp: fileMappings.rhpMankind,
    description: `
    Incorporated in 1991, Global Surfaces Limited is engaged in processing natural stones and manufacturing engineered quartz.
    Natural stones are produced through complex geological processes and forms various products like granite, limestone, marble, slate, quartzite, onyx, sandstone, travertine, and others that are quarried from the earth.
    The company has two units, one located at RIICO Industrial Area, Bagru Extn, Bagru, Jaipur, Rajasthan, and the other at Mahindra World City SEZ, Jaipur, Rajasthan. Both units engage in the processing and manufacturing of the products.
    
    The products of Global Surfaces Limited have applications in flooring, wall cladding, countertops, cut-to-size, and other items. The products are widely used for commercial and residential industries and are sold within and outside India.
  `,
    risks: [
      `The continuing impact of the COVID-19 pandemic on our business and operations is uncertain
and it may be significant and continue to have an adverse effect on our business, operations
and our future financial performance.`,
      `We are dependent on a few customers for a major part of our revenues. Further we do
not enter into long-term arrangements with our customers and any failure to continue our
existing arrangements could adversely affect our business and results of operations.`,
      `We do not have long-term agreements with our suppliers for raw materials and an inability to
procure the desired quality, quantity of our raw materials in a timely manner and at reasonable
costs, or at all, may have a negative impact on our business, results of operations, financial
condition and cash flows.`
    ],
    image: imageMappings.logoGlobalSurface,
    value: "In ₹ millions",
    ipo_details: {
      ipo_date: "Mar 13, 2023 to Mar 15, 2023",
      listing_date: "Mar 23, 2023",
      face_value: "₹10 per share",
      price: "₹133 to ₹140 per share",
      lot_size: "100 Shares",
      total_issue_size: "11,070,000 shares ",
      fresh_issue: "8,520,000 shares (77%)",
      offer_for_sale: "2,550,000 shares of ₹10 (23%)",
      issue_type: "Book Built Issue IPO",
      listing_at: "BSE, NSE",
    },
    ipo_tentative_timetable: {
      opening_date: "Mar 13, 2023",
      closing_date: "Mar 15, 2023",
      basis_of_allotment: "Mar 20, 2023",
      initiation_of_refunds: "Mar 21, 2023",
      credit_of_shares_to_demat: "Mar 22, 2023",
      listing_date: "Mar 23, 2023",
      upi_mandate_confirmation_cut_off_time: "5.00 PM on the issue closing day",
    },
    company_financials: {
      assets: {
        columns: [
          "As at",
          "Total Non-Current Assets",
          "Total Current Assets",
          "Total Assets",
          "Total Equity",
          "Total Non-Current Liabilities",
          "Total Current Liabilities",
          "Total Liabilities",
          "Total Equity and Liabilities",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Non-Current Assets": "1,202.84",
            "Total Current Assets": "1,161.98",
            "Total Assets": "2,364.82",
            "Total Equity": "1,340.35",
            "Total Non-Current Liabilities": "533.26",
            "Total Current Liabilities": "491.21",
            "Total Liabilities": "1,024.47",
            "Total Equity and Liabilities": "2,364.82",
          },
          {
            "As at": "March 31, 2021",
            "Total Non-Current Assets": "713.20",
            "Total Current Assets": "876.77",
            "Total Assets": "1,589.97",
            "Total Equity": "984.34",
            "Total Non-Current Liabilities": "76.77",
            "Total Current Liabilities": "528.86",
            "Total Liabilities": "605.63",
            "Total Equity and Liabilities": "1,589.97",
          },
          {
            "As at": "March 31, 2020",
            "Total Non-Current Assets": "697.69",
            "Total Current Assets": "589.60",
            "Total Assets": "1,287.29",
            "Total Equity": "644.84",
            "Total Non-Current Liabilities": "142.59",
            "Total Current Liabilities": "499.86",
            "Total Liabilities": "642.45",
            "Total Equity and Liabilities": "1,287.29",
          },
        ],
      },
      profit_loss: {
        columns: [
          "As at",
          "Total Income",
          "Total Expenses",
          "Profit Before Tax",
          "Total Tax Expense",
          "Profit for the period",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Income": "1,983.57",
            "Total Expenses": "1,622.51",
            "Profit Before Tax": "361.06",
            "Total Tax Expense": "4.72",
            "Profit for the period": "356.34",
          },
          {
            "As at": "March 31, 2021",
            "Total Income": "1,790.04",
            "Total Expenses": "1,444.74",
            "Profit Before Tax": "345.30",
            "Total Tax Expense": "5.98",
            "Profit for the period": "339.32",
          },
          {
            "As at": "March 31, 2020",
            "Total Income": "1,657.80",
            "Total Expenses": "1,450.59",
            "Profit Before Tax": "207.21",
            "Total Tax Expense": "-2.43",
            "Profit for the period": "209.64",
          },
        ],
      },
      cash_flow: {
        columns: [
          "As at",
          "Net cash inflow from operating activities (A)",
          "Net cash outflow from investing activities (B)",
          "Net cash inflow/(outflow) from financing activities (C)",
          "Net foreign exchange difference",
          "Cash and cash equivalents at the beginning of the period/ year",
          "Cash and cash equivalents at period/ year end",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Net cash inflow from operating activities (A)": "281.90",
            "Net cash outflow from investing activities (B)": "-281.37",
            "Net cash inflow/(outflow) from financing activities (C)": "-34.63",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "54.44",
            "Cash and cash equivalents at period/ year end": "20.34",
          },
          {
            "As at": "March 31, 2021",
            "Net cash inflow from operating activities (A)": "321.44",
            "Net cash outflow from investing activities (B)": "-79.63",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-193.14",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "5.77",
            "Cash and cash equivalents at period/ year end": "54.44",
          },
          {
            "As at": "March 31, 2020",
            "Net cash inflow from operating activities (A)": "536.88",
            "Net cash outflow from investing activities (B)": "-105.23",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-456.81",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "30.93",
            "Cash and cash equivalents at period/ year end": "5.77",
          },
        ],
      },
    },
  },
  {
    name: "Udayshivakumar Infra Limited",
    drhp: fileMappings.drhpUdayshivakumar,
    rhp: fileMappings.rhpUdayshivakumar,
    description: `
    Incorporated in 2019, Udayshivakumar Infra Limited is engaged in the business of the construction of roads.
    Udayshivakumar Infra Limited is an ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 company. They construct roads including State Highways, District Roads, Smart Roads under Municipal Corporations, Smart Roads under PM's Smart City Mission projects, National Highways, Bruhat Bengaluru Mahanagara Palike (BBMP), and Local Area Roads in various Taluka Places, etc.
    The company primarily operates in the State of Karnataka. They bid for Roads, Bridges, Irrigation & Canals Industrial Area construction in Karnataka, this includes National Highways (MORTH), State Highway Development Corporations Ltd., (SHDP), Government Departments such as Karnataka Public Works Ports & Inland Water Transport Department (KPWP & IWTD), Davanagere Harihara Urban Development Authority (DHUDA), and many more.
    As of August 31, 2022, the Company had executed over 30 various projects in and around the State of Karnataka along with the erstwhile partnership firm, M/s. Udayshivakumar. The entity is working on twenty-five ongoing projects.
    To gear up its operations and scale larger, the company is also looking to undertake projects in the joint venture with other infrastructure companies in industry.
  `,
    risks: [
      `Our business is concentrated in the State of Karnataka. We are primarily dependent on the projects
undertaken or awarded in the state of Karnataka, by the Karnataka State Government, the local
authorities /municipal bodies in the state of Karnataka and other entities funded by the Government of
India or the Karnataka State Government. Therefore, we derive our entire revenues from contracts with
a limited number of government entities and are exposed to risks emanating from economic, regulatory
and other changes in the State of Karnataka. Any adverse changes in the central or state government
policies may lead to our contracts being foreclosed, terminated, restructured or renegotiated, which may
have a material effect on our business and results of operations.`,
      `Our Company depends on the knowledge and experience of our Promoter, Udayshivakumar for our
growth. The loss of their services may have a material adverse effect on our business, financial condition
and results of operations.`,
      `We derive a significant portion of our revenues from a limited number of clients. The loss of any significant
clients may have an adverse effect on our business, financial condition, results of operations, and
prospects.`
    ],
    image: imageMappings.logoUdayshivakumar,
    value: "In lakhs",
    ipo_details: {
      ipo_date: "Mar 20, 2023 to Mar 23, 2023",
      listing_date: "Apr 3, 2023",
      face_value: "₹10 per share",
      price: "₹33 to ₹35 per share",
      lot_size: "428 Shares",
      total_issue_size: "20,000,000 shares",
      fresh_issue: "20,000,000 shares (100%) ",
      issue_type: "Book Built Issue IPO",
      listing_at: "BSE, NSE",
    },
    ipo_tentative_timetable: {
      opening_date: "Mar 20, 2023",
      closing_date: "Mar 23, 2023",
      basis_of_allotment: "Mar 28, 2023",
      initiation_of_refunds: "Mar 29, 2023",
      credit_of_shares_to_demat: "Mar 31, 2023",
      listing_date: "Apr 3, 2023",
      upi_mandate_confirmation_cut_off_time: "5.00 PM on the issue closing day",
    },
    company_financials: {
      assets: {
        columns: [
          "As at",
          "Total Non-Current Assets",
          "Total Current Assets",
          "Total Assets",
          "Total Equity",
          "Total Non-Current Liabilities",
          "Total Current Liabilities",
          "Total Liabilities",
          "Total Equity and Liabilities",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Assets": "16,261.25",
            "Total Equity and Liabilities": "16,261.25",
          },
          {
            "As at": "March 31, 2021",
            "Total Assets": "14,681.73",
            "Total Equity and Liabilities": "14,681.73",
          },
          {
            "As at": "March 31, 2020",
            "Total Assets": "15,826.08",
            "Total Equity and Liabilities": "15,826.08",
          },
        ],
      },
      profit_loss: {
        columns: [
          "As at",
          "Total Income",
          "Total Expenses",
          "Profit Before Tax",
          "Total Tax Expense",
          "Profit for the period",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Total Income": "18,638.81",
            "Total Expenses": "17,037.44",
            "Profit Before Tax": "1,601.37",
            "Total Tax Expense": "386.56",
            "Profit for the period": "1,214.81",
          },
          {
            "As at": "March 31, 2021",
            "Total Income": "21,110.82",
            "Total Expenses": "19,753.23",
            "Profit Before Tax": "1,231.67",
            "Total Tax Expense": "300.98",
            "Profit for the period": "931.69",
          },
          {
            "As at": "March 31, 2020",
            "Total Income": "19,440.50",
            "Total Expenses": "18,021.98",
            "Profit Before Tax": "1,418.52",
            "Total Tax Expense": "369.80",
            "Profit for the period": "1,048.72",
          },
        ],
      },
      cash_flow: {
        columns: [
          "As at",
          "Net cash inflow from operating activities (A)",
          "Net cash outflow from investing activities (B)",
          "Net cash inflow/(outflow) from financing activities (C)",
          "Net foreign exchange difference",
          "Cash and cash equivalents at the beginning of the period/ year",
          "Cash and cash equivalents at period/ year end",
        ],
        records: [
          {
            "As at": "March 31, 2022",
            "Net cash inflow from operating activities (A)": "3,198.64",
            "Net cash outflow from investing activities (B)": "-1,669.81",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-529.71",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "525.02",
            "Cash and cash equivalents at period/ year end": "1,524.15",
          },
          {
            "As at": "March 31, 2021",
            "Net cash inflow from operating activities (A)": "1,720.47",
            "Net cash outflow from investing activities (B)": "147.85",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-1,367.81",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "24.51",
            "Cash and cash equivalents at period/ year end": "525.02",
          },
          {
            "As at": "March 31, 2020",
            "Net cash inflow from operating activities (A)": "2,141.63",
            "Net cash outflow from investing activities (B)": "-680.20",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-1,492.65",
            "Net foreign exchange difference": "0.00",
            "Cash and cash equivalents at the beginning of the period/ year":
              "55.73",
            "Cash and cash equivalents at period/ year end": "24.51",
          },
        ],
      },
    },
  },
];
