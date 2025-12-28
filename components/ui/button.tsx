import * as React from "react"
// Removed unused imports
import { cn } from "@/lib/utils"

// Since I didn't install Radix Slot, I will implement a basic version or install it. 
// Actually, for "Showcase" speed, I'll skip Radix Slot and just use standard button unless needed for polymorphism.
// But standard "shadcn-like" pattern uses cva. I installed clsx and tailwind-merge (as 'cn'). I don't have cva yet.
// I forgot to install cva and class-variance-authority. I will install them or just write simple classes.
// I will just write simple classes to avoid more installs for now, or just install them quickly.
// "cva" is very standard. I'll just use standard template without cva to save time/complexity if I didn't install it.
// Wait, I planned to use "raw Tailwind". I'll make a simple flexible component.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {

        // Base styles
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        // Variants
        const variants = {
            primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5",
            secondary: "bg-[var(--color-secondary)] text-white hover:bg-amber-600 shadow-md hover:shadow-lg transition-all",
            outline: "border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900",
            ghost: "hover:bg-slate-100 hover:text-slate-900",
            link: "text-[var(--color-primary)] underline-offset-4 hover:underline",
        };

        // Sizes
        const sizes = {
            sm: "h-9 rounded-md px-3",
            md: "h-11 px-8 py-2",
            lg: "h-12 rounded-md px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}
                {...props}
            />
        );
    }
)
Button.displayName = "Button"

export { Button }
