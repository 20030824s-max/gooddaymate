import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <p className="font-serif text-2xl font-light tracking-widest uppercase">
                Good Day Mate
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase text-gold mt-1">
                Okinawa Luxury Stay
              </p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              沖縄の豊かな自然と文化に囲まれた、
              <br />
              プライベートな特別空間をご提供します。
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/gooddaymate_okinawa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-medium">
              施設
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sharrows"
                  className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                >
                  Sharrows
                </Link>
              </li>
              <li>
                <Link
                  href="/aniversario"
                  className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                >
                  Aniversario
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-medium">
              事業内容
            </h4>
            <ul className="space-y-3">
              {[
                "貸別荘の開発・設計",
                "施設運営管理",
                "DXコンサルティング",
                "OTA運用支援",
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold mb-6 font-medium">
              お問い合わせ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  沖縄県国頭郡恩納村
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold shrink-0" />
                <a
                  href="mailto:info@gooddaymate.jp"
                  className="text-white/70 text-sm hover:text-white transition-colors"
                >
                  info@gooddaymate.jp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs tracking-wide">
            © {currentYear} Good Day Mate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-white/40 text-xs hover:text-white/70 transition-colors"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
