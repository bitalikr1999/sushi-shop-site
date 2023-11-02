import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components";
import { TopBar } from "@/components/topbar";

const inter = Roboto_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "DaSushi",
  description: "суші м. Хмельницький",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <Sidebar />

          <div className="content">
            <TopBar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
