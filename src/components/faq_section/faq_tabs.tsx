import {Dropdown} from "@nextui-org/react";
import {useState, useMemo, Key} from "react";

export default function FAQTabs(props: {tab: number, setTab: (idx: number) => void}) {
  const tabCls = (idx: number) => `flex gap-10 items-center hover:text-textDark cursor-pointer ${idx === props.tab ? 'text-textDark' : 'text-textLight'}`
  const handleClick = (idx: number) => props.setTab(idx)
  const [selected, setSelected] = useState(0);
  const vals = ['General', 'Support', 'Hosting', 'Product']

  return (
    <>
      <div className="flex-col gap-[30px] hidden md:flex mt-20">
        <div className={tabCls(0)} onClick={() => handleClick(0)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 12.5333V5.97739L14.3237 6.5716C14.6394 6.76103 15.0489 6.65866 15.2383 6.34294C15.4278 6.02722 15.3254 5.61771 15.0097 5.42828L11.6617 3.41951L9.10092 1.87665L9.10087 1.87663C8.91472 1.76447 8.77185 1.67839 8.65078 1.61367C8.62252 1.59786 8.59383 1.58316 8.56477 1.56957C8.464 1.52039 8.37666 1.48766 8.28692 1.46789C8.09789 1.42623 7.90207 1.42623 7.71304 1.46789C7.62307 1.48771 7.5355 1.52056 7.43441 1.56995C7.40587 1.58332 7.37769 1.59776 7.34994 1.61327C7.22871 1.67803 7.08565 1.76423 6.89911 1.87662L6.89908 1.87663L4.33444 3.42182L0.990335 5.42828C0.674615 5.61771 0.572238 6.02722 0.76167 6.34294C0.951103 6.65866 1.36061 6.76103 1.67633 6.5716L2.66665 5.97741V12.5333C2.66665 13.2801 2.66665 13.6534 2.81197 13.9386C2.9398 14.1895 3.14378 14.3935 3.39466 14.5213C3.67987 14.6667 4.05324 14.6667 4.79998 14.6667L5.99998 14.6666V10.6666C5.99998 9.56206 6.89541 8.66663 7.99998 8.66663C9.10455 8.66663 9.99998 9.56206 9.99998 10.6666V14.6666L11.2 14.6667C11.9467 14.6667 12.3201 14.6667 12.6053 14.5213C12.8562 14.3935 13.0602 14.1895 13.188 13.9386C13.3333 13.6534 13.3333 13.2801 13.3333 12.5333Z" fill="#777E91" />
          </svg>
          <div>
            General
          </div>
        </div>

        <div className={tabCls(1)} onClick={() => handleClick(1)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99998 12C9.31369 12 12 9.31375 12 6.00004C12 5.9009 11.9976 5.80232 11.9928 5.70436C11.9832 5.506 12.137 5.33337 12.3356 5.33337H13.3333C14.0697 5.33337 14.6666 5.93033 14.6666 6.66671V13.3334C14.6666 14.0698 14.0697 14.6667 13.3333 14.6667H6.66665C5.93027 14.6667 5.33331 14.0698 5.33331 13.3334V12.3356C5.33331 12.137 5.50594 11.9833 5.7043 11.9929C5.80226 11.9976 5.90084 12 5.99998 12Z" fill="#777E91" />
            <path d="M10.6666 6.00004C10.6666 8.57737 8.57731 10.6667 5.99998 10.6667C3.42265 10.6667 1.33331 8.57737 1.33331 6.00004C1.33331 3.42271 3.42265 1.33337 5.99998 1.33337C8.57731 1.33337 10.6666 3.42271 10.6666 6.00004Z" fill="#777E91" />
          </svg>
          <div>
            Support
          </div>
        </div>

        <div className={tabCls(2)} onClick={() => handleClick(2)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.76338 8.94297L9.00089 0.306432C9.41347 -0.264838 10.3148 0.111266 10.1989 0.806358L9.33333 5.99997H12.6962C13.24 5.99997 13.555 6.61607 13.2366 7.05696L6.99911 15.6935C6.58653 16.2648 5.68522 15.8887 5.80107 15.1936L6.66667 9.99997H3.30384C2.75999 9.99997 2.44497 9.38386 2.76338 8.94297Z" fill="#777E91" />
          </svg>
          <div>
            Hosting
          </div>
        </div>

        <div className={tabCls(3)} onClick={() => handleClick(3)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1111 11.2222L11.2222 14.1111C10.7313 14.6021 9.93539 14.6021 9.44447 14.1111C9.19901 13.8657 9.19901 13.4677 9.44447 13.2222L13.2222 9.44447C13.4677 9.19901 13.8657 9.19901 14.1111 9.44447C14.6021 9.93539 14.6021 10.7313 14.1111 11.2222Z" fill="#777E91" />
            <path d="M6.00906 7.17682C6.02289 7.0586 5.99328 6.93623 5.90912 6.85207L1.99702 2.93997C1.82759 2.77055 1.55081 2.85606 1.58469 3.09325L2.36041 8.52325C2.55145 9.86053 3.40454 11.011 4.62866 11.5823L7.24347 12.8025C7.4975 12.9211 7.79857 12.868 7.99679 12.6698L12.6698 7.99686C12.868 7.79863 12.921 7.49757 12.8025 7.24353L11.5822 4.62872C11.011 3.4046 9.86046 2.55151 8.52319 2.36047L3.09318 1.58475C2.85592 1.55086 2.7704 1.82773 2.93987 1.99721L6.85186 5.9092C6.93604 5.99337 7.05842 6.02298 7.17665 6.00914C7.22803 6.00313 7.28031 6.00003 7.3333 6.00003C8.06968 6.00003 8.66664 6.59699 8.66664 7.33337C8.66664 8.06975 8.06968 8.6667 7.3333 8.6667C6.59693 8.6667 5.99997 8.06975 5.99997 7.33337C5.99997 7.28041 6.00306 7.22817 6.00906 7.17682Z" fill="#777E91" />
          </svg>
          <div>
            Product
          </div>
        </div>
      </div>
      <div className="md:hidden pb-10 border-b-[1px] border-CE6E8EC mb-20">
        <Dropdown>
          <Dropdown.Button flat css={{tt: "capitalize", w: '100%', display: 'flex', justifyContent: 'space-between', color: 'black', p: '0.75rem', mb: '20px', border: '1px solid #E6E8EC'}}>
            {vals[selected]}
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Single selection actions"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={[selected]}
            onSelectionChange={(key) => {
              // eslint-disable-next-line 
              setSelected((key as unknown as any).anchorKey)
            }}
          >
            <Dropdown.Item key="0">General</Dropdown.Item>
            <Dropdown.Item key="1">Support</Dropdown.Item>
            <Dropdown.Item key="2">Hosting</Dropdown.Item>
            <Dropdown.Item key="3">Product</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}