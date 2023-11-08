import Link from "next/link";

export default function Custom404() {
  return (
    <div className="page-404">
      <div>
        <p>Такої сторінки не існує</p>

        <Link className="button" href="/catalog">
          Перейти у каталог
        </Link>
      </div>
    </div>
  );
}
