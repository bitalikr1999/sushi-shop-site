import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components";
import { TopBar } from "@/components/topbar";
import Head from "next/head";
import "rsuite/dist/rsuite-no-reset.min.css";
import NextTopLoader from "nextjs-toploader";

import { BasketModal } from "@/components/basket/basket-modal";
import dynamic from "next/dynamic";

import { PHProvider } from "./providers";

const inter = Roboto_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "DaSushi",
  description: "суші м. Хмельницький",
};

const BasketPoint: any = dynamic(
  () => import("@/components/basket/basket-point/bucket-point.component"),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
        ></link>
      </Head>
      <body className={inter.className}>
        <PHProvider>
          <NextTopLoader color="#ff6500" height={1} />
          <div className="layout">
            <Sidebar />

            <div className="content">
              <TopBar />
              {children}
            </div>
          </div>

          <BasketPoint />
          <BasketModal />
        </PHProvider>
      </body>
    </html>
  );
}
