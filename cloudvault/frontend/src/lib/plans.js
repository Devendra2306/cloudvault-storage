export const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/mo",
    storage: "5 GB",
    features: ["Standard uploads", "Basic sharing", "Web preview"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    period: "/mo",
    storage: "100 GB",
    features: ["Faster uploads", "File version history", "Priority support"],
    highlight: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$19",
    period: "/mo",
    storage: "1 TB",
    features: ["Team sharing", "Advanced analytics", "Custom branding"],
  },
  {
    id: "team",
    name: "Team",
    price: "$49",
    period: "/mo",
    storage: "2 TB",
    features: ["Shared workspaces", "Admin controls", "SSO ready"],
  },
];

export const STORAGE_ADDONS = [
  { id: "50gb", label: "+50 GB", price: "$4.99" },
  { id: "100gb", label: "+100 GB", price: "$8.99" },
  { id: "500gb", label: "+500 GB", price: "$29.99" },
  { id: "1tb", label: "+1 TB", price: "$49.99" },
];
