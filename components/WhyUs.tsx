"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Timer, PoundSterling, MapPin, Star, type LucideIcon } from "lucide-react";
import { SlideLeft, Reveal } from "@/components/ui/animations";

type Point = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const POINTS: Point[] = [
  {
    title: "Fast arrival, every time",
    description:
      "Local vans across Greater Manchester means a ~30 minute response, not a half-day wait.",
    icon: Timer,
  },
  {
    title: "No call-out fee",
    description:
      "The price we quote is the price you pay. You're never charged just for us turning up.",
    icon: PoundSterling,
  },
  {
    title: "Locally trusted since 2014",
    description:
      "A genuine Manchester locksmith — Nathan and the team, not a faceless national call centre.",
    icon: MapPin,
  },
  {
    title: "5-star Google reviews",
    description:
      "Over 70 five-star reviews from real Manchester customers who'd call us again.",
    icon: Star,
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const pointsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const pointItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function WhyUs() {
  return (
    <section id="why" className="bg-white py-20 md:py-24">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <SlideLeft className="relative order-last aspect-[4/5] overflow-hidden rounded-2xl bg-navy-900 shadow-xl sm:aspect-[4/3] lg:order-first lg:aspect-[4/5]">
            <Image
              src="/nathan.jpeg"
              alt="Nathan, owner of Galvin Locksmiths, in front of his branded work van"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover object-top"
            />
          </SlideLeft>

          <div>
            <Reveal>
              <span className="eyebrow">Why Galvin Locksmiths</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Manchester&apos;s #1 Local Locksmith – Here&apos;s Why
              </h2>
            </Reveal>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={pointsContainer}
              className="mt-8 grid gap-6 sm:grid-cols-2"
            >
              {POINTS.map((point) => (
                <motion.div key={point.title} variants={pointItem} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-600">
                    <point.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy-900">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-900/70">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
