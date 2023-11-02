import Image from "next/image";
import styles from "./page.module.css";
import { HomeBanner } from "@/components/home-banner";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeBanner />
    </main>
  );
}
