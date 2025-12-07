"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const subscribe = api.landing.subscribe.useMutation({
        onSuccess: () => {
            setIsSubmitted(true);
            setEmail("");
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        subscribe.mutate({ email });
    };

    if (isSubmitted) {
        return (
            <div className="rounded-full bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm">
                🎉 등록되었습니다! 곧 소식을 전해드릴게요.
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
            <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm transition focus:border-white focus:bg-white/10 focus:outline-none"
            />
            <button
                type="submit"
                disabled={subscribe.isPending}
                className="rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition hover:bg-gray-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
                {subscribe.isPending ? "등록 중..." : "사전 등록하기"}
            </button>
        </form>
    );
}
