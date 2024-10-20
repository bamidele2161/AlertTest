import { AccountOption, Currency } from "../interfaces/Global";
import {
  MerchantIcon,
  AgentIcon,
  ExportIcon,
  ArrowRedIcon,
  ArrowGreenIcon,
} from "../SVGs/CustomSVGs";
export const accountOptions: AccountOption[] = [
  {
    icon: MerchantIcon,
    title: "Merchant Account",
    description:
      "I want to pay suppliers and receive payment from buyers across the globe.",
  },
  {
    icon: AgentIcon,
    title: "Agent Account",
    description:
      "I want to help clients with global flights, hotels, tuition payments & accommodation.",
  },
  {
    icon: ExportIcon,
    title: "An Exporting Producer",
    description:
      "I want to export finished goods from Africa to a global audience using Ojah by Shiga.",
  },
];

export const industries = [
  { id: 1, industry: "Financial technology" },
  { id: 2, industry: "Ecommerce" },
  { id: 3, industry: "Education" },
  { id: 4, industry: "Health" },
  { id: 5, industry: "Technology" },
];

export const companySize = [
  { id: 1, industry: "Financial technology" },
  { id: 2, industry: "Ecommerce" },
  { id: 3, industry: "Education" },
  { id: 4, industry: "Health" },
  { id: 5, industry: "Technology" },
];
export const sizes = [
  { id: 1, size: "1-100" },
  { id: 2, size: "101-200" },
  { id: 3, size: "201-300" },
];
export const volumes = [
  { id: 1, volume: "$100-$1,000" },
  { id: 2, volume: "$1,000-$10,000" },
  { id: 3, volume: "$10,000-$100,000" },
];
export const africanCountries = [
  { name: "🇪🇬 Egypt", code: "EG", dialCode: "+20" },

  { name: "🇬🇭 Ghana", code: "GH", dialCode: "+233" },
  { name: "🇳🇬 Nigeria", code: "NG", dialCode: "+234" },
  { name: "🇷🇼 Rwanda", code: "RW", dialCode: "+250" },
  { name: "🇿🇦 South Africa", code: "ZA", dialCode: "+27" },
  { name: "🇹🇬 Togo", code: "TG", dialCode: "+228" },
];
export const financialItems = [
  {
    label: "Available Balance",
    key: "balance",
    isCurrency: true,
    change: ArrowGreenIcon,
    changeType: "positive",
    toolTip:
      "Total wallet balance for a selected currency on your business account.",
  },
  {
    label: "Total Transactions",
    key: "transactions",
    isCurrency: false,
    change: ArrowGreenIcon,
    changeType: "positive",
    toolTip:
      "Count of transactions attempts initiated on your business account.",
  },
  {
    label: "Total Settlements",
    key: "settlements",
    isCurrency: true,
    change: ArrowRedIcon,
    changeType: "negative",
    toolTip: "Total payouts made into your business settlement account.",
  },
];
export const conversionRates: Record<Currency, number> = {
  GBP: 2100,
  USD: 1700,
  CAD: 1500,
  NGN: 1,
};

export const financialData = {
  balance: 1000000,
  transactions: 345,
  settlements: 49000000,
};
export const sampleData = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sep",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Oct",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Nov",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Dec",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];
export const options = [
  { value: "week", name: "Weekly" },
  { value: "month", name: "Monthly" },
];
export const statusTab = [
  { id: 1, title: "Money In" },
  { id: 2, title: "Money Out" },
];
