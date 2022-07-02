import { useState, useEffect } from "react";

const observe = (element, callback) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log({
          id: entry.target.id,
          isIntersecting: entry.isIntersecting,
          intersectionRatio: entry.intersectionRatio,
        });
        if (entry.intersectionRatio === 1) {
          console.log(entry.target.id);
          callback(entry.target.id);
        }
      });
    },
    { threshold: 1 }
  );
  observer.observe(element);
};

const useObserverId = (elements) => {
  const [id, setId] = useState(null);

  useEffect(() => {
    if (!elements) return;

    console.log(elements);

    elements.forEach((element) => {
      observe(element, (id) => setId(id));
    });
  }, [elements]);

  return id;
};

export { useObserverId };
