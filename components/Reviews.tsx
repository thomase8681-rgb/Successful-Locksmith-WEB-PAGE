import { Star, Quote } from "lucide-react";

type Review = {
  quote: string;
  name: string;
  area: string;
};

const REVIEWS: Review[] = [
  {
    quote:
      "Locked myself out at 11pm and Nathan was there in 25 minutes. Had me back inside in two minutes flat with no damage to the door. Lifesaver.",
    name: "Sarah H.",
    area: "Prestwich",
  },
  {
    quote:
      "Changed all the locks the day we moved into our new house. Fair price, no call-out fee and he even realigned the back door for free. Brilliant.",
    name: "James M.",
    area: "Salford",
  },
  {
    quote:
      "Our UPVC front door wouldn’t lock. Nathan diagnosed a worn spring cassette over WhatsApp and fixed it the same afternoon. Highly recommend.",
    name: "Priya K.",
    area: "Whitefield",
  },
  {
    quote:
      "Used Galvin for our shop’s security upgrade. Professional, tidy and explained everything. Prices were the best I found in Manchester.",
    name: "Daniel O.",
    area: "Manchester City Centre",
  },
  {
    quote:
      "Quick to respond, turned up when he said he would, and the price was exactly what was quoted. Can’t ask for more from a locksmith.",
    name: "Emma T.",
    area: "Bury",
  },
  {
    quote:
      "Lost my only key on a Sunday. Galvin answered straight away and sorted a new lock within the hour. Genuinely 5-star service.",
    name: "Mark R.",
    area: "Bolton",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white py-20 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Real Reviews</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            What Manchester Customers Say
          </h2>
          <p className="mt-4 text-lg text-navy-900/70">
            Rated 5 stars from over 70 reviews across Greater Manchester.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-navy-50 p-6"
            >
              <Quote className="h-7 w-7 text-amber-500/60" aria-hidden="true" />
              <Stars />
              <blockquote className="mt-3 flex-1 text-navy-900/80">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-navy-900/10 pt-4 text-sm font-bold text-navy-900">
                {review.name}
                <span className="ml-2 font-medium text-navy-900/60">
                  {review.area}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
