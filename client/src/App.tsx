import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Manufacturing from "./pages/Manufacturing";
import Contact from "./pages/Contact";

/**
 * Design note: Industrial Corporate Modernism with East Asian manufacturing precision.
 * Keep navigation clean and original-site-inspired: white header, teal/deep-blue accents,
 * high Japanese readability, and a clear B2B manufacturing hierarchy.
 */
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/manufacturing" component={Manufacturing} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
