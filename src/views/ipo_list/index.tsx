import IPOCardWrapper from "components/components/ipo_card_wrapper"

export default function IPOList() {
  return (
    <div className="bg-backgroundDark w-full">
      <IPOCardWrapper heading={'Live IPOs'} />
      <IPOCardWrapper heading={'Listed IPOs'} />
    </div>
  )
}