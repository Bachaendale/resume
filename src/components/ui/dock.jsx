import * as React from "react"
import { cn } from "@/lib/utils"

export default function Dock({ items, className }) {
    const [active, setActive] = React.useState(items[0]?.label || null)

    return (
        <nav className={cn("flex items-center justify-center", className)} aria-label="Primary navigation">
            <div className="no-scrollbar flex max-w-[calc(100vw-1rem)] items-center gap-1.5 overflow-x-auto rounded-full border border-white/15 bg-[#090f1c]/80 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl supports-[backdrop-filter]:bg-[#090f1c]/65 sm:max-w-none sm:gap-3">
                {items.map((item) => {
                    const isActive = active === item.label

                    return (
                        <button
                            key={item.label}
                            aria-label={item.label}
                            onClick={() => {
                                setActive(item.label)
                                item.onClick?.()
                            }}
                            className={cn(
                                "group flex shrink-0 items-center gap-2.5 rounded-full px-3.5 py-2.5 text-xs font-semibold transition-all duration-300 ease-out sm:gap-3 sm:px-5 sm:py-3 sm:text-sm",
                                isActive
                                    ? "bg-white/12 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                                    : "text-zinc-400 hover:bg-white/8 hover:text-white"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "w-4 h-4 transition-colors",
                                    isActive ? "text-cyan-300" : "text-zinc-400 group-hover:text-cyan-200"
                                )}
                            />
                            <span className="hidden tracking-wide sm:inline">{item.label}</span>
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
