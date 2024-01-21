"use client";

import React, { useEffect, useState } from "react";
import { Dropdown, SelectPicker } from "rsuite";
import styles from "./list-sort-controller.module.css";
import { defaultTo } from "lodash";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FunnelIcon from "@rsuite/icons/Funnel";

const items = [
  {
    label: "За замовчуванням",
    value: "default",
  },
  {
    label: "За спаданням ціни",
    value: "price-desc",
  },
  {
    label: "За зростанням ціни",
    value: "price-asc",
  },
];
export const ListSortController = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const pathname = usePathname();
  const sp = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setActiveKey(defaultTo(sp.get("sort"), "default"));
  }, []);

  const handleSortChange = () => {
    if (!activeKey) return;

    const current = new URLSearchParams(Array.from(sp.entries()));

    if (activeKey === "default") {
      current.delete("sort");
    } else {
      current.set("sort", activeKey);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  useEffect(() => {
    if (activeKey) handleSortChange();
  }, [activeKey]);

  return (
    <div className={styles.container}>
      <FunnelIcon style={{ marginRight: 5 }} />
      <SelectPicker
        value={defaultTo(activeKey, "default")}
        data={items}
        searchable={false}
        style={{ width: 160 }}
        cleanable={activeKey !== "default"}
        onChange={(val) => setActiveKey(defaultTo(val, "default"))}
      />
    </div>
  );
};
