import Logo from "components/components/logo";
import ThemeSwitch from "components/components/theme_switch";
import ROUTES from "components/entities/routes";
import Link from "next/link";


export default function Header() {

  return (
    <div className="flex justify-between items-center px-[30px] pt-[20px] md:px-[80px] md:py-[45px] lg:px-[80px] lg:py-[45px]">
      <Link href={ROUTES.HOME}>
        <Logo />
      </Link>
      <ThemeSwitch />
    </div>
  )
}