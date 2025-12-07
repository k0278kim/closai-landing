"use client";

import { motion } from "framer-motion";
import { SubscribeForm } from "~/app/_components/landing/subscribe-form";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-black py-32 text-white sm:py-48">
            <div className="container relative z-10 mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Apple-like ease
                >
                    <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-200 backdrop-blur-md">
                        AI Fashion Analysis v2.0
                    </div>

                    <div className="mb-6 flex items-center justify-center gap-3">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/30"></div>
                        <span className="font-mono text-sm sm:text-lg font-semibold tracking-[0.3em] text-white">3초 만에 얻는 구매 확신</span>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/30"></div>
                    </div>

                    <h1 className="mb-8 text-7xl font-bold tracking-tighter text-transparent sm:text-[8rem] bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-2xl">
                        ClosAI
                    </h1>

                    <p className="mx-auto mb-16 max-w-2xl text-sm sm:text-xl text-[#86868b] font-normal leading-relaxed break-keep">
                        읽지 말고 보세요. 자체 알고리즘이 추출한 사이즈 히트맵과 핵심 요약 리포트로<br className="hidden sm:block" />
                        '살지 말지' 3초 만에 판단하게 도와줍니다.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6">
                        <SubscribeForm />
                        <p className="text-sm text-[#86868b]">
                            * 사전 등록 시 런칭 알림과 함께 특별한 혜택을 드립니다.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
