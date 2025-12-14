import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "invert";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

type ButtonAsButton = BaseButtonProps &
  ComponentPropsWithoutRef<"button"> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<"a">, "disabled"> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      children,
      disabled = false,
      as,
      href,
      ...props
    },
    ref
  ) => {
    // Determina automaticamente se é link ou botão
    const isLink = as === "a" || !!href;

    // Classes base para todos os botões
    const baseClasses =
      "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed";

    // Classes por variante
    const variantClasses: Record<ButtonVariant, string> = {
      primary:
        "bg-taupe text-white border border-gold/20 shadow-soft hover:bg-taupe/90 hover:shadow-premium active:translate-y-[1px] focus-visible:ring-taupe",
      secondary:
        "bg-transparent text-[#62473c] border border-taupe/30 hover:bg-offwhite hover:shadow-soft active:translate-y-[1px] focus-visible:ring-taupe/50 transition-all duration-300",
      ghost:
        "bg-transparent text-[#62473c] hover:bg-offwhite/50 hover:underline focus-visible:ring-taupe/50",
      invert:
        "bg-offwhite text-[#62473c] border border-gold/20 hover:bg-cream shadow-soft hover:shadow-premium focus-visible:ring-offwhite",
    };

    // Classes de tamanho
    const sizeClasses: Record<ButtonSize, string> = {
      sm: "px-5 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-sm gap-2",
      lg: "px-10 py-4 text-base gap-2.5",
    };

    // Classes para estado disabled (sem opacity que apague texto)
    const disabledClasses = disabled
      ? "cursor-not-allowed bg-[#e5e5e5] text-[#62473c]/60 border-[#d0d0d0] hover:bg-[#e5e5e5] hover:shadow-none active:translate-y-0"
      : "";

    const combinedClasses = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      disabledClasses,
      className
    );

    if (isLink) {
      const linkProps = props as Omit<ComponentPropsWithoutRef<"a">, "disabled">;
      return (
        <a
          ref={ref as any}
          className={combinedClasses}
          href={disabled ? undefined : href}
          aria-disabled={disabled ? true : undefined}
          onClick={
            disabled
              ? (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()
              : linkProps.onClick
          }
          {...linkProps}
        >
          {children}
        </a>
      );
    }

    const buttonProps = props as ComponentPropsWithoutRef<"button">;
    return (
      <button
        ref={ref as any}
        type={buttonProps.type || "button"}
        disabled={disabled}
        className={combinedClasses}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
