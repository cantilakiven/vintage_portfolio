import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      // If the user has previously saved a choice, respect it
      if (stored) return stored === "dark";
      
      // If NO preference is saved, default to LIGHT (false)
      // We ignore system preferences here to force Light by default
      return false; 
    }
    return false; // Default for Server Side Rendering
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="text-sm px-4 py-2 border border-border rounded-md hover:bg-secondary transition-all font-mono shadow-sm"
      aria-label="Toggle theme"
    >
      {/* Show the icon for the mode the user can SWITCH to */}
      {isDark ? (
        <span className="flex items-center gap-2">
          <span className="text-yellow-500">☀</span> 
          {/* <small className="uppercase tracking-widest text-[10px] font-bold">Light Mode</small> */}
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <span className="text-slate-700">☾</span> 
          {/* <small className="uppercase tracking-widest text-[10px] font-bold">Dark Mode</small> */}
        </span>
      )}
    </button>
  );
};