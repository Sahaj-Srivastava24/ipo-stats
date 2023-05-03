type TIPODetails = {
  ipo_date: string;
  listing_date: string;
  face_value: string;
  price: string;
  lot_size: string;
  fresh_issue?: string
  total_issue_size: string;
  offer_for_sale: string;
  issue_type: string;
  listing_at: string;
}

type TIPOAnchorInvestorsDetails = {
  bid_date: string;
  shares_offered: string;
  anchor_portion_size: string;
  anchor_lock_in_period_end_date_for_50_percent_shares: string;
  anchor_lock_in_period_end_date_for_remaining_shares: string;
}

type TLiability = {
  columns: string[];
  records: {
    [key: string]: string
  }[];
};

type TCompanyFinancials = {
  assets: {
    columns: string[];
    records: {
      "As at": string;
      "Total Non-Current Assets": string;
      "Total Current Assets": string;
      "Total Assets": string;
    }[];
  }
}

type TCompany = {
  name: string
  ipo_details: TIPODetails
  ipo_anchor_investors_details: TIPOAnchorInvestorsDetails
  company_financials: TCompanyFinancials
  liabilities: TLiability
};

export const companies: TCompany[] = [ 
  {
    name: "Mankind Pharma Limited",
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
    ipo_anchor_investors_details: {
      bid_date: "Apr 24, 2023",
      shares_offered: "12,017,652",
      anchor_portion_size: "1,297.91",
      anchor_lock_in_period_end_date_for_50_percent_shares: "Jun 14, 2023",
      anchor_lock_in_period_end_date_for_remaining_shares: "Sep 8, 2023",
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
        ],
        records: [
          {
            "As at": "December 31, 2022",
            "Total Non-Current Assets": "53,048.63",
            "Total Current Assets": "39,688.90",
            "Total Assets": "92,737.53",
          },
          {
            "As at": "December 31, 2021",
            "Total Non-Current Assets": "27,381.68",
            "Total Current Assets": "53,057.11",
            "Total Assets": "80,438.79",
          },
          {
            "As at": "March 31, 2022",
            "Total Non-Current Assets": "47,409.21",
            "Total Current Assets": "44,068.19",
            "Total Assets": "91,477.40",
          },
          {
            "As at": "March 31, 2021",
            "Total Non-Current Assets": "24,659.95",
            "Total Current Assets": "39,066.37",
            "Total Assets": "63,726.32",
          },
          {
            "As at": "March 31, 2020",
            "Total Non-Current Assets": "22,510.70",
            "Total Current Assets": "28,222.15",
            "Total Assets": "50,732.85",
          },
        ],
      },
      liabilities: {
        columns: [
          "As at",
          "Total Equity",
          "Total Non-Current Liabilities",
          "Total Current Liabilities",
          "Total Equity and Liabilities",
        ],
        records: [
          {
            "As at": "December 31, 2022",
            "Total Equity": "73,255.65",
            "Total Non-Current Liabilities": "2,444.34",
            "Total Current Liabilities": "17,037.54",
            "Total Liabilties": "19,481.88",
            "Total Equity and Liabilities": "92,737.53",
          },
          {
            "As at": "December 31, 2021",
            "Total Equity": "61,237.39",
            "Total Non-Current Liabilities": "1,623.79",
            "Total Current Liabilities": "17,577.61",
            "Total Liabilties": "19,201.40",
            "Total Equity and Liabilities": "80,438.79",
          },
          {
            "As at": "March 31, 2022",
            "Total Equity": "63,163.08",
            "Total Non-Current Liabilities": "2,079.63",
            "Total Current Liabilities": "26,234.69",
            "Total Liabilties": "28,314.32",
            "Total Equity and Liabilities": "91,477.40",
          },
          {
            "As at": "March 31, 2021",
            "Total Equity": "48,628.89",
            "Total Non-Current Liabilities": "1,563.45",
            "Total Current Liabilities": "13,533.98",
            "Total Liabilties": "15,097.43",
            "Total Equity and Liabilities": "63,726.32",
          },
          {
            "As at": "March 31, 2020",
            "Total Equity": "36,715.70",
            "Total Non-Current Liabilities": "1,431.26",
            "Total Current Liabilities": "12,585.89",
            "Total Liabilties": "14,017.15",
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
            "As at": "December 31, 2022",
            "Total Income": "67,778.21",
            "Total Expenses": "54,935.23",
            "Profit Before Tax": "12,939.52",
            "Total Tax Expense": "2,779.76",
            "Profit for the period": "10,159.76",
          },
          {
            "As at": "December 31, 2021",
            "Total Income": "62,182.89",
            "Total Expenses": "45,161.11",
            "Profit Before Tax": "17,115.52",
            "Total Tax Expense": "4,513.10",
            "Profit for the period": "12,602.42",
          },
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
            "As at": "December 31, 2022",
            "Net cash inflow from operating activities (A)": "13,288.99",
            "Net cash outflow from investing activities (B)": "-5,286.71",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-7,961.42",
            "Net foreign exchange difference": "63.02",
            "Cash and cash equivalents at the beginning of the period/ year":
              "2,830.59",
            "Cash and cash equivalents at period/ year end": "2,934.47",
          },
          {
            "As at": "December 31, 2021",
            "Net cash inflow from operating activities (A)": "11,585.46",
            "Net cash outflow from investing activities (B)": "-10,350.02",
            "Net cash inflow/(outflow) from financing activities (C)": "222.53",
            "Net foreign exchange difference": "4.99",
            "Cash and cash equivalents at the beginning of the period/ year":
              "1,273.28",
            "Cash and cash equivalents at period/ year end": "2,736.24",
          },
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
        ],
        records: [
          {
            "As at": "December 31, 2022",
            "Total Non-Current Assets": "75,162.16",
            "Total Current Assets": "14,733.18",
            "Total Assets": "89,895.34",
          },
          {
            "As at": "March 31, 2022",
            "Total Non-Current Assets": "76,224.09",
            "Total Current Assets": "14,673.57",
            "Total Assets": "90,897.66",
          },
          {
            "As at": "March 31, 2021",
            "Total Non-Current Assets": "77,180.72",
            "Total Current Assets": "12,412.87",
            "Total Assets": "89,593.59",
          },
          {
            "As at": "March 31, 2020",
            "Total Non-Current Assets": "83,294.52",
            "Total Current Assets": "11,981.83",
            "Total Assets": "95,276.35",
          },
        ],
      },
      liabilities: {
        columns: [
          "As at",
          "Total Equity",
          "Total Non-Current Liabilities",
          "Total Current Liabilities",
          "Total Equity and Liabilities",
        ],
        records: [
          {
            "As at": "December 31, 2022",
            "Total Equity": "18,556.58",
            "Total Non-Current Liabilities": "60,522.35",
            "Total Current Liabilities": "10,816.41",
            "Total Liabilties": "71,338.76",
            "Total Equity and Liabilities": "89,895.34",
          },
          {
            "As at": "March 31, 2022",
            "Total Equity": "17,238.38",
            "Total Non-Current Liabilities": "63,531.64",
            "Total Current Liabilities": "10,127.64",
            "Total Liabilties": "73,659.28",
            "Total Equity and Liabilities": "90,897.66",
          },
          {
            "As at": "March 31, 2021",
            "Total Equity": "16,621.80",
            "Total Non-Current Liabilities": "63,843.70",
            "Total Current Liabilities": "9,128.09",
            "Total Liabilties": "72,971.79",
            "Total Equity and Liabilities": "89,593.59",
          },
          {
            "As at": "March 31, 2020",
            "Total Equity": "23,255.13",
            "Total Non-Current Liabilities": "60,566.15",
            "Total Current Liabilities": "11,455.07",
            "Total Liabilties": "72,021.22",
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
            "As at": "December 31, 2022",
            "Total Income": "14,983.52",
            "Total Expenses": "5,641.71",
            "Profit Before Tax": "3,430.82",
            "Total Tax Expense": "860.62",
            "Profit for the period": "2,570.20",
          },
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
            "As at": "December 31, 2022",
            "Net cash inflow from operating activities (A)": "8,910.76",
            "Net cash outflow from investing activities (B)": "-664.52",
            "Net cash inflow/(outflow) from financing activities (C)":
              "-8,418.95",
            "Net foreign exchange difference": "",
            "Cash and cash equivalents at the beginning of the period/ year":
              "2,895.51",
            "Cash and cash equivalents at period/ year end": "2,722.80",
          },
          {
            "As at": "March 31, 2022",
            "Net cash inflow from operating activities (A)": "7,474.78",
            "Net cash outflow from investing activities (B)": "-2,706.85",
            "Net cash inflow/(outflow) from financing activities (C)":
              "4,381.78",
            "Net foreign exchange difference": "",
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
            "Net foreign exchange difference": "",
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
            "Net foreign exchange difference": "",
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
    ipo_details: {
      ipo_date: "Apr 3, 2023 to Apr 6, 2023",
      listing_date: "Apr 18, 2023",
      face_value: "₹2 per share",
      price: "₹415 to ₹436 per share",
      lot_size: "34 Shares",
      total_issue_size: "19,839,450 shares (aggregating up to ₹865.00 Cr)",
      fresh_issue: "7,339,450 shares (aggregating up to ₹320.00 Cr)",
      offer_for_sale: "12,500,000 shares of ₹2 (aggregating up to ₹545.00 Cr)",
      issue_type: "Book Built Issue IPO",
      listing_at: "BSE, NSE",
    },
    ipo_anchor_investors_details: {
      bid_date: "Mar 31, 2023",
      shares_offered: "8,927,751",
      anchor_portion_size: "389.25",
      anchor_lock_in_period_end_date_for_50_percent_shares: "May 26, 2023",
      anchor_lock_in_period_end_date_for_remaining_shares: "Aug 22, 2023",
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
  },
];