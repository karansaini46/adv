import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "sandstone" | "sage" | "navy";
  hoverable?: boolean;
}

export function Card({
  children,
  className = "",
  variant = "default",
  hoverable = false,
  ...props
}: CardProps) {
  const variantStyles = {
    default: "bg-[#FAF7F2] border border-[#E2D7C5] text-[#1B2430]",
    sandstone: "bg-[#EFE9DE] border border-[#E2D7C5] text-[#1B2430]",
    sage: "bg-[#E4EBE5] border border-[#C5D5C8] text-[#1B2430]",
    navy: "bg-[#1B2430] border border-[#273444] text-[#FAF7F2]",
  };

  return (
    <div
      className={`rounded-[16px] p-4 sm:p-6 transition-all duration-150 ${
        variantStyles[variant]
      } ${
        hoverable
          ? "hover:border-[#D7C7B2] hover:shadow-xs"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
