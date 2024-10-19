import Link from "next/link";

function Logo() {
  return (
    <div className="vlo-logo-wrap">
      <Link href="/index.html" className="vlo-logo">
        <img src="/images/logo/vlo-logo.svg" alt="logo" />
        <img src="/images/logo/vlo-footer-logo-1.svg" alt="" />
      </Link>
    </div>
  );
}

export default Logo;
