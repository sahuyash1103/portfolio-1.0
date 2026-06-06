import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Nav from "@/components/custom-components/nav/Nav";
import { cn } from "@/lib/utils";
import LayoutProvider from "@/providers/LayoutProvider";

const inter = Inter({ subsets: ["latin"] });
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Yash Sahu | Full Stack Developer",
  description: "Modern portfolio of Yash Sahu, Full Stack Developer showing off personal projects, commits, and resume.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.className,
          firaCode.variable,
          "min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden antialiased bg-grid-pattern relative",
        )}
      >
        {/* Ambient background glows */}
        <div className="absolute top-[-10%] left-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow z-0" />
        <div className="absolute top-[40vh] right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-float z-0" />

        <LayoutProvider scaleH={1000} scaleW={1000} className="flex flex-col w-full min-h-screen relative z-10">
          <Nav />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
        </LayoutProvider>
      </body>
    </html>
  );
}
