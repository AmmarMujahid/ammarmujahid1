import { cva } from "class-variance-authority";

const button = cva(["font-medium", "py-2"], {
  variants: {
    intent: {
      primary: [
        "bg-primary-dark",
        "dark:bg-primary",
        "hover:bg-[#344955]",
        "dark:hover:bg-[#45C68B]",
        "text-[#FAFAFA]",
        "dark:text-primary-darkest",
        "border-transparent",
      ],
      // **or**
      // primary: "bg-blue-500 text-white border-transparent hover:bg-blue-600",
      secondary: [
        "border-[1px]",
        "text-primary-dark",
        "dark:text-primary-whisperGray",
        "border-primary-dark",
        "dark:border-white",
        "dark:hover:text-black",
        "hover:text-white",
        "hover:bg-primary-dark",
        "hover:bg-primary",
        "dark:hover:border-primary",
        "dark:hover:bg-primary",
      ],
      tertiary: [
        "text-black",
        "border-[1px]",
        "border-black",
        "hover:text-white",
        "hover:bg-primary-dark",
        "hover:border-primary-dark",
      ],
    },
    size: {
      small: ["text-[18px]", "px-4"],
      medium: ["text-[22px]", "px-4"],
      large: ["text-[22px]", "px-8"],
    },
    shape: {
      rounded: ["rounded-xl"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      // class: "uppercase",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export function Button({ intent, size, shape, icon, children, className }) {
  return (
    <button className={`${button({ intent, size, shape })} ${className}`}>
      {icon}
      {children}
    </button>
  );
}
