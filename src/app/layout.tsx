import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Syne } from "next/font/google";
import "./globals.css";
import Nav from "@/components/custom-components/nav/Nav";
import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yash Sahu — Full Stack Developer",
  description:
    "Portfolio of Yash Sahu, a Full Stack Developer crafting scalable web apps, real-time architectures, and computer vision systems.",
  keywords: ["Full Stack Developer", "React", "Next.js", "NestJS", "Portfolio", "Yash Sahu"],
  openGraph: {
    title: "Yash Sahu — Full Stack Developer",
    description: "Portfolio of Yash Sahu — scalable web apps, real-time systems, computer vision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ scrollBehavior: "smooth" }}>
      <body
        className={cn(
          spaceGrotesk.variable,
          spaceMono.variable,
          syne.variable,
          spaceGrotesk.className,
          "min-h-screen w-full flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden antialiased relative",
        )}
      >
        {/* Deep ambient background */}
        <div className="fixed inset-0 bg-[rgb(4,4,12)] -z-10" />
        <div className="fixed inset-0 bg-grid -z-10 opacity-60" />

        {/* Floating ambient orbs */}
        <div
          className="fixed top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none -z-10 animate-pulse-glow"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="fixed top-[40vh] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none -z-10 animate-float"
          style={{ background: "radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 70%)" }}
        />
        <div
          className="fixed bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none -z-10 animate-float-delayed"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)" }}
        />

        <div className="flex flex-col w-full min-h-screen relative z-10">
          <Nav />
          <main className="flex-1 w-full flex flex-col">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
