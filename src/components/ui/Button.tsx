import React from "react";

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const Button = ({
  label = "",
  onClick = () => {},
  disabled = false,
  className = "",
  variant = "primary",
  icon = null,
  labelClassName = "",
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "primary" | "delete" | "outline";
  icon?: React.ReactNode;
  labelClassName?: string;
}) => {
  const variantClass =
    variant === "delete"
      ? "bg-red-500 hover:bg-red-600"
      : variant === "outline"
      ? "border !border-gray-300 !text-gray-700 !hover:bg-gray-100"
      : "bg-green-600 hover:bg-green-700";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-4 py-2 text-white rounded h disabled:opacity-50 flex items-center justify-center",
        className,
        variantClass
      )}
    >
      {icon && <span className="mr-1">{icon}</span>}
      <span className={labelClassName}>{label}</span>
    </button>
  );
};

export default Button;
