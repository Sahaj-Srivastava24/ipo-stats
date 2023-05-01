
import IPOCardWrapper from "components/components/ipo_card_wrapper"



export default function IPOList() {
  return (
    <div className="bg-[#F4F5F6] w-full">
      <IPOCardWrapper heading={'Live IPOs'} />
      <IPOCardWrapper heading={'Listed IPOs'} />
    </div>
  )
}