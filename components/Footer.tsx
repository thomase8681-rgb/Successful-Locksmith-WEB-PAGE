import { Phone, Facebook, Instagram, KeyRound } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  X_URL,
  NAV_LINKS,
  SERVICE_AREAS,
} from "@/lib/constants";
import { WhatsAppIcon } from "./Header";

// lucide-react no longer ships a Twitter/X glyph, so use a small inline mark.
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const areasLine = SERVICE_AREAS.filter((a) => !a.startsWith("&")).join(" · ");

  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-amber-500 text-navy-950">
                <KeyRound className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-extrabold">
                Galvin<span className="text-amber-500"> Locksmiths</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              5-star rated emergency locksmiths serving {areasLine} &amp;
              surrounding areas across Greater Manchester since 2014.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-amber-500 hover:text-amber-400"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-amber-400">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#top" className="hover:text-amber-400">
                  Back to top
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Galvin Locksmiths on Facebook"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Galvin Locksmiths on WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                aria-label="Galvin Locksmiths on Instagram"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={X_URL}
                aria-label="Galvin Locksmiths on X"
                className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-4 text-xs text-navy-100/60">
              Instagram &amp; X links are placeholders — update them in{" "}
              <code className="rounded bg-white/10 px-1">lib/constants.ts</code>.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-navy-100/70 sm:flex-row">
          <p>© {year} Galvin Locksmiths. All rights reserved.</p>
          <p>Owner &amp; locksmith: Nathan · Greater Manchester</p>
        </div>
      </div>
    </footer>
  );
}
