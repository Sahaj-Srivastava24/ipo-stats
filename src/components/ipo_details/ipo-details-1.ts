import imageMappings from "components/entities/imageMappings";

type TIPODetails = {
  ipo_date: string;
  listing_date: string;
  face_value: string;
  price: string;
  lot_size: string;
  fresh_issue?: string;
  total_issue_size: string;
  offer_for_sale: string;
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
      "Total Non-Current Assets": string;
      "Total Current Assets": string;
      "Total Assets": string;
      "Total Equity": string;
      "Total Non-Current Liabilities": string;
      "Total Current Liabilities": string;
      "Total Liabilities": string;
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
  description: string;
  image: string;
  ipo_details: TIPODetails;
  ipo_tentative_timetable: TIPOTimeTable;
  company_financials: TCompanyFinancials;
};

export const companies: TCompany[] = [
  {
    name: "Mankind Pharma Limited",
    description: `
Incorporated in 1991, Mankind Pharma Limited develops, manufactures, and markets pharmaceutical formulations across various acute and chronic therapeutic areas and several consumer healthcare products.
In India, the business is active in a number of acute and chronic therapeutic fields, including anti-infectives, cardiovascular, gastrointestinal, anti-diabetic, neuro/CNS, vitamins/minerals/nutrients, and respiratory.
It has over 36 brands, including Manforce (Rx), Moxikind-CV, Amlokind-AT, Unwanted-Kit, Candiforce, Gudcef, Glimestar-M, Prega News, Dydroboon, Codistar, Nurokind-Gold, Nurokind Plus-RF, Nurokind-LC, Asthakind-DX, Cefakind, Monticope, Telmikind-H, Telmikind, Gudcef-CV, and Unwanted-72, among them.
Mankind Pharma has one of the largest distribution networks of medical representatives in the Indian pharmaceutical market. Over 80% of doctors in India prescribed their formulations and has been ranked number 4th in terms of domestic sales during the Financial Year 2022.
The company has earned numerous awards and recognitions and including The Best of Bharat Awards 2022 by exchange4media in the year 2022, and Silver Medal from National Awards for Manufacturing Competitiveness Assessment 2021 instituted by International Research Institute for Manufacturing.
Mankind has a pan-India marketing presence, with a field force of 11,691 medical representatives and 3,561 field managers, as of December 31, 2022. They operate 25 manufacturing facilities across India and had 4,121 manufacturing personnel as of December 31, 2022.
As of December 31, 2022, the Company had a team of over 600 scientists and a dedicated in-house R&D center with four units located in IMT Manesar, Gurugram, Haryana and Thane, Maharashtra.
  `,
    image: imageMappings.logoMankind,
    value: "In ₹ millions",
    ipo_details: {
      ipo_date: "Apr 25, 2023 to Apr 27, 2023",
      listing_date: "[.]",
      face_value: "₹1 per share",
      price: "₹1026 to ₹1080 per share",
      lot_size: "13 Shares",
      total_issue_size: "40,058,844 shares (aggregating up to ₹4,326.36 Cr)",
      offer_for_sale:
        "40,058,844 shares of ₹1 (aggregating up to ₹4,326.36 Cr)",
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
    description: `
    Nexus Select Trust is a retail REIT (Real Estate Investment Trust) that owns and operates high-quality shopping malls and other retail properties in India. It is sponsored by global investment firm Blackstone



i. It has a portfolio of 17 operational shopping malls across 14 major cities, covering a 9.8 million square feet area. Some of its prominent properties include Select Citywalk in Delhi, Nexus Seawoods in Navi Mumbai, Nexus Koramangala in Bengaluru, Nexus Elante in Chandigarh, and Nexus Ahmedabad One in Ahmedabad.

ii. It also owns two complementary hotel assets (354 keys), and three office assets of 1.3 million square feet as of December 31, 2022.

iii. It has a diversified tenant base of over 1,000 national and international brands across around 3,000 stores. Some of its leading tenants are Apple, Zara, H&M, Uniqlo, Sephora, Superdry, Lifestyle, Shoppers Stop, Starbucks, McDonalds among others.

iv. It generates income from leasing out retail space to various brands and tenants. It also enhances the value of its properties by investing in renovation, expansion and tenant mix optimization. It distributes at least 90% of its net distributable cash flow to its unit holders as dividends on a quarterly basis.

v. It plans to double its portfolio in next 4-5 years through acquisition mode. It has a strong pipeline of potential acquisitions of over 10 million square feet across 12 cities.
  `,
    image: imageMappings.logoNexus,
    ipo_details: {
      ipo_date: "May 9, 2023 to May 11, 2023",
      listing_date: "[.]",
      face_value: "₹ per share",
      price: "₹95 to ₹100 per share",
      lot_size: "150 Shares",
      total_issue_size: "[.] shares (aggregating up to ₹3,200.00 Cr",
      fresh_issue: "[.] shares (aggregating up to ₹1,400.00 Cr)",
      offer_for_sale: "[.] shares of ₹ (aggregating up to ₹1,800.00 Cr)",
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
  // {
  //   name: "Avalon Technologies Limited",
  //   ipo_details: {
  //     ipo_date: "Apr 3, 2023 to Apr 6, 2023",
  //     listing_date: "Apr 18, 2023",
  //     face_value: "₹2 per share",
  //     price: "₹415 to ₹436 per share",
  //     lot_size: "34 Shares",
  //     total_issue_size: "19,839,450 shares (aggregating up to ₹865.00 Cr)",
  //     fresh_issue: "7,339,450 shares (aggregating up to ₹320.00 Cr)",
  //     offer_for_sale: "12,500,000 shares of ₹2 (aggregating up to ₹545.00 Cr)",
  //     issue_type: "Book Built Issue IPO",
  //     listing_at: "BSE, NSE",
  //   },
  //   ipo_tentative_timetable: {
  //     opening_date: "Apr 3, 2023",
  //     closing_date: "Apr 6, 2023",
  //     basis_of_allotment: "Apr 12, 2023",
  //     initiation_of_refunds: "Apr 13, 2023",
  //     credit_of_shares_to_demat: "Apr 17, 2023",
  //     listing_date: "Apr 18, 2023",
  //     upi_mandate_confirmation_cut_off_time: "5.00 PM on the issue closing day",
  //   },
  // },
];
