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

                    <h1 className="mb-8 text-6xl font-semibold tracking-tight sm:text-[7rem] leading-[1.05]">
                        나만의 <span className="text-[#86868b]">AI 스타일리스트</span><br />
                        ClosAI
                    </h1>

                    <p className="mx-auto mb-16 max-w-2xl text-xl text-[#86868b] font-normal leading-relaxed">
                        인공지능이 당신의 옷장을 분석하여 완벽한 스타일을 제안합니다.<br className="hidden sm:block" />
                        매일 아침, 더 이상 무엇을 입을지 고민하지 마세요.
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
