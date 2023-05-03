import {Text} from "@nextui-org/react";
import IPOCompanyFinances from "components/components/detailed-ipo/IPOCompanyFinances";
import IPODetailsTable from "components/components/detailed-ipo/IPODetailsTable";
import Footer from "components/components/footer";
import Header from "components/components/header";
import imageMappings from "components/entities/imageMappings";
import {DM_Sans} from "next/font/google";
import Image from "next/image";

const data = {
  name: "Mankind Pharma Limited",
  des: `
Incorporated in 1991, Mankind Pharma Limited develops, manufactures, and markets pharmaceutical formulations across various acute and chronic therapeutic areas and several consumer healthcare products.
In India, the business is active in a number of acute and chronic therapeutic fields, including anti-infectives, cardiovascular, gastrointestinal, anti-diabetic, neuro/CNS, vitamins/minerals/nutrients, and respiratory.
It has over 36 brands, including Manforce (Rx), Moxikind-CV, Amlokind-AT, Unwanted-Kit, Candiforce, Gudcef, Glimestar-M, Prega News, Dydroboon, Codistar, Nurokind-Gold, Nurokind Plus-RF, Nurokind-LC, Asthakind-DX, Cefakind, Monticope, Telmikind-H, Telmikind, Gudcef-CV, and Unwanted-72, among them.
Mankind Pharma has one of the largest distribution networks of medical representatives in the Indian pharmaceutical market. Over 80% of doctors in India prescribed their formulations and has been ranked number 4th in terms of domestic sales during the Financial Year 2022.
The company has earned numerous awards and recognitions and including The Best of Bharat Awards 2022 by exchange4media in the year 2022, and Silver Medal from National Awards for Manufacturing Competitiveness Assessment 2021 instituted by International Research Institute for Manufacturing.
Mankind has a pan-India marketing presence, with a field force of 11,691 medical representatives and 3,561 field managers, as of December 31, 2022. They operate 25 manufacturing facilities across India and had 4,121 manufacturing personnel as of December 31, 2022.
As of December 31, 2022, the Company had a team of over 600 scientists and a dedicated in-house R&D center with four units located in IMT Manesar, Gurugram, Haryana and Thane, Maharashtra.
  `,
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
        "Total Liabilties",
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
}

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function DetailedIPO() {

  return (
    <>
      <Header />
      <div className="flex flex-col-reverse md:flex-row gap-10 mx-30 pb-30 mt-30 md:justify-between md:items-center">
        <div className="flex flex-col gap-10 md:ml-10  md:max-w-[60%]">
          <Text className={`text-center md:text-left text-[42px] md:text-[42px] leading-[30px] md:leading-[42px] font-[700] ${dm_sans.className} max-w-[60%]`} css={{color: '$textDark'}}>{data.name}</Text>
          <Text className="text-[16px] leading-[24px] md:text-[12px] md:leading-[16px]" css={{color: '$textLight'}}>
            {data.des}
          </Text>
        </div>
        <Image src={imageMappings.logoMankind} alt="Company Image" width={300} height={200} className="w-300 h-200 md:mr-30" />
      </div>
      <IPODetailsTable ipoDetails={data.ipo_details} ipoInvestors={data.ipo_anchor_investors_details} ipoTT={data.ipo_tentative_timetable} />
      <IPOCompanyFinances companyFinances={data.company_financials} />
      <Footer />
    </>
  )
}