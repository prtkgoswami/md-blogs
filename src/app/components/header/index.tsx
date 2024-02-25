"use client";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import "./index.css";

const Header = (): ReactElement => {
  const [isDark, setIsDark] = useState(false);

  const handleDarkToggle = (e: ChangeEvent) => {
    const toggle = e.target as HTMLInputElement;
    const isDarkSelected = toggle.checked;

    const currStoredTheme =
      "theme" in localStorage ? localStorage.getItem("theme") : "light";
    if (
      (isDarkSelected && currStoredTheme !== "dark") ||
      (!isDarkSelected && currStoredTheme !== "light")
    ) {
      localStorage.setItem("theme", isDarkSelected ? "dark" : "light");
    }

    setIsDark(toggle.checked);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    setIsDark(
      "theme" in localStorage
        ? localStorage.getItem("theme") === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }, []);

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
