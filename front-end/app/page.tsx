"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Header } from "./Components/Header";

export default function Home() {
  const { theme } = useTheme();
  const [bgcolor, setbgColor] = useState("");

  useEffect(() => {
    setbgColor(theme === "dark" ? "bg-black" : "bg-slate-100");
  }, [theme]);

  return (
    <div className={`poppins ${bgcolor}  p-2 min-h-screen`}>
      <Header />
    </div>
  );
}
