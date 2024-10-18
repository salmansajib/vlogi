import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkSwitch");
    const darkThemeSelected = savedTheme === "dark";

    if (darkThemeSelected) {
      document.body.setAttribute("data-theme", "dark");
      setIsDark(true);
    } else {
      document.body.removeAttribute("data-theme");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => {
      const newTheme = !prevIsDark;

      if (newTheme) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }

      return newTheme;
    });
  };

  return { isDark, toggleTheme };
}

export default useDarkMode;
