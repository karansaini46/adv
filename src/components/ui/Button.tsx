"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "sage" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-center";

  const variants = {
    primary:
      "bg-[#1B2430] text-[#FAF7F2] hover:bg-[#273444] active:bg-[#111720] focus:ring-[#1B2430] shadow-sm",
    secondary:
      "bg-[#EFE9DE] text-[#1B2430] hover:bg-[#E2D7C5] active:bg-[#D7C7B2] focus:ring-[#E2D7C5]",
    sage:
      "bg-[#536455] text-[#FAF7F2] hover:bg-[#435245] active:bg-[#354237] focus:ring-[#536455] shadow-sm",
    outline:
      "border border-[#E2D7C5] bg-transparent text-[#1B2430] hover:bg-[#F3EEE6] active:bg-[#EFE9DE] focus:ring-[#E2D7C5]",
    ghost:
      "bg-transparent text-[#1B2430] hover:bg-[#F3EEE6] active:bg-[#EFE9DE] focus:ring-[#E2D7C5]",
  };

  const sizes = {
    sm: "px-3.5 py-2 text-xs sm:text-sm gap-1.5 min-h-[38px]",
    md: "px-4 py-2.5 text-sm sm:text-base gap-2 min-h-[44px]",
    lg: "px-6 py-3.5 text-base font-semibold gap-2.5 min-h-[50px]",
  };

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </motion.button>
  );
}
