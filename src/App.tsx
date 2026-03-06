import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Landing, Dashboard, Saved, Digest, Settings, Proof, NotFound, TestChecklist, ShipLock } from "./pages";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/digest" element={<Digest />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/proof" element={<Proof />} />
            <Route path="/jt/07-test" element={<TestChecklist />} />
            <Route path="/jt/08-ship" element={<ShipLock />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
