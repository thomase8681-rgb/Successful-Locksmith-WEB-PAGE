import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "./Header";

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 md:py-24">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-900 to-navy-950"
        aria-hidden="true"
      />
      <div className="container-x text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Need a locksmith in Manchester?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-100">
          Don&apos;t sit in the cold or risk your security. Call now and Nathan
          or the team will be with you in around 30 minutes — no call-out fee,
          honest prices, work guaranteed.
        </p>

        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-8 inline-block text-4xl font-extrabold text-amber-500 transition-colors hover:text-amber-400 sm:text-5xl"
        >
          {PHONE_DISPLAY}
        </a>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`tel:${PHONE_TEL}`} className="btn-primary text-lg">
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Now
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
      </div>
    </section>
  );
}
