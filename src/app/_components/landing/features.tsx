"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ReviewAnalysisDemo } from "./features/ReviewAnalysisDemo";
import { SizeRecommendationDemo } from "./features/SizeRecommendationDemo";
import { BodyTypeMatchDemo } from "./features/BodyTypeMatchDemo";

const SLIDES = [
    {
        id: "intro",
        content: (
            <div className="h-full w-full flex items-center justify-center relative bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
                <div className="text-center z-10 px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-6 text-3xl sm:text-6xl lg:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
                    >
                        데이터로 완성하는<br />
                        완벽한 핏.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto max-w-2xl text-sm sm:text-2xl text-white/60 font-light leading-relaxed mb-12"
                    >
                        ClosAI는 단순한 추천을 넘어,<br />
                        데이터 분석을 통해 당신에게 꼭 맞는 옷을 찾아드립니다.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="animate-bounce text-white/30"
                    >
                        <span className="text-[10px] sm:text-sm tracking-widest uppercase">Scroll to explore</span>
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: "review",
        content: (
            <div className="h-full w-full flex items-center justify-center relative bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
                <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-32 pt-16 lg:pt-0">
                    <div className="flex-none lg:flex-1 space-y-4 lg:space-y-8 z-10 text-center lg:text-left">
                        <h3 className="text-2xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight">
                            수천 개의 리뷰를<br />
                            <span className="text-white">단 1초 만에 분석.</span>
                        </h3>
                        <p className="text-sm sm:text-xl text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                            모든 리뷰를 다 읽을 필요 없습니다.<br />
                            AI가 핵심 키워드만 추출하여<br />
                            핏, 재질, 마감 상태를 요약해 드립니다.
                        </p>
                    </div>
                    <div className="flex-none lg:flex-1 w-full max-w-md lg:max-w-xl h-[45vh] lg:h-[60vh] z-10">
                        <ReviewAnalysisDemo />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "size",
        content: (
            <div className="h-full w-full flex items-center justify-center relative bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
                <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row-reverse items-center justify-center gap-4 lg:gap-32 pt-16 lg:pt-0">
                    <div className="flex-none lg:flex-1 space-y-4 lg:space-y-8 z-10 text-center lg:text-right">
                        <h3 className="text-2xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight">
                            고민할 필요 없는<br />
                            <span className="text-white">정확한 사이즈 추천.</span>
                        </h3>
                        <p className="text-sm sm:text-xl text-white/60 leading-relaxed max-w-lg mx-auto lg:ml-auto lg:mr-0 font-light">
                            키와 몸무게만 입력하세요.<br />
                            방대한 구매 데이터를 기반으로<br />
                            실패 없는 사이즈를 제안합니다.
                        </p>
                    </div>
                    <div className="flex-none lg:flex-1 w-full max-w-md lg:max-w-xl h-[45vh] lg:h-[60vh] z-10">
                        <SizeRecommendationDemo />
                    </div>
                </div>
            </div>
        )
    },
    {
        id: "body",
        content: (
            <div className="h-full w-full flex items-center justify-center relative bg-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
                <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-32 pt-16 lg:pt-0">
                    <div className="flex-none lg:flex-1 space-y-4 lg:space-y-8 z-10 text-center lg:text-left">
                        <h3 className="text-2xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight">
                            나에게 딱 맞는<br />
                            <span className="text-white">체형 유사 리뷰.</span>
                        </h3>
                        <p className="text-sm sm:text-xl text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                            나와 체형이 다른 사람의 리뷰는 그만.<br />
                            키와 몸무게가 비슷한 사용자의<br />
                            '진짜' 후기만 모아서 보여드립니다.
                        </p>
                    </div>
                    <div className="flex-none lg:flex-1 w-full max-w-md lg:max-w-xl h-[45vh] lg:h-[60vh] z-10">
                        <BodyTypeMatchDemo />
                    </div>
                </div>
            </div>
        )
    }
];

export function Features() {
    const targetRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map scroll progress (0-1) to slide index (0-3)
        const index = Math.min(Math.floor(latest * SLIDES.length), SLIDES.length - 1);
        setActiveIndex(index);
    });

    return (
        <section ref={targetRef} id="features" className="relative h-[400vh] bg-black text-white">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">

                {/* Progress Bars (Instagram Story Style) */}
                <div className="absolute top-6 left-0 right-0 z-50 px-4 max-w-3xl mx-auto flex gap-2">
                    {SLIDES.map((_, idx) => (
                        <div key={idx} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                                key={`${idx}-${activeIndex === idx ? 'active' : activeIndex > idx ? 'completed' : 'inactive'}`}
                                className="h-full bg-white"
                                variants={{
                                    initial: { width: "0%" },
                                    active: { width: "100%", transition: { duration: 5, ease: "linear", delay: 0.05 } },
                                    completed: { width: "100%", transition: { duration: 0.01 } },
                                    inactive: { width: "0%", transition: { duration: 0 } }
                                }}
                                initial="initial"
                                animate={activeIndex > idx ? "completed" : activeIndex === idx ? "active" : "inactive"}
                                onAnimationComplete={(definition) => {
                                    if (definition === "active" && activeIndex === idx) {
                                        const nextIndex = activeIndex + 1;
                                        if (targetRef.current) {
                                            const sectionTop = targetRef.current.offsetTop;
                                            const sectionHeight = targetRef.current.offsetHeight;
                                            const slideHeight = sectionHeight / SLIDES.length;

                                            const targetScroll = sectionTop + (nextIndex * slideHeight) + 10;

                                            window.scrollTo({
                                                top: targetScroll,
                                                behavior: "smooth"
                                            });
                                        }
                                    }
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Slides */}
                <div className="relative w-full h-full">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={SLIDES[activeIndex]?.id}
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center"
                        >
                            {SLIDES[activeIndex]?.content}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
