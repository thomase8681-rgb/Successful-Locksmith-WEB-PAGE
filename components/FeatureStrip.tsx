"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { SlideLeft, SlideRight } from "@/components/ui/animations";

const POINTS = [
  "Stops dropped and sticking doors",
  "Protects your new lock from wear",
  "No upsell, no extra charge",
];

export default function FeatureStrip() {
  return (
    <section className="bg-navy-50 py-16 md:py-20">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SlideLeft>
            <span className="eyebrow">Included Free</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Free door realignment with every lock change
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-900/70">
              A new lock won&apos;t last if the door isn&apos;t hanging right.
              That&apos;s why every lock change includes a full door
              realignment at no extra cost — so it opens smoothly, closes
              securely and the mechanism isn&apos;t put under strain.
            </p>
            <ul className="mt-6 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-navy-900">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-500 text-navy-950">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </SlideLeft>

          <SlideRight delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-900 shadow-xl">
            <Image
              src="/door.svg"
              alt="Locksmith realigning a front door after a lock change"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </SlideRight>
        </div>
      </div>
    </section>
  );
}
