"use client";
import React from "react";
import { CategoryRowItem } from "@/components/categories-row/category-row-item";
import { useRouter, useSearchParams } from "next/navigation";

export const CatalogBackButton = () => {
  const sp = useSearchParams();

  const parentKey = sp.get("parentKey");
  if (!parentKey) return null;

  return (
    <div style={{ paddingLeft: 16 }}>
      <CategoryRowItem href={`/catalog/${parentKey}`} label="Назад" />
    </div>
  );
};
