"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Shirt, ScanLine, ThumbsUp, ThumbsDown, Scissors, ScanEye, Ruler, ArrowUpDown, ArrowLeftRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const products = [
    {
        id: "tshirt",
        name: "오버핏 코튼 티셔츠",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        heatmapPoints: [
            {
                x: 50,
                y: 20,
                radius: 15,
                intensity: 80,
                category: "neck",
                keyword: "목 늘어남",
                description: "세탁 후 목 부분이 약간 우는 경향이 있다는 리뷰가 15% 존재합니다.",
            },
            {
                x: 30,
                y: 40,
                radius: 10,
                intensity: 40,
                category: "shoulder",
                keyword: "어깨 라인",
                description: "어깨가 자연스럽게 떨어지는 드롭숄더 핏입니다.",
            }
        ],
        result: {
            satisfactionScore: 92,
            pros: ["소재가 탄탄하고 두께감이 적당합니다.", "어깨 라인이 자연스럽게 떨어집니다."],
            cons: ["세탁 후 목 부분이 약간 우는 경향이 있습니다.", "기장이 생각보다 깁니다."],
            fitStyle: ["전체적으로 여유로운 오버핏이며, 스트릿 무드에 적합합니다.", "소매 기장이 팔꿈치까지 내려옵니다."],
            size: "L 사이즈 추천",
            specs: {
                fit: { value: "오버핏", summary: "체형을 가려주는 넉넉한 핏입니다." },
                touch: { value: "부드러움", summary: "면 100%로 피부 자극이 없습니다." },
                flexibility: { value: "보통", summary: "신축성은 없으나 활동하기 편합니다." },
                thickness: { value: "보통", summary: "봄/가을에 단독으로 입기 좋습니다." },
            }
        },
    },
    {
        id: "pants",
        name: "와이드 데님 팬츠",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
        heatmapPoints: [
            {
                x: 50,
                y: 90,
                radius: 12,
                intensity: 90,
                category: "length",
                keyword: "기장감",
                description: "기장이 매우 길어 수선이 필요할 수 있다는 의견이 지배적입니다.",
            },
            {
                x: 50,
                y: 15,
                radius: 10,
                intensity: 30,
                category: "waist",
                keyword: "허리 밴딩",
                description: "허리 밴딩이 있어 착용감이 편안하다는 평이 많습니다.",
            }
        ],
        result: {
            satisfactionScore: 88,
            pros: ["색감이 화면과 동일하고 핏이 예쁩니다.", "허리 밴딩이 있어 편안합니다."],
            cons: ["기장이 매우 길어 수선이 필수적입니다.", "물빠짐이 조금 있습니다."],
            fitStyle: ["허벅지부터 밑단까지 와이드하게 떨어지는 핏입니다.", "신발을 덮는 기장감입니다."],
            size: "30 사이즈 추천",
            specs: {
                fit: { value: "와이드", summary: "트렌디한 와이드 실루엣입니다." },
                touch: { value: "탄탄함", summary: "데님 특유의 거친 느낌이 살아있습니다." },
                flexibility: { value: "없음", summary: "난스판 데님으로 늘어남이 적습니다." },
                thickness: { value: "두꺼움", summary: "사계절 착용 가능한 두께입니다." },
            }
        },
    },
    {
        id: "hoodie",
        name: "헤비웨이트 후드",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
        heatmapPoints: [
            {
                x: 50,
                y: 35,
                radius: 20,
                intensity: 60,
                category: "fit",
                keyword: "체형 보정",
                description: "탄탄한 소재로 체형 보정 효과가 뛰어나다는 호평이 많습니다.",
            }
        ],
        result: {
            satisfactionScore: 95,
            pros: ["모자가 크고 각이 잘 잡힙니다.", "기모 안감이 부드럽고 따뜻합니다."],
            cons: ["무게감이 다소 있어 장시간 착용 시 피로할 수 있습니다."],
            fitStyle: ["어깨가 넓어 보이는 박스 핏으로 체형 보정에 좋습니다.", "후드 각이 살아있어 스타일리시합니다."],
            size: "XL 사이즈 추천",
            specs: {
                fit: { value: "박스핏", summary: "상체 발달형 체형에 추천합니다." },
                touch: { value: "부드러움", summary: "기모 안감으로 착용감이 좋습니다." },
                flexibility: { value: "약간", summary: "활동하기 편한 정도의 신축성입니다." },
                thickness: { value: "두꺼움", summary: "한겨울에도 따뜻하게 입을 수 있습니다." },
            }
        },
    },
];

const getCategoryIcon = (category: string) => {
    switch (category) {
        case "length": return ArrowUpDown;
        case "width": return ArrowLeftRight;
        case "waist": return Scissors;
        case "neck": return AlertCircle;
        default: return ScanEye;
    }
};

export function Demo() {
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(products[0] ?? null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<typeof products[0]["result"] | null>(products[0]?.result ?? null);
    const [expandedPointId, setExpandedPointId] = useState<number | null>(null);
    const [showHeatmap, setShowHeatmap] = useState(true);

    const handleSelect = (product: typeof products[0]) => {
        if (selectedProduct?.id === product.id) return;

        setSelectedProduct(product);
        setResult(null);
        setExpandedPointId(null);
        setIsAnalyzing(true);

        // Simulate analysis
        setTimeout(() => {
            setIsAnalyzing(false);
            setResult(product.result);
        }, 2000);
    };

    return (
        <section className="relative py-40 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="mb-24 text-center">
                    <h2 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                        직접 체험해보세요.
                    </h2>
                    <p className="text-xl text-[#86868b]">
                        상품을 선택하면 AI가 실시간으로 분석하여 문제 부위를 시각화합니다.
                    </p>
                </div>

                <div className="mx-auto max-w-[90rem]">
                    <div className="grid gap-8 lg:grid-cols-12 items-start">
                        {/* 1. Product Selection (Left) */}
                        <div className="lg:col-span-3">
                            <h3 className="text-xl font-semibold text-white px-2 mb-6">1. 상품 선택</h3>
                            <div className="h-full rounded-3xl bg-[#1d1d1f] p-6 border border-white/5 flex flex-col lg:h-[720px]">
                                <div className="space-y-3 overflow-y-auto scrollbar-hide">
                                    {products.map((product) => (
                                        <button
                                            key={product.id}
                                            onClick={() => handleSelect(product)}
                                            className={`w-full group flex items-center gap-4 rounded-2xl p-3 transition-all duration-300 ${selectedProduct?.id === product.id
                                                ? "bg-white/10 border border-white/10 shadow-lg"
                                                : "bg-transparent border border-transparent hover:bg-white/5"
                                                }`}
                                        >
                                            <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-gray-800 shrink-0 border border-white/5">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                            </div>
                                            <div className="text-left min-w-0 flex-1">
                                                <div className={`text-sm font-bold truncate transition-colors ${selectedProduct?.id === product.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                                                    }`}>
                                                    {product.name}
                                                </div>
                                                <div className="text-xs text-[#86868b] mt-0.5">분석 예시</div>
                                            </div>
                                            {selectedProduct?.id === product.id && (
                                                <div className="pl-2">
                                                    {isAnalyzing ? (
                                                        <Loader2 className="h-4 w-4 animate-spin text-[#86868b]" />
                                                    ) : (
                                                        <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                                    )}
                                                </div>
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-3 text-xs text-[#86868b] px-2">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5">
                                            <Sparkles size={12} />
                                        </div>
                                        <p>원하는 상품을 선택하여<br />AI 분석을 시작하세요.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Image & Heatmap (Center) */}
                        <div className="lg:col-span-5">
                            <h3 className="text-xl font-semibold text-white px-2 mb-6">2. AI 시각화</h3>
                            <div className="relative flex aspect-[3/4] w-full flex-col overflow-hidden rounded-3xl bg-[#1d1d1f] border border-white/5 group lg:aspect-auto lg:h-[720px]">
                                <div className="absolute inset-0 z-0">
                                    {selectedProduct ? (
                                        <>
                                            <Image
                                                src={selectedProduct.image}
                                                alt="Analysis Target"
                                                fill
                                                className="object-cover"
                                            />

                                            {/* Heatmap Overlay */}
                                            {result && showHeatmap && (
                                                <div className="absolute inset-0 z-10">
                                                    {selectedProduct.heatmapPoints.map((point, idx) => {
                                                        const isExpanded = expandedPointId === idx;
                                                        const Icon = getCategoryIcon(point.category);

                                                        return (
                                                            <div key={idx}>
                                                                {/* Heatmap Blob */}
                                                                <div
                                                                    className="absolute rounded-full blur-xl pointer-events-none"
                                                                    style={{
                                                                        left: `${point.x}%`,
                                                                        top: `${point.y}%`,
                                                                        width: `${point.radius * 2}%`,
                                                                        height: `${point.radius * 2}%`,
                                                                        transform: 'translate(-50%, -50%)',
                                                                        background: `radial-gradient(circle, rgba(255, 0, 0, ${point.intensity / 100 * 0.6}) 0%, rgba(255, 0, 0, 0) 70%)`,
                                                                    }}
                                                                />

                                                                {/* Interactive Tooltip */}
                                                                <div
                                                                    className={`absolute cursor-pointer ${isExpanded ? 'z-50' : 'z-30'}`}
                                                                    style={{
                                                                        left: `${point.x}%`,
                                                                        top: `${point.y}%`,
                                                                    }}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setExpandedPointId(isExpanded ? null : idx);
                                                                    }}
                                                                >
                                                                    <div
                                                                        className={`absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isExpanded ? 'scale-100' : 'hover:scale-105'
                                                                            }`}
                                                                        style={{
                                                                            transformOrigin: `${point.x > 50 ? 'right' : 'left'} ${point.y > 50 ? 'bottom' : 'top'}`,
                                                                            [point.x > 50 ? 'right' : 'left']: '0',
                                                                            [point.y > 50 ? 'bottom' : 'top']: '0',
                                                                        }}
                                                                    >
                                                                        <div className={`flex flex-col gap-2 shadow-2xl overflow-hidden transition-all duration-300 ${isExpanded
                                                                            ? 'bg-black text-white p-4 rounded-2xl min-w-[240px] border border-white/20'
                                                                            : 'bg-white text-black px-3 py-2 rounded-2xl items-center flex-row border border-neutral-200 shadow-lg'
                                                                            }`}>
                                                                            {/* Header: Icon + Keyword + Toggle Indicator */}
                                                                            <div className="flex items-center justify-between gap-3 w-full">
                                                                                <div className="flex items-center gap-2">
                                                                                    <div className={`p-1 rounded-full ${isExpanded ? 'bg-white/10' : 'bg-neutral-100'}`}>
                                                                                        <Icon size={14} strokeWidth={2.5} />
                                                                                    </div>
                                                                                    <span className={`text-xs font-bold tracking-tight whitespace-nowrap ${isExpanded ? 'text-white' : 'text-black'}`}>
                                                                                        {point.keyword}
                                                                                    </span>
                                                                                </div>

                                                                                {/* Toggle Icon */}
                                                                                <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : 'rotate-0'}`}>
                                                                                    <div className={`w-4 h-4 flex items-center justify-center rounded-full ${isExpanded ? 'bg-white/20' : 'bg-black text-white'}`}>
                                                                                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                                                            {/* Expanded Description */}
                                                                            {isExpanded && (
                                                                                <div className="text-xs font-medium text-gray-300 leading-relaxed border-t border-white/10 pt-2 mt-1">
                                                                                    {point.description}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}

                                            {/* Heatmap Toggle Button */}
                                            {result && (
                                                <button
                                                    onClick={() => setShowHeatmap(!showHeatmap)}
                                                    className={`absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full text-[11px] font-bold tracking-widest transition-all duration-300 flex items-center gap-2 z-20 ${showHeatmap
                                                        ? 'bg-black text-white border border-white/20'
                                                        : 'bg-white text-black border border-neutral-200 hover:bg-black hover:text-white'
                                                        }`}
                                                >
                                                    <ScanEye size={14} strokeWidth={2} />
                                                    {showHeatmap ? 'HIDE HEATMAP' : 'FIT HEATMAP'}
                                                </button>
                                            )}
                                        </>
                                    ) : (
                                        <div className="flex h-full items-center justify-center text-[#86868b]">
                                            <ScanLine className="h-20 w-20 opacity-20" />
                                        </div>
                                    )}
                                </div>

                                {/* Analyzing Overlay - Modern Scanning Effect */}
                                <AnimatePresence>
                                    {isAnalyzing && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[1px]"
                                        >
                                            {/* Subtle Scanning Beam */}
                                            <motion.div
                                                initial={{ top: "-10%" }}
                                                animate={{ top: "110%" }}
                                                transition={{
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    repeatType: "loop"
                                                }}
                                                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)] z-30"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* 3. Analysis Result (Right) */}
                        <div className="lg:col-span-4">
                            <h3 className="text-xl font-semibold text-white px-2 mb-6">3. 분석 리포트</h3>
                            <div className="h-full rounded-3xl bg-[#1d1d1f] p-8 border border-white/5 overflow-y-auto scrollbar-hide lg:h-[720px]">
                                <AnimatePresence mode="wait">
                                    {!selectedProduct ? (
                                        <motion.div
                                            key="empty"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex h-full flex-col items-center justify-center text-[#86868b] min-h-[300px]"
                                        >
                                            <p>상품을 선택하면 결과가 표시됩니다</p>
                                        </motion.div>
                                    ) : isAnalyzing ? (
                                        <motion.div
                                            key="analyzing"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="flex h-full flex-col items-center justify-center min-h-[300px]"
                                        >
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="relative h-12 w-12">
                                                    <div className="absolute inset-0 rounded-full border-2 border-white/10"></div>
                                                    <div className="absolute inset-0 rounded-full border-t-2 border-white animate-spin"></div>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <Sparkles className="h-4 w-4 text-white animate-pulse" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center gap-1">
                                                    <p className="text-sm font-medium text-white tracking-wide">분석 중입니다</p>
                                                    <p className="text-xs text-[#86868b]">잠시만 기다려주세요...</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : result ? (
                                        <motion.div
                                            key="result"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="space-y-10"
                                        >
                                            {/* Satisfaction Score */}
                                            <div className="flex flex-col items-center">
                                                <div className="relative w-40 h-24 overflow-hidden mb-2">
                                                    <svg viewBox="0 0 200 100" className="w-full h-full">
                                                        {/* Background Arc */}
                                                        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#333" strokeWidth="12" strokeLinecap="round" />
                                                        {/* Progress Arc */}
                                                        <path
                                                            d="M 20 100 A 80 80 0 0 1 180 100"
                                                            fill="none"
                                                            stroke="white"
                                                            strokeWidth="12"
                                                            strokeLinecap="round"
                                                            strokeDasharray="251.2"
                                                            strokeDashoffset={251.2 - (251.2 * result.satisfactionScore) / 100}
                                                            className="transition-all duration-1000 ease-out"
                                                        />
                                                    </svg>
                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                                                        <div className="text-4xl font-bold text-white">{result.satisfactionScore}</div>
                                                    </div>
                                                </div>
                                                <div className="text-sm font-medium text-[#86868b] uppercase tracking-widest">Satisfaction Score</div>
                                            </div>

                                            {/* Pros */}
                                            <div>
                                                <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                                                    <ThumbsUp className="h-3 w-3" /> Pros
                                                </h4>
                                                <ul className="space-y-3">
                                                    {result.pros.map((pro, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                                            <span className="font-bold text-white mt-0.5">+</span>
                                                            <span className="leading-relaxed">{pro}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Cons */}
                                            <div>
                                                <h4 className="text-xs font-bold text-[#86868b] mb-4 uppercase tracking-widest flex items-center gap-2">
                                                    <ThumbsDown className="h-3 w-3" /> Cons
                                                </h4>
                                                <ul className="space-y-3">
                                                    {result.cons.map((con, idx) => (
                                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                                            <span className="font-bold text-[#86868b] mt-0.5">-</span>
                                                            <span className="leading-relaxed">{con}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Fit & Style */}
                                            <div className="pt-6 border-t border-white/10">
                                                <h4 className="text-xs font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                                                    <Scissors className="h-3 w-3" /> Fit & Style
                                                </h4>
                                                <ul className="space-y-2">
                                                    {result.fitStyle.map((item, idx) => (
                                                        <li key={idx} className="text-sm text-gray-300 leading-relaxed">
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Product Specs */}
                                            <div className="pt-6 border-t border-white/10">
                                                <h4 className="text-xs font-bold text-[#86868b] mb-4 uppercase tracking-widest">Product Specs</h4>
                                                <div className="grid grid-cols-1 gap-3">
                                                    {Object.entries(result.specs).map(([key, spec], idx) => (
                                                        <div key={idx} className="group border border-white/5 bg-white/5 p-4 rounded-xl hover:border-white/20 transition-colors">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className="text-[10px] font-bold text-[#86868b] tracking-widest uppercase group-hover:text-white transition-colors">
                                                                    {key}
                                                                </span>
                                                                <span className="text-xs font-bold text-black bg-white px-2 py-0.5 rounded-sm">
                                                                    {spec.value}
                                                                </span>
                                                            </div>
                                                            <p className="text-xs text-gray-400 leading-relaxed">
                                                                {spec.summary}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-white animate-pulse rounded-full"></div>
                                                    <span className="text-[10px] font-bold tracking-widest text-white">AI SUMMARY</span>
                                                </div>
                                                <div className="flex items-center gap-1 text-[10px] font-bold text-[#86868b]">
                                                    <Sparkles className="h-3 w-3" />
                                                    <span>POWERED BY GEMINI</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
