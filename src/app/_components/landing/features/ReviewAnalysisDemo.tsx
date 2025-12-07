"use client";

import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, Scissors, Sparkles } from "lucide-react";

export function ReviewAnalysisDemo() {
    const result = {
        satisfactionScore: 92,
        pros: ["소재가 부드럽고 고급스러워요", "핏이 딱 떨어져서 예쁩니다", "배송이 정말 빨랐어요"],
        cons: ["생각보다 기장이 조금 짧아요", "가격대가 조금 있는 편이에요"],
        fitStyle: [
            "정사이즈보다 약간 여유있게 나왔습니다.",
            "두께감은 보통이며, 신축성이 좋습니다.",
            "촉감은 부드럽고, 비침은 없습니다."
        ],
        specs: {
            "사이즈": "정사이즈",
            "두께감": "보통",
            "신축성": "좋음",
            "촉감": "부드러움"
        }
    };

    return (
        <div className="h-full w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 lg:p-8 flex flex-col overflow-y-auto scrollbar-hide shadow-2xl">
            <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
                <div className="p-2 rounded-lg bg-white/10">
                    <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">AI Review Summary</h3>
                    <p className="text-xs text-white/40">Based on 3,421 reviews</p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Satisfaction Score */}
                <div className="flex flex-col items-center relative py-4">
                    <div className="relative w-48 h-28 overflow-hidden mb-2">
                        <svg viewBox="0 0 200 100" className="w-full h-full">
                            {/* Background Arc */}
                            <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#333" strokeWidth="8" strokeLinecap="round" />
                            {/* Progress Arc */}
                            <motion.path
                                initial={{ strokeDashoffset: 251.2 }}
                                whileInView={{ strokeDashoffset: 251.2 - (251.2 * result.satisfactionScore) / 100 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                fill="none"
                                stroke="url(#gradient)"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeDasharray="251.2"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fff" />
                                    <stop offset="100%" stopColor="#999" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                            <div className="text-3xl sm:text-5xl font-bold text-white tracking-tighter">{result.satisfactionScore}</div>
                        </div>
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium text-white/40 uppercase tracking-widest">Satisfaction Score</div>
                </div>

                {/* Pros & Cons Grid */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Pros */}
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                        <h4 className="text-[10px] sm:text-xs font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                            <ThumbsUp className="h-3 w-3" /> Pros
                        </h4>
                        <ul className="space-y-3">
                            {result.pros.map((pro, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-3 text-xs sm:text-sm text-gray-300"
                                >
                                    <span className="w-1 h-1 rounded-full bg-white mt-2 shrink-0" />
                                    <span className="leading-relaxed">{pro}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Cons */}
                    <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                        <h4 className="text-[10px] sm:text-xs font-bold text-white/60 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <ThumbsDown className="h-3 w-3" /> Cons
                        </h4>
                        <ul className="space-y-3">
                            {result.cons.map((con, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-start gap-3 text-xs sm:text-sm text-gray-400"
                                >
                                    <span className="w-1 h-1 rounded-full bg-white/40 mt-2 shrink-0" />
                                    <span className="leading-relaxed">{con}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Product Specs */}
                <div className="pt-6 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-3">
                        {Object.entries(result.specs).map(([key, value], idx) => (
                            <div key={idx} className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
                                <span className="text-[10px] sm:text-xs font-medium text-white/40">{key}</span>
                                <span className="text-[10px] sm:text-xs font-bold text-white">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

