import { Route, Routes } from "react-router-dom";
import dashboardRoutes from "./routes/DashboardRoutes";
import { Toaster } from "react-hot-toast";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <main className="App">
      <Toaster position="top-center" />

      <Routes>
        {dashboardRoutes.map((route, idx: number) => (
          <Route
            key={idx}
            path={route.path}
            element={<DashboardLayout>{route.element}</DashboardLayout>}
          />
        ))}
      </Routes>
    </main>
  );
}

export default App;
