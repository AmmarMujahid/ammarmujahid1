import { cva } from "class-variance-authority";

const typography = cva([], {
  variants: {
    intent: {
      primary: ["text-primary-dark", "dark:text-primary"],
      secondary: ["text-primary-darkest", "dark:text-white"],
      tertiary: [
        "text-secondary-darkGrayishBrown",
        "dark:text-secondary-darkGray",
        "text-start",
      ],
    },
    size: {
      extrasmall: ["text-[12px]"],
      normal: ["text-[16px]"],
      small: ["text-[22px]"],
      medium: ["text-[42px]"],
      large: ["text-[56px]", "italic"],
    },
    fontWeight: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      bold: ["font-bold"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      //   class: "uppercase",
      // **or** if you're a React.js user, `className` may feel more consistent:
      // className: "uppercase"
    },
  ],
  defaultVariants: {
    intent: "tertiary",
    size: "small",
    fontWeight: "medium",
  },
});

export function Typography({ intent, size, fontWeight, className, children }) {
  return (
    <button
      className={`${typography({ intent, size, fontWeight })} ${className}`}
    >
      {children}
    </button>
  );
}
