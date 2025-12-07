import Link from "next/link";
import { SubscribeForm } from "~/app/_components/landing/subscribe-form";

export function CTA() {
    return (
        <section className="relative py-40 bg-black text-white">
            <div className="container mx-auto px-4 text-center">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-8 text-5xl font-semibold tracking-tight sm:text-7xl">
                        당신의 스타일을<br />
                        ClosAI가 완성해드릴게요.
                    </h2>
                    <p className="mx-auto mb-16 max-w-2xl text-2xl text-[#86868b] font-normal">
                        옷을 선택하는 순간이 설렘으로 바뀝니다.
                    </p>
                    <div className="flex justify-center">
                        <SubscribeForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
