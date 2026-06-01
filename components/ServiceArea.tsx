import { MapPin } from "lucide-react";
import { SERVICE_AREAS, GOOGLE_MAPS_API_KEY } from "@/lib/constants";

export default function ServiceArea() {
  // Google Maps Embed API URL, centred on Greater Manchester.
  // Replace GOOGLE_MAPS_API_KEY in lib/constants.ts with a real key.
  // Alternatively, paste a keyless "Share > Embed a map" iframe src from Google Maps.
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=Greater+Manchester,UK&zoom=10`;

  return (
    <section className="bg-navy-50 py-20 md:py-24">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Service Area</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Fast Response Across Greater Manchester
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-900/70">
              Based locally and on the road across the region, so help is never
              far away. We cover:
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 text-sm font-semibold text-navy-900"
                >
                  <MapPin className="h-3.5 w-3.5 text-amber-600" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Embedded map. With a placeholder key this shows a "for development"
              overlay — that's expected until you add a real key. */}
          <div className="overflow-hidden rounded-2xl border border-navy-900/10 shadow-xl">
            <iframe
              title="Galvin Locksmiths service area — Greater Manchester"
              src={mapSrc}
              className="aspect-[4/3] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
