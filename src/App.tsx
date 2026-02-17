import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BusinessCard from "./pages/BusinessCard";
import PrintableBusinessCard from "./pages/PrintableBusinessCard";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";
import PageTransition from "./components/PageTransition";
import LitigationPage from "./pages/practice-areas/LitigationPage";
import CorporateLawPage from "./pages/practice-areas/CorporateLawPage";
import CommercialLawPage from "./pages/practice-areas/CommercialLawPage";
import WillsEstatePage from "./pages/practice-areas/WillsEstatePage";
import RealEstatePage from "./pages/practice-areas/RealEstatePage";
import NotarizationPage from "./pages/practice-areas/NotarizationPage";

const queryClient = new QueryClient();

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main id="main-content" role="main" className="flex-1">
      <PageTransition>{children}</PageTransition>
    </main>
    <Footer />
    <FloatingCallButton />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Digital Business Card - standalone without header/footer */}
        <Route path="/card" element={<BusinessCard />} />
        <Route path="/card/print" element={<PrintableBusinessCard />} />
        
        {/* Main website pages with layout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><ServicesPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
        
        {/* Practice Area Pages */}
        <Route path="/services/litigation" element={<MainLayout><LitigationPage /></MainLayout>} />
        <Route path="/services/corporate-law" element={<MainLayout><CorporateLawPage /></MainLayout>} />
        <Route path="/services/commercial-law" element={<MainLayout><CommercialLawPage /></MainLayout>} />
        <Route path="/services/wills-estate-planning" element={<MainLayout><WillsEstatePage /></MainLayout>} />
        <Route path="/services/real-estate" element={<MainLayout><RealEstatePage /></MainLayout>} />
        <Route path="/services/notarization" element={<MainLayout><NotarizationPage /></MainLayout>} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
