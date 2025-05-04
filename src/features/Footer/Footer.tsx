// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-dark text-light px-6 py-8 text-center text-sm">
      © {new Date().getFullYear()} FITNESS. Tüm hakları saklıdır.
    </footer>
  );
}
