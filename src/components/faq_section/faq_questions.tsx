import {Collapse, Text} from "@nextui-org/react"

export default function FAQQuestions() {

  const Title = ({text}: {text: string}) => {
    return (
      <div className="text-14 md:text-18 mr-10">
        {text}
      </div>
    )
  }

  return (
    <div>
      <Collapse.Group>
        <Collapse title={<Title text='What is Issue size?' />}>
          <Text size={16} className="text-[#777E90] text-12 md:text-16">
            The issue size is the the total value of the IPO. It is calculated by multiplying the number of shares offered by the company by the issue price per share.
          </Text>
        </Collapse>
        <Collapse title={<Title text='Difference between Book Building Issue and Fixed Price Issue?' />}>
          <Text className="text-[#777E90] text-12 md:text-16">
            In a Book Building Issue, securities are offered at prices above or equal to the floor prices, whereas in a fixed price issue, securities are offered at a fixed price.
            In case of Book Building, the demand can be known everyday as the book is built. But in case of the public issue the demand is known at the close of the issue.
          </Text>
        </Collapse>
        <Collapse title={<Title text='Difference between IPO Cut-Off Price and Floor Price?' />}>
          <Text size={16} className="text-[#777E90] text-12 md:text-16">
            Cut off price is the offer price decided by the company and merchant bankers after the IPO subscription has closed.
            Floor price is the lowest price at which an investor can place a bid for the shares of the company.
          </Text>
        </Collapse>
        <Collapse title={<Title text='What is minimum number of days for which bid should remain open in book building?' />}>
          <Text size={16} className="text-[#777E90] text-12 md:text-16">
            As per the market regulator’s norms, the book should remain open for a minimum of 3 working days. Here, the concept of 3 working days excludes Sundays, Saturdays and other trading holidays.
            The issue can remain open for more than that period if the company and the investment bankers consider it necessary.
          </Text>
        </Collapse>
        <Collapse title={<Title text='What is the main difference between offer of shares through book building and offer of shares through normal public issue?' />}>
          <Text size={16} className="text-[#777E90] text-12 md:text-16">
            The price at which shares will be allotted is not known in the case of an offer of shares through book building. While in the case of an offer of shares through a normal public issue, the price is known in advance.
          </Text>
        </Collapse>
      </Collapse.Group>
    </div>
  )
}


