const { useState } = React;
const motion = (window.framerMotion && window.framerMotion.motion) || null;

// Button Component
const Button = ({children, variant="default", size="md", className="", ...props}) => {
  const base = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200",
    outline: "border border-neutral-300 dark:border-neutral-700 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900",
    ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900",
    secondary: "bg-neutral-200 text-neutral-900 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700",
  };
  const sizes = { sm:"h-8 px-3 text-sm rounded-xl", md:"h-10 px-4 rounded-2xl", lg:"h-12 px-5 text-base rounded-2xl"};
  return React.createElement("button", {className: `${base} ${variants[variant]||variants.default} ${sizes[size]||sizes.md} ${className}`, ...props}, children);
};

// Badge Component
const Badge = ({children, variant="default", className=""}) => {
  const variants = {
    default:"bg-neutral-900 text-white dark:bg-white dark:text-neutral-900",
    secondary:"bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100",
    outline:"border border-neutral-300 dark:border-neutral-700",
  };
  return React.createElement("span", {className:`inline-flex items-center px-2 py-1 rounded-full text-xs ${variants[variant]||variants.default} ${className}`}, children);
};

// Card Components
const Card = ({children, className=""}) => React.createElement("div", {className:`card bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm ${className}`}, children);
const CardHeader = ({children, className=""}) => React.createElement("div", {className:`p-4 border-b border-neutral-200 dark:border-neutral-800 ${className}`}, children);
const CardTitle = ({children, className=""}) => React.createElement("h3", {className:`font-semibold ${className}`}, children);
const CardContent = ({children, className=""}) => React.createElement("div", {className:`p-4 ${className}`}, children);

// NAV Items
const NAV = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research & Experience" },
  { id: "talks", label: "Talks" },
  { id: "activities", label: "Activities" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

// Section Component with safe motion fallback
const Section = ({children}) => {
  if (motion && motion.div) {
    return React.createElement(
      motion.div,
      { initial:{opacity:0,y:8}, animate:{opacity:1,y:0}, transition:{duration:0.35}, className:"mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8" },
      children
    );
  }
  return React.createElement(
    "div",
    { className:"mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8" },
    children
  );
};

// ⚠️ Add the rest of your Portfolio component implementation here, unchanged.
// Only the Section definition was modified to safely handle motion fallback.

