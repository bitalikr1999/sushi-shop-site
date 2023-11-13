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
import { ScheduleAlert } from "@/components/schedule-alert";

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
        <meta
          name="description"
          content="Найкраща доставка суші у Хмельницькому - DaSushi. Замовте свої улюблені роли та страви прямо до дому."
        />

        <meta
          property="og:title"
          content="DaSushi - Доставка суші у Хмельницькому"
        />
        <meta
          property="og:description"
          content="Найкраща доставка суші у Хмельницькому. Замовте свої улюблені роли та страви прямо до дому."
        />
        <meta
          property="og:image"
          content="https://dasushi.km.ua/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0761fcf4.png&w=640&q=75ж"
        />
        <meta
          property="og:url"
          content="https://dasushi.km.ua/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0761fcf4.png&w=640&q=75"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DaSushi - Доставка суші у Хмельницькому"
        />
        <meta
          name="twitter:description"
          content="Найкраща доставка суші у Хмельницькому. Замовте свої улюблені роли та страви прямо до дому."
        />
        <meta
          name="twitter:image"
          content="https://dasushi.km.ua/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0761fcf4.png&w=640&q=75"
        />
      </Head>
      <body className={inter.className}>
        <PHProvider>
          <ScheduleAlert />
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
