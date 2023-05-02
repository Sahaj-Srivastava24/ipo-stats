// import { Text } from "@nextui-org/react";
import CompanyData from "./ipo-details-1.json";
export default function IPOTables(props) {
  let companyName = props.name;
  let companyDetails;
  for (let i = 0; i < CompanyData.companies.length; i++) {
    if (CompanyData.companies[i].name === companyName) {
      companyDetails = CompanyData.companies[i].ipo_details;
      break;
    }
  }

  // display the IPO details of the company
  if (companyDetails) {
    console.log(`IPO Lot Size: ${companyDetails.lot_size}`);
    console.log(`IPO Price Range: ${companyDetails.price}`);
    // display other IPO details as needed
  } else {
    console.log("error");
  }
  return <></>;
}
