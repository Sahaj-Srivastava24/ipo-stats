import {Button, Input, Modal, Radio, Text} from "@nextui-org/react";
import {DM_Sans, Poppins} from "next/font/google";
import {useState} from "react";

const dm_sans = DM_Sans({
  weight: '700',
  subsets: ['latin']
})

const poppins = Poppins({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})


export default function Feedback() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [radioOne, setRadioOne] = useState('')
  const [radioTwo, setRadioTwo] = useState('')
  const [radioThree, setRadioThree] = useState('')
  const [feed, setFeed] = useState('')


  const handleSubmit = async () => {
    const feedback = {name, mail, radioOne, radioTwo, radioThree, feed}
    const postRes = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({feedback})
    })

    console.log(postRes.json())
  }

  const Label = ({text}: {text: string}) => {
    return (
      <Text className={poppins.className} css={{fontSize: '14px', }}>
        {text}
      </Text>
    )
  }

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      <Button auto size='sm' onPress={handler} css={{position: 'sticky', bottom: '30px', m: '30px', h: '30px', float: 'right', color: '$primary !important', bgColor: '$primaryLight !important'}}>
        Write a feedback
      </Button>
      <Modal
        width="70%"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <div className="mt-40 flex flex-col mx-[20px] md:mx-[70px] mb-[50px]">
          <div className="mb-[60px]">
            <div className="flex flex-col gap-[10px]">
              <Text className="text-center uppercase font-[700] text-[12px] md:text-[16px] leading-[12px] md:leading-[16px]" css={{color: '$textLight'}}>
                felt something wrong..?
              </Text>
              <Text className={`text-center text-[30px] md:text-[64px] leading-[30px] md:leading-[64px] font-[700] ${dm_sans.className}`} css={{color: '$textDark'}}>
                Send us a feedback
              </Text>
              <div className="text-center text-[#777E90] text-[16px] leading-[24px] font-[400] mt-10">
                Let us know how we can improve our services. Please feel free to give your opinion.
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[25px] mx-[30px] text-left">
            <div className="flex flex-col navLogo:flex-row gap-[20px] items-center justify-between md:grid md:grid-cols-2">
              <Input
                clearable
                underlined
                label="Name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                clearable
                underlined
                label="Mail"
                value={mail}
                placeholder="Enter your mail"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div className="flex gap-[20px]">
              <Radio.Group
                size="sm"
                value={radioOne}
                orientation="horizontal"
                onChange={(e) => setRadioOne(e)}
                label={<Label text='Was the information on the website helpful in understanding the IPO process?' />} >
                <Radio value="yes" color="secondary">
                  Yes
                </Radio>
                <Radio value="no" color="secondary">
                  No
                </Radio>
              </Radio.Group>
            </div>
            <div className="flex gap-[20px]">
              <Radio.Group
                size="sm"
                value={radioTwo}
                orientation="horizontal"
                onChange={(e) => setRadioTwo(e)}
                label={<Label text="Did you find the website's design appealing and user-friendly?" />}>
                <Radio value="yes" color="secondary">
                  Yes
                </Radio>
                <Radio value="no" color="secondary">
                  No
                </Radio>
              </Radio.Group>
            </div>
            <div className="flex gap-[20px]">
              <Radio.Group
                size="sm"
                value={radioThree}
                orientation="horizontal"
                onChange={(e) => setRadioThree(e)}
                label={<Label text="Were you able to easily find the details of the current and upcoming IPOs on the website?" />}>
                <Radio value="yes" color="secondary">
                  Yes
                </Radio>
                <Radio value="no" color="secondary" >
                  No
                </Radio>
              </Radio.Group>
            </div>
            <div className="flex gap-[20px]">
              <Input
                clearable
                underlined
                value={feed}
                onChange={(e) => setFeed(e.target.value)}
                placeholder="Tell us about your experience"
                label="Could you please share your overall feedback about the IPO website?"
                css={{w: '100%'}}
              />
            </div>
          </div>
          <div className="flex justify-center mt-40">
            {/* eslint-disable-next-line  */}
            <Button css={{backgroundColor: '#3772FF !important', borderRadius: '80px'}} onPress={handleSubmit}>Send feedback</Button>
          </div>
        </div>
        {/* <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to
          <Text b size={18}>
            NextUI
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<Mail fill="currentColor" />}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          contentLeft={<Password fill="currentColor" />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={closeHandler}>
          Close
        </Button>
        <Button auto onPress={closeHandler}>
          Sign in
        </Button>
      </Modal.Footer> */}
      </Modal>
    </>
  )
}