import React, { useEffect } from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";

function App() {
  // Scroll to top on page load/refresh and handle navigation
  useEffect(() => {
    // Always scroll to top on page load/refresh
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    
    if (hash) {
      // If there's a hash, scroll to that section after a short delay
      // to ensure the page is fully loaded
      setTimeout(() => {
        const targetElement = document.getElementById(hash.substring(1));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
    
    // Handle browser back/forward navigation
    const handlePopState = () => {
      const currentHash = window.location.hash;
      if (currentHash) {
        setTimeout(() => {
          const targetElement = document.getElementById(currentHash.substring(1));
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };
    
    // Listen for browser navigation events
    window.addEventListener('popstate', handlePopState);
    
    // Handle page refresh - scroll to top
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Handle page visibility change - scroll to top when page becomes visible
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add click listener to document
    document.addEventListener('click', handleClick);
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}

export default App;
