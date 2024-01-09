/* eslint-disable react/no-unescaped-entities */
import bg from "@/assets/banner-bg.png";
import style from "./home-banner.module.css";
import Link from "next/link";

export const HomeBanner = () => {
  return (
    <div className={style.container} style={{ backgroundImage: `url(${bg})` }}>
      <div className={style.content}>
        <p className={style.title}>Доставка смачної їжі</p>
        <p className={style.text}>
          Наша команда зробить усе, щоб ви отримали насолоду від нашої
          продукції. <br /> Меню "DaSushi" дуже різноманітне: роли, бургери,
          стріт роли а також багато іншого. З нетерпінням чекаємо на Ваші
          замовлення!
        </p>
        <Link className="button" href="/catalog">
          Замовити
        </Link>
      </div>
    </div>
  );
};
