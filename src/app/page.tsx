import { Background } from "~/app/_components/landing/background";
import { CTA } from "~/app/_components/landing/cta";
import { Demo } from "~/app/_components/landing/demo";
import { Features } from "~/app/_components/landing/features";
import { Goal } from "~/app/_components/landing/goal";
import { Hero } from "~/app/_components/landing/hero";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col text-white selection:bg-white selection:text-black">
        <Background />

        <div className="relative z-10 space-y-20">
          <Hero />
          <Demo />
          <Features />
          <Goal />
          <CTA />

          {/* Minimal Footer */}
          <footer className="border-t border-white/10 py-12 text-center text-sm text-gray-500">
            <div className="container mx-auto px-4">
              <p>&copy; {new Date().getFullYear()} ClosAI. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
    </HydrateClient>
  );
}
