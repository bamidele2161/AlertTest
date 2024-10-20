import {
  AccountIcon,
  CardIcon,
  ContactIcon,
  DashIcon,
  EcommerceIcon,
  ManageIcon,
  PaymentIcon,
  RefundIcon,
  SetIcon,
  TransactionsIcon,
} from "../../SVGs/CustomSVGs";

export const SidebarData = [
  {
    id: "tab1",
    icon: <DashIcon />,
    title: "Dashboard",
    url: "/",
  },
  {
    id: "tab2",
    icon: <TransactionsIcon />,
    title: "Transactions",
    url: "/transactions",
  },
  {
    id: "tab3",
    icon: <RefundIcon />,
    title: "Refunds",
    url: "/refunds",
  },
  {
    id: "tab4",
    icon: <PaymentIcon />,
    title: "Payments",
    url: "/payments",
  },
  {
    id: "tab5",
    icon: <CardIcon />,
    title: "Cards",
    url: "/cards",
  },
  {
    id: "tab6",
    icon: <AccountIcon />,
    title: "Accounts",
    url: "/accounts",
  },
  {
    id: "tab7",
    icon: <ManageIcon />,
    title: "Manage Bills",
    url: "/manage-bills",
  },
  {
    id: "tab8",
    icon: <EcommerceIcon />,
    title: "Ecommerce",
    url: "/e-commerce",
  },
];

export const SubSidebarData = [
  {
    id: "tab9",
    icon: <SetIcon />,
    title: "Settings",
    url: "/settings",
  },
  {
    id: "tab10",
    icon: <ContactIcon />,
    title: "Contact Us",
    url: "/contact-us",
  },
];
