"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, FileText, Search, Server } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "입력/수집",
        description: "상품 정보 입력 및 크롤링",
    },
    {
        icon: Server,
        title: "분석",
        description: "AI 기반 데이터 분석",
    },
    {
        icon: FileText,
        title: "산출",
        description: "맞춤형 리포트 생성",
    },
];

export function Process() {
    return (
        <section className="relative py-40 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="mb-24 text-center">
                    <h2 className="mb-4 text-4xl font-semibold tracking-tight">
                        핵심 프로세스
                    </h2>
                    <p className="text-xl text-[#86868b]">
                        ClosAI가 가치를 만드는 과정.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center md:flex-row">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#1d1d1f] text-white">
                                    <step.icon className="h-8 w-8" />
                                </div>
                                <h3 className="mb-2 text-2xl font-semibold">{step.title}</h3>
                                <p className="text-[#86868b]">
                                    {step.description}
                                </p>
                            </motion.div>

                            {index < steps.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
                                    viewport={{ once: true }}
                                    className="my-8 md:my-0 md:mx-8"
                                >
                                    <ArrowRight className="h-6 w-6 text-[#86868b] rotate-90 md:rotate-0" />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
