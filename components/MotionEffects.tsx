"use client";

import { useEffect } from "react";

const revealGroups = [
  ".services .section-title",
  ".service-grid article",
  ".signature > *",
  ".instagram-showcase > *",
  ".contact > *",
  "footer > *",
];

export function MotionEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intro = document.querySelectorAll(
      ".site-header > *, .hero-heading .label, .hero-heading h1, .hero-summary > *",
    );

    intro.forEach((element, index) => {
      element.animate(
        [
          { opacity: 0, transform: "translateY(-18px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 750,
          delay: index * 80,
          easing: "cubic-bezier(.22, 1, .36, 1)",
          fill: "both",
        },
      );
    });

    const revealElements = revealGroups.flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector)),
    );

    revealElements.forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(26px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.animate(
            [
              { opacity: 0, transform: "translateY(26px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 700,
              easing: "cubic-bezier(.22, 1, .36, 1)",
              fill: "forwards",
            },
          );
          observer.unobserve(element);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    const whatsapp = document.querySelector(".floating-whatsapp");
    const pulse = whatsapp?.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.045)" },
        { transform: "scale(1)" },
      ],
      { duration: 2800, iterations: Infinity, easing: "ease-in-out" },
    );

    return () => {
      observer.disconnect();
      pulse?.cancel();
    };
  }, []);

  return null;
}
