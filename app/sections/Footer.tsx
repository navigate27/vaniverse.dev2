const Footer = () => {
  return (
    <footer className="shell border-t border-line py-10">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-faint sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Ivan Ferrer</span>
        <span className="font-serif italic">
          Built with Next.js, Tailwind &amp; too much coffee.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
