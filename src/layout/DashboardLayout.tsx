import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./style.css";
import { Layout } from "../interfaces/Global";

const DashboardLayout: React.FC<Layout> = ({ children }) => {
  return (
    <main className="layout">
      <div className="container">
        <section className="sidebar">
          <Sidebar />
        </section>
        <aside className="content">
          <Header />
          {children}
        </aside>
      </div>
    </main>
  );
};

export default DashboardLayout;
