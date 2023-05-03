import {Collapse, Text} from "@nextui-org/react";
import type {TFAQ} from "components/entities/faqs";


export default function FAQQuestions({ques}: {ques: TFAQ[]}) {
  const Title = ({text}: {text: string}) => {
    return <div className="mr-10 text-14 md:text-18">{text}</div>;
  };

  return (
    <div>
      <Collapse.Group>
        {ques.map((que, idx) => (
          <Collapse title={<Title text={que.question} />} key={idx}>
            <Text size={16} className="text-12 text-[#777E90] md:text-16">
              {que.answer}
            </Text>
          </Collapse>
        ))}
      </Collapse.Group>
    </div>
  );
}
