
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);

// Add a global event listener to scroll to top on navigation
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    window.scrollTo(0, 0);
  });
}
