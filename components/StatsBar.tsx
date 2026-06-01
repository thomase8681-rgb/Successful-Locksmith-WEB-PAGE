import { Clock, CalendarDays, Star, ShieldCheck, BadgeCheck, PoundSterling, DoorOpen } from "lucide-react";

const STATS = [
  { value: "12+", unit: "Years", label: "serving Greater Manchester", icon: CalendarDays },
  { value: "30 min", unit: "", label: "average arrival time", icon: Clock },
  { value: "5", unit: "Google rating", label: "from 70+ reviews", icon: Star },
];

const TRUST = [
  { label: "Damage-Free Entry", icon: DoorOpen },
  { label: "No Hidden Fees", icon: PoundSterling },
  { label: "Free Door Realignment", icon: ShieldCheck },
  { label: "DBS Certified & Checked", icon: BadgeCheck },
];

export default function StatsBar() {
  return (
    <section className="border-b border-navy-900/10 bg-navy-950 text-white">
      <div className="container-x py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-500/15 text-amber-500">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <div className="text-2xl font-extrabold leading-none">
                  {s.value}{" "}
                  {s.unit && <span className="text-base font-semibold text-navy-100">{s.unit}</span>}
                </div>
                <div className="mt-1 text-sm text-navy-100">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-semibold text-navy-100">
          {TRUST.map((t) => (
            <li key={t.label} className="inline-flex items-center gap-2">
              <t.icon className="h-4 w-4 text-amber-500" aria-hidden="true" />
              {t.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
