import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "sage" | "sandstone" | "navy" | "outline";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "sage",
  className = "",
  icon,
  ...props
}: BadgeProps) {
  const variantStyles = {
    sage: "bg-[#E4EBE5] text-[#536455] border border-[#C8D6CA]",
    sandstone: "bg-[#EFE9DE] text-[#1B2430] border border-[#E2D7C5]",
    navy: "bg-[#1B2430] text-[#FAF7F2]",
    outline: "bg-transparent text-[#4B5A6C] border border-[#E2D7C5]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full tracking-wide ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
