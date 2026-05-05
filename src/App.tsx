import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const ForParents = lazy(() => import("./pages/ForParents"));
const ForTeens = lazy(() => import("./pages/ForTeens"));
const ForMentors = lazy(() => import("./pages/ForMentors"));
const Curriculum = lazy(() => import("./pages/Curriculum"));
const Resources = lazy(() => import("./pages/Resources"));
const About = lazy(() => import("./pages/About"));
const LessonWorkspace = lazy(() => import("./pages/lesson/LessonWorkspace"));
const MentorApplication = lazy(() => import("./pages/apply/MentorApplication"));
const MenteeApplication = lazy(() => import("./pages/apply/MenteeApplication"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/for-parents" element={<ForParents />} />
            <Route path="/for-teens" element={<ForTeens />} />
            <Route path="/for-mentors" element={<ForMentors />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/lesson" element={<LessonWorkspace />} />
            <Route path="/lesson/student" element={<LessonWorkspace mode="student" />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply/mentor" element={<MentorApplication />} />
            <Route path="/apply/mentee" element={<MenteeApplication />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
