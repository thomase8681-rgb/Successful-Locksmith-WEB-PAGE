import Image from "next/image";
import { Phone, Star, ShieldCheck } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "./Header";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-900">
      {/* Background image placeholder — replace /public/hero.svg with a real photo (e.g. hero.jpg and update this src) */}
      <Image
        src="/hero.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-900/70"
        aria-hidden="true"
      />

      <div className="container-x py-20 md:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow rounded-full bg-amber-500/10 px-3 py-1 ring-1 ring-amber-500/30">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
            5-Star Rated Locksmiths since 2014
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Locked Out in Manchester?{" "}
            <span className="text-amber-500">We&apos;re There in 30 Minutes</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
            Lockouts, broken locks and security upgrades — sorted fast. No
            call-out fee, best prices in Greater Manchester, and damage-free
            entry. Nathan and the team arrive in around 30 minutes, day or
            night.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`tel:${PHONE_TEL}`} className="btn-primary text-lg">
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-100">
            <ShieldCheck className="h-5 w-5 text-amber-500" aria-hidden="true" />
            DBS certified &amp; checked · Damage-free entry · No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
}
