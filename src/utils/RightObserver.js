import { useEffect } from 'react';
import './Observer.css'; // Import the CSS file

const useIntersectionObserver = (callback, threshold, rootMargin) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('right-visible');
        } else {
          entry.target.classList.remove('right-visible');
        }
      });
    }, { threshold: 0,
         rootMargin :'100px 0px -10px 0px' })

    const hiddenElements = document.querySelectorAll('.right-hidden');
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
