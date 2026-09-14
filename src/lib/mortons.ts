export const SITE_NAME = "Morton's Seafood Restaurant & Bar";
export const SITE_SHORT = "Morton's Seafood";
export const SITE_LEGAL = "Morton's Seafood Restaurant & Bar";
export const SITE_URL = "https://www.mortonsseafood.com";
export const TITLE = "Morton's Seafood Madisonville | Tchefuncte River Dining";
export const DESCRIPTION =
  "Morton's Seafood serves boiled seafood on the Tchefuncte at 702 Water St, Madisonville, LA. Dawn Davis has run the house since 2000. Call (985) 845-4970.";

export const MOTTO = "Hot boiled seafood";

export const NAP = {
  name: SITE_NAME,
  street: "702 Water St",
  city: "Madisonville",
  region: "LA",
  postal: "70447",
  phone: "(985) 845-4970",
  phoneHref: "tel:+19858454970",
  phoneE164: "+19858454970",
  lat: 30.40419,
  lng: -90.15582,
} as const;

export const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Morton%27s+Seafood+702+Water+St+Madisonville+LA+70447";

export const LANDMARK =
  "On the Tchefuncte River near the Highway 22 / Mulberry Street bridge, next to Madisonville Reception Hall.";

export const HOURS = [
  { days: "Monday", time: "11:00am – 9:00pm" },
  { days: "Tuesday", time: "Closed" },
  { days: "Wednesday", time: "Closed" },
  { days: "Thursday", time: "11:00am – 9:00pm" },
  { days: "Friday", time: "11:00am – 9:00pm" },
  { days: "Saturday", time: "11:00am – 9:00pm" },
  { days: "Sunday", time: "11:00am – 9:00pm" },
] as const;

export const HOURS_SHORT = "Thu–Mon 11am–9pm · Tue–Wed closed";

export const OWNER = {
  name: "Dawn Davis",
  role: "Owner",
  note: "Helped her uncle Morton Davis open the restaurant in 1985, became a partner in 1991, and purchased it in 2000 when Morton retired. Elected president of the Louisiana Restaurant Association in 2006.",
} as const;

export const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/Mortons-Seafood-Restaurant-130113270333909/" },
  { label: "Instagram", href: "https://www.instagram.com/mortonsseafood/" },
  { label: "Yelp", href: "https://www.yelp.com/biz/mortons-seafood-restaurant-and-bar-madisonville-2" },
  {
    label: "TripAdvisor",
    href: "https://www.tripadvisor.com/Restaurant_Review-g40293-d2073208-Reviews-Morton_s_Seafood_Restaurant_and_Bar-Madisonville_Louisiana.html",
  },
] as const;

export const GOOGLE_REVIEWS = {
  href: "https://www.google.com/maps/search/?api=1&query=Morton%27s+Seafood+Madisonville",
} as const;

export const YELP_REVIEWS = {
  rating: "3.4",
  count: "199",
  href: "https://www.yelp.com/biz/mortons-seafood-restaurant-and-bar-madisonville-2",
} as const;

export const NAV = [
  { label: "Menu", href: "/#menu" },
  { label: "About", href: "/#about" },
  { label: "Specials", href: "/#specials" },
  { label: "Cypress Room", href: "/#cypress" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Visit", href: "/#visit" },
  { label: "Reserve", href: "/#reserve" },
] as const;

export const AREAS = ["Madisonville", "Mandeville", "Covington", "Abita Springs", "Northshore"] as const;

export const MENU = [
  {
    slug: "boiled",
    name: "Boiled seafood",
    note: "In season",
    img: "/mortons/crawfish-boil.jpg",
    imgAlt: "Louisiana crawfish boil with corn, potatoes, and sausage at Morton's Seafood",
  },
  {
    slug: "oysters",
    name: "Oysters",
    note: "Raw & grilled",
    img: "/mortons/grilled-oysters.jpg",
    imgAlt: "Chargrilled oysters with garlic butter at a Madisonville seafood restaurant",
  },
  {
    slug: "boats",
    name: "Seafood boats",
    note: "Over-stuffed",
    img: "/mortons/seafood-boat.jpg",
    imgAlt: "Over-stuffed seafood boat with fried Gulf shrimp at Morton's Seafood",
  },
  {
    slug: "poboys",
    name: "Po-boys",
    note: "On French bread",
    img: "/mortons/poboy.jpg",
    imgAlt: "Fried shrimp po-boy on French bread at Morton's Seafood",
  },
  {
    slug: "catch",
    name: "Catch of the day",
    note: "Ask the board",
    img: "/mortons/charbroiled.jpg",
    imgAlt: "Charbroiled fish catch of the day from Morton's Seafood",
  },
  {
    slug: "gumbo",
    name: "Gumbo",
    note: "House bowl",
    img: "/mortons/gumbo.jpg",
    imgAlt: "Shrimp gumbo with rice at Morton's Seafood in Madisonville",
  },
] as const;

export const DRINK_SPECIALS = [
  { day: "Monday", deal: "$4 house martinis" },
  { day: "Thursday", deal: "$5 Bloody Marys" },
  { day: "Friday", deal: "1/2 price bottles of wine" },
  { day: "Saturday", deal: "$5 Orange Crush" },
  { day: "Sunday", deal: "$6 classic mimosa" },
  { day: "Weekday happy hour", deal: "3–6pm · 1/2 price draft & bottle beer and house wine" },
] as const;

export const FOOD_SPECIALS = [
  { day: "Monday", deal: "1/2 price oysters" },
  { day: "Thursday", deal: "1/2 price boiled shrimp" },
  { day: "Daily", deal: "Ask the floor for other dine-in specials" },
] as const;

export const SPECIAL_CARDS = [
  {
    day: "Monday",
    title: "Half-price oysters",
    deal: "$4 house martinis",
    img: "/mortons/grilled-oysters.jpg",
    imgAlt: "Chargrilled oysters for Monday half-price oyster night",
  },
  {
    day: "Thursday",
    title: "Half-price boiled shrimp",
    deal: "$5 Bloody Marys",
    img: "/mortons/shrimp-boil.jpg",
    imgAlt: "Boiled shrimp for Thursday half-price night at Morton's",
  },
  {
    day: "Friday",
    title: "Half-price wine bottles",
    deal: "Dine-in only",
    img: "/mortons/gumbo.jpg",
    imgAlt: "Shrimp gumbo pairing for Friday half-price wine at Morton's Seafood",
  },
  {
    day: "Saturday",
    title: "$5 Orange Crush",
    deal: "House cocktail night",
    img: "/mortons/poboy-side.jpg",
    imgAlt: "Po-boy plate on Saturday at Morton's Seafood",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Call or write",
    body: "Use the form on this page or call (985) 845-4970. The desk confirms the table. This site does not take a card.",
  },
  {
    n: "02",
    title: "Water Street",
    body: "702 Water St in Madisonville. Park on the street or pull a boat up in front of the building when the river allows.",
  },
  {
    n: "03",
    title: "Sit the board",
    body: "Boiled seafood, oysters on the half shell, po-boys, and catch of the day. Specials are dine-in and posted by night.",
  },
  {
    n: "04",
    title: "Cypress Room",
    body: "Private water for up to seventy. Overlooking the Tchefuncte. Call ahead so Dawn’s floor can set the room.",
  },
] as const;

export const YELP_QUOTES = [
  {
    name: "Melinda A.",
    when: "Aug 2026",
    quote: "Highly recommend the gumbo, fried mushrooms and oysters on the half shell.",
  },
  {
    name: "Belinda K.",
    when: "Aug 2026",
    quote:
      "The food is always great, the staff is friendly. I've been going there for 20 years. If you like raw oysters, Morton's never lets you down.",
  },
  {
    name: "Mike H.",
    when: "Apr 2026",
    quote:
      "We have had good experiences dining at Morton's on the Tchefuncte River in Madisonville for many years. Friendly service and a relaxed small town ambiance are standard.",
  },
  {
    name: "Phil F.",
    when: "Sep 2025",
    quote: "Greeted promptly. Seated quickly. Lance was amazing. Food was exquisite. Seasoned perfectly.",
  },
] as const;

export const REVIEWS = YELP_QUOTES;

export const FAQS = [
  {
    q: "Where is Morton's Seafood in Madisonville?",
    a: "702 Water St, Madisonville, LA 70447, on the Tchefuncte River near the Highway 22 bridge. Pull a boat up in front of the building when the weather allows.",
  },
  {
    q: "What days is Morton's open?",
    a: "The shop posts Thursday through Monday, 11:00am to 9:00pm. Tuesday and Wednesday are closed. Confirm a holiday week on Facebook or by phone.",
  },
  {
    q: "Who owns Morton's Seafood?",
    a: "Dawn Davis. Morton Davis opened the restaurant in 1985. Dawn became a partner in 1991 and bought it in 2000 when Morton retired. She was elected president of the Louisiana Restaurant Association in 2006.",
  },
  {
    q: "Can I reserve the Cypress Room?",
    a: "Yes. The Cypress Room overlooks the water and holds up to seventy people. Use the form on this page or call (985) 845-4970.",
  },
  {
    q: "Do you take the boat?",
    a: "The about page on the shop's own site says to pull up right in front of Morton's for dine-in, to-go, or a picnic on the Tchefuncte.",
  },
] as const;

export const RESERVE_OPTIONS = [
  "Table for dining",
  "Cypress Room party",
  "Boiled seafood",
  "Oysters",
  "Po-boy",
  "Catch of the day",
  "Other",
] as const;
