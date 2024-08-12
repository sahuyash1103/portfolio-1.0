import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Nav from "@/components/custom-components/nav/Nav";
import { cn } from "@/lib/utils";
import LayoutProvider from "@/providers/LayoutProvider";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yash sahu",
  description: "Yash Sahu's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex h-screen w-full flex-col items-center justify-start overflow-hidden",
        )}
      >
        <LayoutProvider scaleH={1000} scaleW={1000} className={"flex flex-col"}>
          <Nav />
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
