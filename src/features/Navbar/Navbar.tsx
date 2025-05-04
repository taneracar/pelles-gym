import MainWrapper from "@/components/wrappers/main-wrapper";
import Link from "next/link";

// components/Navbar.tsx
export default function Navbar() {
  return (
    <header className="w-full bg-dark text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <MainWrapper className=" flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">FITNESS</div>
        <nav className="space-x-6 hidden md:flex">
          <Link href="/idman" className="hover:text-primary font-semibold">
            İdman
          </Link>
          <Link href="/beslenme" className="hover:text-primary font-semibold">
            Beslenme
          </Link>
          <Link href="/sorucevap" className="hover:text-primary font-semibold">
            Soru-Cevap
          </Link>
          <Link href="/blog" className="hover:text-primary font-semibold">
            Blog
          </Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="text-sm px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white cursor-pointer">
            Giriş Yap
          </button>
          <button className="text-sm px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80">
            Kayıt Ol
          </button>
        </div>
      </MainWrapper>
    </header>
  );
}
