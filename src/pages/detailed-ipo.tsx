import {Text} from "@nextui-org/react";
import IPOCompanyFinances from "components/components/detailed-ipo/IPOCompanyFinances";
import IPODetailsTable from "components/components/detailed-ipo/IPODetailsTable";
import IPOTables from "components/components/detailed-ipo/IPOTable";
import Feedback from "components/components/feedback";
import Footer from "components/components/footer";
import Header from "components/components/header";
import {companies} from "components/components/ipo_details/ipo-details-1";
import imageMappings from "components/entities/imageMappings";
import {DM_Sans} from "next/font/google";
import Image from "next/image";

const data = {
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
}

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})


export default function DetailedIPO() {

  return (
    <>
      <Header />
      <div className="flex flex-col items-center md:flex-row gap-30 md:gap-10 mx-30 pb-30 mt-30 md:items-center">
        <div className="w-[40%] flex items-center justify-center">
          <Image src={imageMappings.logoMankind} alt="Company Image" width={300} height={200} className="w-300 h-200 md:ml-30" />
        </div>
        <div className="flex flex-col items-center gap-10 md:ml-10 md:items-start md:max-w-[60%]">
          <Text className={`text-center md:text-left text-[30px] md:text-[42px] leading-[30px] md:leading-[42px] font-[700] ${dm_sans.className} md:max-w-[60%]`} css={{color: '$textDark'}}>{data.name}</Text>
          <Text className="text-[16px] leading-[24px] md:text-[12px] md:leading-[16px]" css={{color: '$textLight'}}>
            {data.description}
          </Text>
        </div>
      </div >
      <div className="flex flex-col gap-20 mx-20 navLogo:mx-30 md:mx-[80px]">
        <div>
          <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>IPO Details</Text>
          <IPODetailsTable ipoDetails={data.ipo_details} ipoTT={data.ipo_tentative_timetable} />
        </div>
        <div>
          <Text className={`text-center md:text-left text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-[700] mb-20 pl-10 ${dm_sans.className}`} css={{color: '$textDark'}}>Company Financials</Text>
          <IPOTables companyFinances={data.company_financials} />
        </div>
      </div>
      <Footer />
      <Feedback />
    </>
  )
}