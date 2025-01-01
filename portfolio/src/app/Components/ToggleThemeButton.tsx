import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from "react-icons/fi";
import React from 'react'

export default function ToggleThemeButton() {
  const {theme, setTheme, resolvedTheme} = useTheme()
  return (
<button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 bg-background  text-foreground"
    >
    {resolvedTheme === "light" ? <FiMoon /> : <FiSun />}
    </button>
  )
}
