import { Button, type CSS, Input, Modal, Radio, Text } from "@nextui-org/react";
import { DM_Sans, Poppins } from "next/font/google";
import { useState } from "react";

const dm_sans = DM_Sans({
  weight: "700",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Feedback() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [radioOne, setRadioOne] = useState("");
  const [radioTwo, setRadioTwo] = useState("");
  const [radioThree, setRadioThree] = useState("");
  const [feed, setFeed] = useState("");
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const handleSubmit = async () => {
    const feedback = { name, mail, radioOne, radioTwo, radioThree, feed };
    const postRes = await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ feedback }),
    });
    console.log(postRes.json());
  };

  const Label = ({ text }: { text: string }) => {
    return (
      <Text className={poppins.className} css={{ fontSize: "14px" }}>
        {text}
      </Text>
    );
  };

  const btnCss: CSS = {
    position: "fixed",
    bottom: 30,
    right: 30,
    py: "10px",
    h: "50px",
    color: "$accents7 !important",
    bgColor: "$accents0 !important",
    zIndex: 3,
  };

  return (
    <>
      <Button auto size="sm" onPress={handler} css={btnCss}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.0278 6.10986C22.816 6.7346 23.3549 7.55621 23.5432 8.42508C23.7536 9.395 23.5211 10.3794 22.89 11.1931L12.1265 25.0739C11.5824 25.7761 10.7643 26.1856 9.88005 26.1974L5.72734 26.2499H5.71565C5.26246 26.2499 4.86901 25.9349 4.76642 25.4886L3.82629 21.4016C3.62631 20.5314 3.82369 19.6297 4.36907 18.9275L5.78188 17.1045C6.113 16.6766 6.72591 16.6005 7.14923 16.9378C7.57255 17.2725 7.64657 17.892 7.31415 18.3199L5.90134 20.1429C5.72214 20.3739 5.65722 20.6692 5.72344 20.9553L6.48568 24.2706L9.85537 24.2286C10.1449 24.2247 10.4137 24.0908 10.5929 23.8598L21.3565 9.97905C21.6318 9.62468 21.7266 9.24406 21.6409 8.84507C21.5487 8.42376 21.2604 8.00246 20.8267 7.6599L19.0217 6.22798C18.3231 5.67674 17.3375 5.39325 16.6649 6.26342L15.243 8.09564L17.4998 9.92524C17.9193 10.2639 17.9868 10.8847 17.6505 11.3073C17.4583 11.5514 17.1752 11.6774 16.8895 11.6774C16.6766 11.6774 16.461 11.6065 16.2818 11.4608L14.0418 9.64568L10.3592 14.3955C10.0268 14.8234 9.41517 14.9009 8.99055 14.5622C8.56853 14.2276 8.49451 13.6081 8.82564 13.1802L15.1313 5.04806C16.3545 3.46784 18.4971 3.31297 20.2229 4.67926L22.0278 6.10986ZM16.9954 24.2813H25.2761C25.8137 24.2813 26.25 24.7223 26.25 25.2656C26.25 25.809 25.8137 26.25 25.2761 26.25H16.9954C16.4565 26.25 16.0215 25.809 16.0215 25.2656C16.0215 24.7223 16.4565 24.2813 16.9954 24.2813Z"
            fill="var(--nextui-colors-accents7)"
          />
        </svg>
      </Button>
      <Modal
        width="70%"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <div className="mx-[20px] mb-[50px] mt-40 flex flex-col md:mx-[70px]">
          <div className="mb-[60px]">
            <div className="flex flex-col gap-[10px]">
              <Text
                className="text-center text-[12px] font-[700] uppercase leading-[12px] md:text-[16px] md:leading-[16px]"
                css={{ color: "$textLight" }}
              >
                felt something wrong..?
              </Text>
              <Text
                className={`text-center text-[30px] font-[700] leading-[30px] md:text-[64px] md:leading-[64px] ${dm_sans.className}`}
                css={{ color: "$textDark" }}
              >
                Send us a feedback
              </Text>
              <div className="mt-10 text-center text-[16px] font-[400] leading-[24px] text-[#777E90]">
                Let us know how we can improve our services. Please feel free to
                give your opinion.
              </div>
            </div>
          </div>
          <div className="mx-[30px] flex flex-col justify-center gap-[25px] text-left">
            <div className="flex flex-col items-center justify-between gap-[20px] navLogo:flex-row md:grid md:grid-cols-2">
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
                label={
                  <Label text="Was the information on the website helpful in understanding the IPO process?" />
                }
              >
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
                label={
                  <Label text="Did you find the website's design appealing and user-friendly?" />
                }
              >
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
                label={
                  <Label text="Were you able to easily find the details of the current and upcoming IPOs on the website?" />
                }
              >
                <Radio value="yes" color="secondary">
                  Yes
                </Radio>
                <Radio value="no" color="secondary">
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
                css={{ w: "100%" }}
              />
            </div>
          </div>
          <div className="mt-40 flex justify-center">
            {/* eslint-disable-next-line  */}
            <Button
              css={{
                backgroundColor: "#3772FF !important",
                borderRadius: "80px",
              }}
              onPress={handleSubmit}
            >
              Send feedback
            </Button>
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
  );
}
