import IPOCardWrapper from "components/components/ipo_card_wrapper";
import { ListedIPOs as listedIPO } from "components/entities/listed-ipo";
import { LiveIPOs as liveIPO } from "components/entities/live-ipo";

export default function IPOList() {
  return (
    <div className="w-full bg-backgroundDark">
      <IPOCardWrapper
        heading={"Live IPOs"}
        subheading={"IPOs that are currently live for the subscription."}
        ipos={liveIPO}
      />
      <IPOCardWrapper
        heading={"Listed IPOs"}
        subheading={"IPOs that are currently listed on exchanges."}
        ipos={listedIPO}
      />
      {/* eslint-disable-next-line */}
    </div>
  );
}
