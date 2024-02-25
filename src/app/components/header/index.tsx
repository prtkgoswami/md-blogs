"use client";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import "./index.css";

const Header = (): ReactElement => {
  const defaultDarkTheme =
    "theme" in localStorage
      ? localStorage.getItem("theme") === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useState(defaultDarkTheme);

  const handleDarkToggle = (e: ChangeEvent) => {
    const toggle = e.target as HTMLInputElement;
    setIsDark(toggle.checked);
  };

  useEffect(() => {
    const currStoredTheme = localStorage.getItem("theme");
    if (
      (isDark && currStoredTheme !== "dark") ||
      (!isDark && currStoredTheme !== "light")
    ) {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="w-full flex flex-col pt-5 pb-10 px-5 bg-slate-800">
      <div className="flex justify-end px-5">
        <label className="switch">
          <input
            id="toggle"
            type="checkbox"
            name="darkMode"
            onChange={handleDarkToggle}
            checked={isDark}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="flex justify-center items-center text-5xl border-b-0 border-slate-800 py-5 font-extralight text-white">
        MarkDown Blogs
      </div>
    </div>
  );
};

export default Header;
