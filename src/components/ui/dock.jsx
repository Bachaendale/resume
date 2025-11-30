"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export default function Dock({ items, className }) {
    const [active, setActive] = React.useState(items[0]?.label || null)

    return (
        <div className={cn("flex items-center justify-center", className)}>
            <div className="flex items-center gap-6 p-2 rounded-full border border-white/10 bg-[#0a0a0f]/90 backdrop-blur-md shadow-xl ring-1 ring-white/5">
                {items.map((item) => {
                    const isActive = active === item.label

                    return (
                        <button
                            key={item.label}
                            onClick={() => {
                                setActive(item.label)
                                item.onClick?.()
                            }}
                            className={cn(
                                "group flex items-center gap-3 px-8 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ease-out",
                                isActive
                                    ? "bg-white/10 text-white shadow-sm"
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "w-4 h-4 transition-colors",
                                    isActive ? "text-indigo-400" : "text-zinc-400 group-hover:text-indigo-300"
                                )}
                            />
                            <span>{item.label}</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
