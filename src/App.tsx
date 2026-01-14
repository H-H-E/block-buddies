import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ForParents from "./pages/ForParents";
import ForTeens from "./pages/ForTeens";
import ForMentors from "./pages/ForMentors";
import Curriculum from "./pages/Curriculum";
import Resources from "./pages/Resources";
import About from "./pages/About";
import MentorApplication from "./pages/apply/MentorApplication";
import MenteeApplication from "./pages/apply/MenteeApplication";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/for-parents" element={<ForParents />} />
          <Route path="/for-teens" element={<ForTeens />} />
          <Route path="/for-mentors" element={<ForMentors />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/apply/mentor" element={<MentorApplication />} />
          <Route path="/apply/mentee" element={<MenteeApplication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
