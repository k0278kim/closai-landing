import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "ClosAI - AI Fashion Assistant",
  description: "AI-powered fashion analysis and size recommendation",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

import { GoogleAnalytics } from "~/app/_components/google-analytics";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="scrollbar-hide">
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
