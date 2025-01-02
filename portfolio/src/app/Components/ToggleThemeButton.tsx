import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import React from "react";

export default function ToggleThemeButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-background p-2 text-foreground"
    >
      {resolvedTheme === "light" ? <FiMoon size={24} className="text-blue-950"/> : <FiSun size={24} className="text-yellow-500" />}
    </button>
  );
}
