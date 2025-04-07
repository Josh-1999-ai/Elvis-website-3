
import React from "react";

export function Button({ children, variant = "default", asChild = false, ...props }) {
  const className = variant === "outline"
    ? "px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
    : "px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition";

  const Comp = asChild ? "a" : "button";
  return <Comp className={className} {...props}>{children}</Comp>;
}
