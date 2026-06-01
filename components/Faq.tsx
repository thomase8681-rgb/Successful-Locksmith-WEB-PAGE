"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type QA = {
  question: string;
  answer: string;
};

const FAQS: QA[] = [
  {
    question: "Should I change the locks when I move into a new home?",
    answer:
      "Yes — we always recommend it. You have no way of knowing how many keys are out there from previous owners, tenants, agents or tradespeople. A same-day lock change is quick, affordable and gives you complete peace of mind that you’re the only key holder.",
  },
  {
    question: "How quickly can you get to me?",
    answer:
      "Our average arrival time across Greater Manchester is around 30 minutes. Send us your location over WhatsApp and we’ll share live updates so you know exactly when Nathan or the team will be with you.",
  },
  {
    question: "Do you charge a call-out fee?",
    answer:
      "Never. There’s no charge just for turning up. We give you a clear, fixed price before any work starts, so the number we quote is the number you pay.",
  },
  {
    question: "My UPVC door handle has gone floppy or won’t lift — can you fix it?",
    answer:
      "Almost always, yes. A floppy or stiff UPVC handle is usually a worn spring cassette inside the handle or a failing multi-point mechanism. We carry common parts on the van and can normally repair it the same day without replacing the whole door.",
  },
  {
    question: "Will the locks meet my insurance requirements?",
    answer:
      "We fit insurance-approved locks as standard — typically a BS 3621 5-lever deadlock on wooden doors, or a compliant multi-point locking system on UPVC and composite doors. Tell us your insurer’s requirements and we’ll make sure your locks meet them.",
  },
  {
    question: "Are you available 24/7?",
    answer:
      "We cover emergencies day and night across Greater Manchester. For genuine lockouts and security emergencies, call us any time on 07930 229289 and we’ll come out to you.",
  },
];

function FaqItem({ qa, index }: { qa: QA; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-navy-900/10">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold text-navy-900 transition-colors hover:text-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2"
        >
          {qa.question}
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-amber-600 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-5 text-navy-900/70"
      >
        <p className="leading-relaxed">{qa.answer}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faqs" className="bg-white py-20 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Common Questions</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {FAQS.map((qa, i) => (
            <FaqItem key={qa.question} qa={qa} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
