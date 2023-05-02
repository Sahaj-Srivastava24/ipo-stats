import * as React from "react";
import { Table } from "@nextui-org/react";
import CompanyData from "./ipo-details-1.json";

function IPOTables(props) {
  let companyName = props.name;

  let ipoDetails;
  let ipo_investor;
  let profit_loss;
  let timetable;

  let deets;
  for (let i = 0; i < CompanyData.companies.length; i++) {
    if (CompanyData.companies[i].name === companyName) {
      deets = CompanyData.companies[i];
      ipoDetails = deets.ipo_details;
      ipo_investor = deets.ipo_anchor_investors_details;
      timetable = deets.ipo_tentative_timetable;
      profit_loss = deets.company_financials;
      break;
    }
  }

  const tableData = Object.entries(timetable).map(([key, value]) => ({
    event: key,
    date: value,
  }));

  let ipoDetailsArray = Object.keys(ipoDetails).map((key) => {
    return {
      key: key,
      value: ipoDetails[key],
    };
  });

  let ipoInvestorArray = Object.keys(ipo_investor).map((key) => {
    return {
      key: key.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase()),
      value: ipo_investor[key],
    };
  });
  const headers = Object.keys(profit_loss).filter(
    (key) => key !== "period_ended"
  );

  const rows = profit_loss.period_ended.map((date, index) => {
    const row = { "Period Ended": date };
    headers.forEach((header) => {
      row[header] = profit_loss[header][index];
    });
    return row;
  });
  console.log(rows);
  return (
    <>
      <h1>{companyName}</h1>
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
              <Table.Cell>
                {row.event
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </Table.Cell>
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
}

export default IPOTables;
