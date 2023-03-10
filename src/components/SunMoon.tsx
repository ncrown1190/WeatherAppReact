import { useState, useEffect } from "react";

export default function DarkmodeApp() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const lightMode = "Light Mode  ";
  const darkMode = "Dark Mode  ";

  return (
    <div>
      <div onClick={toggleTheme}>
        <label>
          {theme === "light" ? (
            <p>
              <i className="fa-regular fa-moon"></i>
            </p>
          ) : (
            <p>
              <i className="fa-regular fa-sun"></i>
            </p>
          )}
        </label>
      </div>
    </div>
  );
}
