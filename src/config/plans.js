const GB = 1024 * 1024 * 1024;

const PLANS = {
  free: {
    id: 'free',
    name: 'Free',
    storageBytes: 5 * GB,
    priceMonthly: 0,
    features: ['5 GB storage', 'Standard uploads', 'Basic sharing'],
  },
  pro: {
    id: 'pro',
    name: 'Pro',
    storageBytes: 100 * GB,
    priceMonthly: 9,
    features: ['100 GB storage', 'Faster uploads', 'File version history'],
  },
  premium: {
    id: 'premium',
    name: 'Premium',
    storageBytes: 1024 * GB,
    priceMonthly: 19,
    features: ['1 TB storage', 'Team sharing', 'Advanced analytics'],
  },
  team: {
    id: 'team',
    name: 'Team',
    storageBytes: 2 * 1024 * GB,
    priceMonthly: 49,
    features: ['Shared workspaces', 'Multiple users', 'Admin controls'],
  },
};

const STORAGE_ADDONS = [
  { id: '50gb', label: '+50 GB', bytes: 50 * GB, price: 4.99 },
  { id: '100gb', label: '+100 GB', bytes: 100 * GB, price: 8.99 },
  { id: '500gb', label: '+500 GB', bytes: 500 * GB, price: 29.99 },
  { id: '1tb', label: '+1 TB', bytes: 1024 * GB, price: 49.99 },
];

const TRIAL_DAYS = 30;

module.exports = { PLANS, STORAGE_ADDONS, TRIAL_DAYS, GB };
