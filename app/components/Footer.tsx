export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-navy-950 py-10 border-t border-navy-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="font-cn text-sm font-normal text-warm-white/25">
          &copy; {currentYear}. Aestilith 潮汐基石 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
