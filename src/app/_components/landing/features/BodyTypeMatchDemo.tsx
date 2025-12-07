"use client";

import { useState } from "react";
import { User, Camera, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const USERS = [
    { id: 1, name: "User A", height: 175, weight: 70, size: "L", match: true, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
    { id: 2, name: "User B", height: 160, weight: 50, size: "S", match: false, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
    { id: 3, name: "User C", height: 182, weight: 85, size: "XL", match: false, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { id: 4, name: "User D", height: 174, weight: 72, size: "L", match: true, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
    { id: 5, name: "User E", height: 176, weight: 69, size: "L", match: true, image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80" },
    { id: 6, name: "User F", height: 158, weight: 48, size: "S", match: false, image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
    { id: 7, name: "User G", height: 173, weight: 71, size: "L", match: true, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
    { id: 8, name: "User H", height: 165, weight: 55, size: "M", match: false, image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80" },
];

interface BodyTypeMatchDemoProps {
    onInteractionStart?: () => void;
    onInteractionEnd?: () => void;
}

export function BodyTypeMatchDemo({ onInteractionStart, onInteractionEnd }: BodyTypeMatchDemoProps) {
    const [isFiltered, setIsFiltered] = useState(false);

    const displayedUsers = isFiltered ? USERS.filter((u) => u.match) : USERS;

    return (
        <div
            className="h-full w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 flex flex-col shadow-2xl"
            onMouseEnter={onInteractionStart}
            onMouseLeave={onInteractionEnd}
            onTouchStart={onInteractionStart}
            onTouchEnd={onInteractionEnd}
        >
            {/* Header & Toggle */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/10">
                        <Camera className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">Photo Reviews</h3>
                        <p className="text-[10px] sm:text-xs text-white/40">128 Verified Reviews</p>
                    </div>
                </div>

                <button
                    onClick={() => setIsFiltered(!isFiltered)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${isFiltered ? "bg-white" : "bg-white/10"
                        }`}
                >
                    <span
                        className={`${isFiltered ? "translate-x-7" : "translate-x-1"
                            } inline-block h-6 w-6 transform rounded-full bg-black transition-transform shadow-lg`}
                    />
                </button>
            </div>

            <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-[10px] sm:text-xs font-medium text-white/40 uppercase tracking-widest">
                    {isFiltered ? "Similar Body Type" : "All Reviews"}
                </span>
                {isFiltered && (
                    <span className="text-[10px] sm:text-xs font-bold text-white bg-white/10 px-2 py-1 rounded-full">
                        175cm · 70kg
                    </span>
                )}
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 gap-3 overflow-y-auto scrollbar-hide flex-1 content-start pr-1">
                <AnimatePresence mode="popLayout">
                    {displayedUsers.map((user) => (
                        <motion.div
                            key={user.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="aspect-[3/4] rounded-xl relative overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={user.image}
                                alt={`Review by ${user.name}`}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Info */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-8 opacity-100 transition-opacity duration-300">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-[10px] sm:text-xs font-bold text-white">{user.height}cm · {user.weight}kg</p>
                                        <p className="text-[9px] sm:text-[10px] text-white/60 font-medium">{user.size} size</p>
                                    </div>
                                    {user.match && isFiltered && (
                                        <div className="bg-white rounded-full p-1 shadow-lg shadow-white/20">
                                            <Check className="h-3 w-3 text-black" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
