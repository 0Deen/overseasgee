export interface Destination {
  name: string;
}

// Order here controls both the destination-strip order in GulfShowcase and
// the dot indicators beneath it.
export const destinations: Destination[] = [
  { name: "Saudi Arabia" },
  { name: "United Arab Emirates" },
  { name: "Qatar" },
  { name: "Kuwait" },
  { name: "Bahrain" },
  { name: "Oman" },
];

export interface JobCategory {
  title: string;
  category: string;
  image: string;
}

export const jobCategories: JobCategory[] = [
  { title: "Caregivers (Qatar)", category: "Caregiving", image: "/images/jobs/caregiver.png" },
  { title: "Men Caregivers", category: "Caregiving", image: "/images/jobs/mencaregivers.png" },
  { title: "Cooks & Kitchen Assistants", category: "Hospitality", image: "/images/jobs/cheef.png" },
  { title: "Cooks", category: "Hospitality", image: "/images/jobs/cook.png" },
  { title: "House Maids", category: "Household", image: "/images/jobs/cleaner.png" },
  { title: "House Maids (Gulf)", category: "Household", image: "/images/jobs/cleanerdesign2.png" },
  { title: "Cleaners (Male)", category: "Cleaning", image: "/images/jobs/mencleaners.png" },
  { title: "Muslim Girl Driver", category: "Driving", image: "/images/jobs/drivers.png" },
  { title: "Muslim Driver", category: "Driving", image: "/images/jobs/driverslady.png" },
  {
    title: "Cleaner + Driver",
    category: "Cleaning & Driving",
    image: "/images/jobs/combined_cleanerdriverfemale.png",
  },
  { title: "Security Guards", category: "Security", image: "/images/jobs/mensecurityofficers.png" },
  { title: "General Roles", category: "Various", image: "/images/jobs/men.png" },
  { title: "Warehouse Helpers", category: "Warehouse", image: "/images/jobs/warehosue.png" },
];
