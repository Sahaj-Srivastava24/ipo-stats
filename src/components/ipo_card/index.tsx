import {Container} from "@nextui-org/react";

export default function IPOCard() {

  return (
    <Container
      css={{bg: '$ipoCardBackground'}}
      className="rounded-20 pt-[80px] pb-50 hover:transition-[box-shadow] hover:duration-[200ms] hover:shadow-[0px_64px_64px_-48px_rgba(15,15,15,0.1)]">
      <div className="flex flex-cols justify-center items-center mb-30">
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40.5" cy="40" r="40" fill="#EF466F" />
          <path fillRule="evenodd" clipRule="evenodd" d="M40.8235 34.6667L39.2605 32.0617C38.8639 31.4007 38.2648 31.0227 37.6658 30.9464C36.512 30.7993 35.0736 30.6667 33.6667 30.6667C32.689 30.6667 31.6915 30.7308 30.7795 30.8206C29.9401 30.9032 29.3204 31.5268 29.2535 32.399C29.1196 34.1448 29 36.6435 29 40C29 42.3634 29.0861 44.4688 29.1954 46.1888C29.2975 47.7944 30.515 49.0063 32.1331 49.0996C34.3286 49.2262 37.2843 49.3333 41 49.3333C44.7157 49.3333 47.6714 49.2262 49.8669 49.0996C51.485 49.0063 52.7025 47.7944 52.8046 46.1888C52.9139 44.4687 53 42.3634 53 40C53 38.7118 52.9253 37.489 52.8265 36.4372C52.745 35.5692 52.0975 34.9217 51.2294 34.8401C50.1777 34.7413 48.9548 34.6667 47.6667 34.6667H40.8235ZM42.3333 32L41.5472 30.6898C40.7741 29.4013 39.4936 28.4911 38.003 28.3011C36.785 28.1459 35.2258 28 33.6667 28C32.5786 28 31.4905 28.071 30.5183 28.1667C28.3756 28.3777 26.7593 30.0483 26.5946 32.195C26.4551 34.0134 26.3333 36.5804 26.3333 40C26.3333 42.4274 26.4217 44.5896 26.5341 46.358C26.7221 49.315 29.0215 51.5913 31.9796 51.7619C34.2262 51.8914 37.233 52 41 52C44.767 52 47.7738 51.8914 50.0204 51.7619C52.9785 51.5913 55.2779 49.315 55.4659 46.358C55.5783 44.5896 55.6667 42.4274 55.6667 40C55.6667 38.6118 55.5864 37.3039 55.4815 36.1878C55.2801 34.0442 53.6225 32.3865 51.4789 32.1852C50.3627 32.0803 49.0548 32 47.6667 32H42.3333Z" fill="#FCFCFD" />
        </svg>
      </div>
      <div className="font-medium text-center leading-24 mb-20 px-20">
        Core Value 02
      </div>
      <div className="text-14 leading-24 text-[#777E90] text-center px-20">
        We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.
        We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.
        We realize ideas from simple to complex, everything becomes easy to use and reach the most potential customers.
      </div>
    </Container>
  )
}