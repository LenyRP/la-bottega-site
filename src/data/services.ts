export const services = [
  {
    slug: "dine-in",
    title: "Dine-In Experience",
    desc: "Relaxed, welcoming dining room with attentive service and a full menu.",
  },
  {
    slug: "takeout-delivery",
    title: "Takeout & Online Orders",
    desc: "Order online or call ahead — ready when you are.",
  },
  {
    slug: "catering",
    title: "Catering Services",
    desc: "Off-site catering for corporate events, weddings, and parties.",
  },
  {
    slug: "private-dining",
    title: "Private Dining & Events",
    desc: "Private room available for business dinners, celebrations, and group events.",
  },
  {
    slug: "lunch-menu",
    title: "Lunch Specials",
    desc: "Rotating weekday lunch menu with daily specials and quick service.",
  },
  {
    slug: "dinner-menu",
    title: "Dinner Menu",
    desc: "Full dinner service with appetizers, entrées, and desserts.",
  },
  {
    slug: "brunch",
    title: "Weekend Brunch",
    desc: "Saturday and Sunday brunch with bottomless options and family favorites.",
  },
  {
    slug: "family-menu",
    title: "Kids & Family Menu",
    desc: "Kid-friendly options and family-sized portions for everyone at the table.",
  },
  {
    slug: "gift-cards",
    title: "Gift Cards & Parties",
    desc: "Gift cards available online and in-store. Birthday party packages available.",
  }
] as const;

export type Service = typeof services[number];
