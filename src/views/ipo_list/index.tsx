import IPOCardWrapper from "components/components/ipo_card_wrapper"
import {ListedIPOs as listedIPO} from "components/entities/listed-ipo"
import {LiveIPOs as liveIPO} from "components/entities/live-ipo"


export default function IPOList() {
  return (
    <div className="bg-backgroundDark w-full">
      <IPOCardWrapper heading={'Listed IPOs'} subheading={'IPOs that are currently listed in BSE and NSE'} ipos={listedIPO} />
      {/* eslint-disable-next-line */}
      <IPOCardWrapper heading={'Live IPOs'} subheading={'IPOs that are currently live in BSE and NSE'} ipos={liveIPO} />
    </div>
  )
}