import {Button, Input, Radio, Text} from "@nextui-org/react";
import {DM_Sans} from "next/font/google";

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

export default function ContactUs() {

  return (
    <div className="mt-40 flex flex-col items-center">
      <div className="mb-[60px] flex justify-center">
        <Text className={`text-center md:text-left text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>Contact Us</Text>
      </div>
      <div className="flex flex-col justify-center gap-[25px] md:min-w-[80%] mx-[30px]">
        <div className="flex gap-[20px] items-center justify-between md:grid md:grid-cols-2">
          <Input
            clearable
            underlined
            label="Name"
            placeholder="Enter your name"
          />
          <Input
            clearable
            underlined
            label="Mail"
            placeholder="Enter your mail"
          />
        </div>
        <div className="flex gap-[20px]">
          <Input
            clearable
            underlined
            label="How was your experience navigating the IPO website?"
            placeholder="Tell us about your experience"
            css={{w: '100%'}}
          />
        </div>
        <div className="flex gap-[20px]">
          <Radio.Group orientation="horizontal" label="Was the information on the website helpful in understanding the IPO process?" >
            <Radio value="primary" color="primary">
              Yes
            </Radio>
            <Radio value="secondary" color="secondary">
              No
            </Radio>
          </Radio.Group>
        </div>
        <div className="flex gap-[20px]">
          <Radio.Group orientation="horizontal" label="Did you find the website's design appealing and user-friendly?">
            <Radio value="primary" color="primary">
              Yes
            </Radio>
            <Radio value="secondary" color="secondary">
              No
            </Radio>
          </Radio.Group>
        </div>
        <div className="flex gap-[20px]">
          <Radio.Group orientation="horizontal" label="Were you able to easily find the details of the current and upcoming IPOs on the website?" >
            <Radio value="primary" color="primary" >
              Yes
            </Radio>
            <Radio value="secondary" color="secondary" >
              No
            </Radio>
          </Radio.Group>
        </div>
        <div className="flex gap-[20px]">
          <Input
            clearable
            underlined
            placeholder="We'd love to hear from you"
            label="Could you please share your overall feedback about the IPO website? We would love to hear your thoughts and suggestions for improvement."
            css={{w: '100%'}}
          />
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <Button css={{backgroundColor: '#3772FF !important', borderRadius: '80px'}}>See more</Button>
      </div>
    </div>
  )
}