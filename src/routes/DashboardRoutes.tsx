import Home from "../pages/Home/Home";
import Transactions from "../pages/Transactions/Transactions";
import Refunds from "../pages/Refunds/Refunds";
import Payments from "../pages/Payments/Payments";
import Cards from "../pages/Cards/Cards";
import Accounts from "../pages/Accounts/Accounts";
import ManageBills from "../pages/ManageBills/ManageBills";
import Ecommerce from "../pages/Ecommerce/Ecommerce";
import Settings from "../pages/Settings/Settings";
import Contact from "../pages/Contact/Contact";
import { Route } from "../interfaces/Global";

const dashboardRoutes: Route[] = [
  { path: "/", name: "Dashboard", element: <Home /> },
  { path: "/transactions", name: "Transactions", element: <Transactions /> },
  { path: "/refunds", name: "Refunds", element: <Refunds /> },
  { path: "/payments", name: "Payments", element: <Payments /> },
  { path: "/cards", name: "Cards", element: <Cards /> },
  { path: "/accounts", name: "Accounts", element: <Accounts /> },
  { path: "/manage-bills", name: "ManageBills", element: <ManageBills /> },
  { path: "/e-commerce", name: "Ecommerce", element: <Ecommerce /> },
  { path: "/settings", name: "Settings", element: <Settings /> },
  { path: "/contact-us", name: "Contact Us", element: <Contact /> },
];
export default dashboardRoutes;
