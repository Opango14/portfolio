import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { ScrollToTop } from "./components/ScrollToTop";
import { Contact } from "./pages/Contact";
import { Expertise } from "./pages/Expertise";
import { Home } from "./pages/Home";
import { Journey } from "./pages/Journey";
import { NotFound } from "./pages/NotFound";
import { OpanodePage } from "./pages/OpanodePage";
import { Work } from "./pages/Work";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-ink)]">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/opanode" element={<OpanodePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
