import {useTheme as useNextTheme} from 'next-themes'
import {Switch, useTheme} from '@nextui-org/react'
import SunIcon from './SunIcon';
import MoonIcon from './MoonIcon';


export default function ThemeSwitch() {
  const {setTheme} = useNextTheme();
  const {isDark} = useTheme();

  return (
    <Switch
      color='secondary'
      checked={isDark}
      iconOff={<SunIcon filled />}
      iconOn={<MoonIcon filled />}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  )
}