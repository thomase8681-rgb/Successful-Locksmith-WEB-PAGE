"use client";

import { Check, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";
import { WhatsAppIcon } from "./Header";
import { Reveal, ScaleIn } from "@/components/ui/animations";

const CHECKLIST = [
  "No call-out fee, ever",
  "Free door realignment with lock changes",
  "No hidden extras",
  "All work guaranteed",
  "DBS checked & fully insured",
];

export default function Pricing() {
  return (
    <section className="bg-navy-50 py-20 md:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Transparent Pricing</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Honest Prices – No Surprises
          </h2>
        </Reveal>

        <ScaleIn delay={0.1} className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center bg-navy-900 p-8 text-center text-white md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
                Typical job
              </p>
              <p className="mt-2 text-5xl font-extrabold leading-none">
                £75<span className="text-amber-500">–</span>£150
              </p>
              <p className="mt-3 text-navy-100">per job</p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-navy-100">
                Most lockouts and lock changes fall in this range. We confirm
                the exact price before any work begins — no nasty surprises on
                the invoice.
              </p>
            </div>

            <div className="p-8 md:p-10">
              <ul className="space-y-4">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-500 text-navy-950">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-medium text-navy-900">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                <a href={`tel:${PHONE_TEL}`} className="btn-primary w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full"
                >
                  <WhatsAppIcon className="h-5 w-5 text-green-600" />
                  WhatsApp for a Quote
                </a>
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
