import { Table } from "@nextui-org/react";

interface Company {
  name: string;
  //   ipo_details: {
  //     ...
  //   };
  //   ipo_anchor_investors_details: {
  //     ...
  //   };
  ipo_tentative_timetable: {
    IPODate: string;
    ListingDate: string;
    OpeningDate: string;
    ClosingDate: string;
    BasisOfAllotment: string;
    InitiationOfRefunds: string;
    CreditOfSharesToDemat: string;
    UpiMandateConfirmationCutOffTime: string;
  };

  //   company_financials: {
  //     ...
  //   }[];
}

interface Props {
  company: Company;
}

const TablesStock = ({ company }: Props) => {
  const {
    IPODate,
    ListingDate,
    OpeningDate,
    ClosingDate,
    BasisOfAllotment,
    InitiationOfRefunds,
    CreditOfSharesToDemat,
    UpiMandateConfirmationCutOffTime,
  } = company.ipo_tentative_timetable;

  return (
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
        <Table.Row>
          <Table.Cell>Opening Date</Table.Cell>
          <Table.Cell>{OpeningDate}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Closing Date</Table.Cell>
          <Table.Cell>{ClosingDate}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Basis of Allotment</Table.Cell>
          <Table.Cell>{BasisOfAllotment}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Initiation of Refunds</Table.Cell>
          <Table.Cell>{InitiationOfRefunds}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Credit of Shares to Demat</Table.Cell>
          <Table.Cell>{CreditOfSharesToDemat}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Listing Date</Table.Cell>
          <Table.Cell>{ListingDate}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>UPI Mandate Confirmation Cut-Off Time</Table.Cell>
          <Table.Cell>{UpiMandateConfirmationCutOffTime}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default TablesStock;
