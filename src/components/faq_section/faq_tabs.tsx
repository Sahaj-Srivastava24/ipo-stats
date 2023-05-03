import {Dropdown} from "@nextui-org/react";
import {useState} from "react";

export default function FAQTabs(props: {
  tabs: string[]
  tab: number;
  setTab: (idx: number) => void;
}) {
  const tabCls = (idx: number) =>
    `flex gap-10 items-center hover:text-textDark cursor-pointer ${idx === props.tab ? "text-textDark" : "text-textLight"
    }`;
  const handleClick = (idx: number) => props.setTab(idx);
  const [selected] = useState(0);

  return (
    <>
      <div className="mt-20 hidden flex-col gap-[30px] md:flex">
        {props.tabs.map((tab, idx) => (
          <div className={tabCls(idx)} onClick={() => handleClick(idx)} key={idx}>
            <div>{tab}</div>
          </div>
        ))}
      </div>
      <div className="border-CE6E8EC mb-20 border-b-[1px] pb-10 md:hidden">
        <Dropdown>
          <Dropdown.Button
            flat
            css={{
              tt: "capitalize",
              w: "100%",
              display: "flex",
              justifyContent: "space-between",
              color: "$textDark",
              p: "0.75rem",
              mb: "20px",
              border: "1px solid #E6E8EC",
            }}
          >
            {props.tabs[selected]}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={[props.tab]}
            onSelectionChange={(key) => {
              // eslint-disable-next-line
              props.setTab((key as unknown as any).anchorKey);
            }}
          >
            {props.tabs.map((tab, idx) => (
              <Dropdown.Item key={idx}>{tab}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
