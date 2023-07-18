import { useEffect } from 'react';
import './Observer.css'; // Import the CSS file

const useIntersectionObserver = (callback, threshold, rootMargin) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('left-visible');
        } else {
          entry.target.classList.remove('left-visible');
        }
      });
    }, { threshold: 1,
         rootMargin :'70px 0px -70px 0px' });

    const hiddenElements = document.querySelectorAll('.left-hidden');
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, [threshold, rootMargin]); // Include threshold in the dependency array

  useEffect(() => {
    if (typeof callback === 'function') {
      callback();
    }
  }, [callback]);
};

export default useIntersectionObserver;
