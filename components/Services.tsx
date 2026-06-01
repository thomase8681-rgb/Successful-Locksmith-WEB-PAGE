import {
  Unlock,
  KeyRound,
  DoorClosed,
  RefreshCw,
  Building2,
  Vault,
  Wrench,
  KeySquare,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const SERVICES: Service[] = [
  {
    title: "Emergency Entry",
    description:
      "Locked out? We get you back inside fast with non-destructive, damage-free entry techniques.",
    icon: Unlock,
  },
  {
    title: "Lock Fitting & Replacement",
    description:
      "Supply and fit of high-security, insurance-approved locks on any door type.",
    icon: KeyRound,
  },
  {
    title: "UPVC & Composite Doors",
    description:
      "Multi-point mechanism repairs, handle replacements and faulty lock fixes.",
    icon: DoorClosed,
  },
  {
    title: "Lock Changes & Rekeying",
    description:
      "New home, lost keys or moved tenants? We change or rekey locks the same day.",
    icon: RefreshCw,
  },
  {
    title: "Commercial Security",
    description:
      "Master key systems, access control and robust locks for shops and offices.",
    icon: Building2,
  },
  {
    title: "Safes & Security Upgrades",
    description:
      "Safe opening, installation and home security reviews to keep you protected.",
    icon: Vault,
  },
  {
    title: "Door Repairs",
    description:
      "Misaligned, dropped or sticking doors realigned and repaired — not replaced.",
    icon: Wrench,
  },
  {
    title: "Keyed Alike Systems",
    description:
      "One key for every door. We set up keyed-alike locks for total convenience.",
    icon: KeySquare,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Do</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Complete Locksmith Services Across Manchester
          </h2>
          <p className="mt-4 text-lg text-navy-900/70">
            Whatever the lock, door or emergency — Galvin Locksmiths has it
            covered, with honest pricing and a fast local response.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-navy-900/10 bg-white p-6 transition-all hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-navy-950">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
