// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";

if (typeof window !== "undefined") {
  posthog.init("phc_pGqe3oSobipawPOEYKGj88Lnk5uRNZij5U7vJhGXU0t", {
    api_host: "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NEXT_PUBLIC_MODE === "dev") posthog.debug();
    },
  });
}

export function PostHogPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Track pageviews
  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);
}

export function PHProvider({ children }: any) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
