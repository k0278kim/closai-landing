"use client";

import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";

export function Goal() {
    return (
        <section className="relative py-40 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-10 inline-flex h-24 w-24 items-center justify-center rounded-full bg-white text-black">
                            <Layers className="h-10 w-10" />
                        </div>

                        <h2 className="mb-8 text-5xl font-semibold tracking-tight sm:text-7xl leading-tight">
                            내 옷장 연동.
                        </h2>

                        <p className="mx-auto mb-12 max-w-2xl text-2xl text-[#86868b] font-normal leading-relaxed">
                            단순한 추천을 넘어, 사용자의 기존 구매 상품 정보를 기반으로<br className="hidden sm:block" />
                            개인에게 최적화된 서비스 항목을 지속적으로 개선하고 발전시킵니다.
                        </p>

                        <button className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition-transform hover:scale-105">
                            <span>비전 더 알아보기</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
