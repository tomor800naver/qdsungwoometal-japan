import { Link, useLocation } from "wouter";
import { Menu, Phone, Mail, MapPin, Factory } from "lucide-react";
import { useState } from "react";

/**
 * Design note: Industrial Corporate Modernism with East Asian manufacturing precision.
 * Shared layout must preserve the original-site feeling: white corporate header, logo at left,
 * horizontal industrial navigation, teal/deep-blue highlights, and a practical footer.
 */
const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/products", label: "製品" },
  { href: "/manufacturing", label: "製造設備" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="site-frame">
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" aria-label="青島成友金属Japan ホーム">
            <span className="brand-mark" aria-hidden="true">
              <Factory size={24} />
            </span>
            <span className="brand-copy">
              <strong>青島成友金属Japan</strong>
              <small>Qdsungwoometal Japan</small>
            </span>
          </Link>
          <nav className="desktop-nav" aria-label="主要メニュー">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={location === item.href ? "active" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="mobile-menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="メニューを開く">
            <Menu size={24} />
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="モバイル主要メニュー">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <strong>青島成友金属Japan</strong>
            <span>Qdsungwoometal Japan</span>
            <p>
              中国本社・青島成友金属有限公司のバランスウェイト製造力を基盤に、
              日本のお客様への製品提案、見積、技術確認、量産相談をサポートします。
            </p>
          </div>
          <address className="footer-contact">
            <h2>連絡先</h2>
            <p><strong>青島成友金属Japan</strong></p>
            <p><MapPin size={16} /> 住所：日本国内対応窓口</p>
            <p><Phone size={16} /> 電話：+81-00-0000-0000</p>
            <p><Mail size={16} /> Email：qdsungwoo@163.com</p>
          </address>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} 青島成友金属Japan / Qdsungwoometal Japan. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
