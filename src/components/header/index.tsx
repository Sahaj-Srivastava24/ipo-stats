import Logo from "components/components/logo";
import ThemeSwitch from "components/components/theme_switch";


export default function Header() {

  return (
    <div className="flex justify-between items-center px-[30px] py-[40px] md:px-[80px] md:py-[45px] lg:px-[80px] lg:py-[45px]">
      <Logo />
      <ThemeSwitch />
    </div>
  )
}