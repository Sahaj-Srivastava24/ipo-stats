import { Table } from "@nextui-org/react";
import CompanyData from "./ipo-details-1.json";

interface IPOTablesProps {
  name: string;
}

interface IPODetails {
  [key: string]: string;
}

interface IPOInvestor {
  [key: string]: string;
}

interface Timetable {
  [key: string]: string;
}

interface CompanyDetails {
  name: string;
  ipo_details: IPODetails;
  ipo_anchor_investors_details: IPOInvestor;
  ipo_tentative_timetable: Timetable;
}

const IPOTables: React.FC<IPOTablesProps> = ({ name }) => {
  let ipoDetails: IPODetails = {};
  let ipoInvestor: IPOInvestor = {};
  let timetable: Timetable = {};

  let deets: CompanyDetails;

  for (let i = 0; i < CompanyData.companies.length; i++) {
    if (CompanyData.companies[i].name === name) {
      deets = CompanyData.companies[i];
      ipoDetails = deets.ipo_details;
      ipoInvestor = deets.ipo_anchor_investors_details;
      timetable = deets.ipo_tentative_timetable;

      break;
    }
  }

  const tableData = Object.entries(timetable).map(([key, value]) => ({
    event: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    date: value,
  }));

  const ipoDetailsArray = Object.keys(ipoDetails).map((key) => {
    return {
      key: key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      value: ipoDetails[key],
    };
  });

  const ipoInvestorArray = Object.keys(ipoInvestor).map((key) => {
    return {
      key: key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
      value: ipoInvestor[key],
    };
  });

  // const data = profitLoss.period_ended.map((_, index) => ({
  //   periodEnded: profitLoss.period_ended[index],
  //   totalAssets: profitLoss.total_assets[index],
  //   totalRevenue: profitLoss.total_revenue[index],
  //   profitAfterTax: profitLoss.profit_after_tax[index],
  //   totalBorrowing: profitLoss.total_borrowing[index],
  // }));
  return (
    <>
      <h1>{name}</h1>
      <h2>IPO Details</h2>
      <Table
        striped
        sticked
        aria-label="IPO Details"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>Date</Table.Column>
          <Table.Column>Details</Table.Column>
        </Table.Header>
        <Table.Body>
          {ipoDetailsArray.map((detail) => (
            <Table.Row key={detail.key}>
              <Table.Cell>
                {detail.key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Table.Cell>
              <Table.Cell>{detail.value}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Table
        striped
        sticked
        aria-label="IPO Tentative Timetable"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column>Event</Table.Column>
          <Table.Column>Tentative Date</Table.Column>
        </Table.Header>
        <Table.Body>
          {tableData.map((row) => (
            <Table.Row key={row.event}>
              <Table.Cell>{row.event}</Table.Cell>
              <Table.Cell>{row.date}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <h2>IPO Anchor Investors Details</h2>
      <Table
        striped
        sticked
        aria-label="IPO Anchor Investors Details"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column> </Table.Column>
          <Table.Column> </Table.Column>
        </Table.Header>
        <Table.Body>
          {ipoInvestorArray.map((investor) => (
            <Table.Row key={investor.key}>
              <Table.Cell>{investor.key}</Table.Cell>
              <Table.Cell>{investor.value}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default IPOTables;
