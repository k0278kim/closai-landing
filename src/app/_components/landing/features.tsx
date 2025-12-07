"use client";

import { motion } from "framer-motion";
import { BarChart2, Ruler, AlertTriangle, Search, User, Shirt } from "lucide-react";

const features = [
    {
        title: "리뷰 기반 상세 분석",
        description: "고객 리뷰를 분석하여 장점, 단점, 핏, 스타일 등을 핵심적으로 요약 제공합니다.",
        icon: BarChart2,
    },
    {
        title: "정확한 사이즈 추천",
        description: "사용자에게 적합한 추천 사이즈와 함께 정장 여부, 유연성 정보를 제공합니다.",
        icon: Ruler,
    },
    {
        title: "이미지 기반 문제 예측",
        description: "리뷰 기반으로 옷의 잠재적 문제 발생 부위를 이미지 위에 시각적으로 경고합니다.",
        icon: AlertTriangle,
    },
    {
        title: "SNS 리뷰 매핑",
        description: "Instagram, YouTube 등 SNS의 연관 리뷰를 매핑하여 폭넓은 시각적 정보를 제공합니다.",
        icon: Search,
    },
    {
        title: "내 체형 유사 리뷰",
        description: "나와 체형이 유사한 사용자의 리뷰만 필터링하여 보여줍니다.",
        icon: User,
    },
    {
        title: "사이즈 일치표",
        description: "정밀한 사이즈 일치표 데이터를 활용하여 추천 정확도를 높입니다.",
        icon: Shirt,
    },
];

export function Features() {
    return (
        <section id="features" className="relative py-40 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="mb-32 text-center">
                    <h2 className="mb-6 text-5xl font-semibold tracking-tight sm:text-6xl">
                        데이터로 완성하는<br />
                        <span className="text-[#86868b]">완벽한 핏.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-2xl text-[#86868b] font-normal leading-relaxed">
                        ClosAI는 단순한 추천을 넘어,<br />
                        데이터 분석을 통해 당신에게 꼭 맞는 옷을 찾아드립니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#1d1d1f] p-10 transition-transform duration-500 hover:scale-[1.02]"
                        >
                            <div className="mb-8">
                                <feature.icon className="h-10 w-10 text-white opacity-80" />
                            </div>

                            <div>
                                <h3 className="mb-4 text-2xl font-semibold text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-lg text-[#86868b] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
