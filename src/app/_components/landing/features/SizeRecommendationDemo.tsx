"use client";

import { useState, useEffect } from "react";
import { Ruler, Weight, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function SizeRecommendationDemo() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [recommendedSize, setRecommendedSize] = useState("L");
  const [fitPrediction, setFitPrediction] = useState({
    summary: "고객님의 신체 사이즈와 구매 이력을 바탕으로 가장 적합한 사이즈를 추천해 드립니다.",
    details: [
      "기장은 발목을 살짝 덮는 정도로 딱 맞습니다.",
      "허리는 여유가 있어 편안하게 착용 가능합니다.",
      "전체적인 핏은 스탠다드 핏입니다."
    ]
  });

  // Simple mock logic
  useEffect(() => {
    const bmi = weight / ((height / 100) * (height / 100));
    let size = "M";
    let details = [
      "기장은 발목을 살짝 덮는 정도로 딱 맞습니다.",
      "허리는 여유가 있어 편안하게 착용 가능합니다.",
      "전체적인 핏은 스탠다드 핏입니다."
    ];

    if (bmi < 18.5) {
      size = "S";
      details = [
        "기장은 약간 여유있게 떨어집니다.",
        "허리는 끈으로 조절하여 착용하는 것을 추천합니다.",
        "전체적으로 루즈한 핏이 연출됩니다."
      ];
    } else if (bmi < 23) {
      size = "M";
      details = [
        "기장은 발목 위로 깔끔하게 떨어집니다.",
        "허리는 딱 맞게 착용 가능합니다.",
        "슬림한 실루엣이 연출됩니다."
      ];
    } else if (bmi < 25) {
      size = "L";
      details = [
        "기장은 발목을 살짝 덮는 정도로 딱 맞습니다.",
        "허리는 여유가 있어 편안하게 착용 가능합니다.",
        "전체적인 핏은 스탠다드 핏입니다."
      ];
    } else if (bmi < 30) {
      size = "XL";
      details = [
        "기장은 발등을 덮는 길이감입니다.",
        "허리는 밴딩으로 편안하게 착용 가능합니다.",
        "여유로운 와이드 핏입니다."
      ];
    } else {
      size = "XXL";
      details = [
        "기장은 수선이 필요할 수 있습니다.",
        "허리는 넉넉하게 나왔습니다.",
        "오버사이즈 핏으로 편안합니다."
      ];
    }

    setRecommendedSize(size);
    setFitPrediction(prev => ({ ...prev, details }));
  }, [height, weight]);

  return (
    <div className="h-full w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-6 lg:p-8 flex flex-col justify-between shadow-2xl">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-white/10">
            <Ruler className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">Size & Fit Analysis</h3>
        </div>

        <div className="space-y-8 mb-8">
          {/* Height Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-white/60 font-medium">Height</span>
              <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">{height} cm</span>
            </div>
            <input
              type="range"
              min="150"
              max="200"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
            />
          </div>

          {/* Weight Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-white/60 font-medium">Weight</span>
              <span className="text-white font-mono bg-white/10 px-2 py-1 rounded">{weight} kg</span>
            </div>
            <input
              type="range"
              min="40"
              max="120"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
            />
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="relative overflow-hidden rounded-2xl bg-white/5 p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[10px] sm:text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Best Match</p>
            <motion.div
              key={recommendedSize}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-bold text-white tracking-tighter"
            >
              {recommendedSize}
            </motion.div>
          </div>
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
            <ArrowRight className="h-6 w-6 text-black" />
          </div>
        </div>

        <div className="space-y-2">
          {fitPrediction.details.map((detail, idx) => (
            <motion.div
              key={`${recommendedSize}-${idx}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-2 text-xs sm:text-sm text-gray-300"
            >
              <CheckCircle2 className="h-4 w-4 text-white mt-0.5 shrink-0" />
              <span className="leading-tight">{detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
