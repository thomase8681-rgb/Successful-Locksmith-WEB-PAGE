// Central place for business/brand data so it stays consistent across the page.

export const PHONE_DISPLAY = "07930 229289";
export const PHONE_TEL = "+447930229289";
export const WHATSAPP_URL = "https://wa.me/447930229289";

export const FACEBOOK_URL = "https://fb.com/profile.php?id=61555526378686";
export const INSTAGRAM_URL = "#"; // TODO: replace with real Instagram profile URL
export const X_URL = "#"; // TODO: replace with real X/Twitter profile URL

// Google Maps Embed API key. Replace with a real key, or swap the iframe src in
// components/ServiceArea.tsx for a keyless "place" embed share link.
export const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
] as const;

export const SERVICE_AREAS = [
  "Manchester City Centre",
  "Salford",
  "Prestwich",
  "Bury",
  "Bolton",
  "Whitefield",
  "Radcliffe",
  "Middleton",
  "Swinton",
  "Heywood",
  "& surrounding areas",
] as const;
