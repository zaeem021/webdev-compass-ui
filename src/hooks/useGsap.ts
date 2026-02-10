import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".gsap-fade-in");
    if (!els.length) return;

    gsap.set(els, { opacity: 0, y: 40 });
    const triggers = Array.from(els).map((el) =>
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      })
    );

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
      ScrollTrigger.refresh();
    };
  }, []);

  return ref;
};

export const useGsapStagger = (selector: string, stagger = 0.12) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(selector);
    if (!els.length) return;

    gsap.set(els, { opacity: 0, y: 30 });
    const tween = gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      ScrollTrigger.refresh();
    };
  }, [selector, stagger]);

  return ref;
};

export const useGsapHero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const heading = ref.current.querySelector(".hero-heading");
    const sub = ref.current.querySelector(".hero-sub");
    const cta = ref.current.querySelector(".hero-cta");

    tl.from(heading, { opacity: 0, y: 50, duration: 0.8 })
      .from(sub, { opacity: 0, y: 30, duration: 0.6 }, "-=0.4")
      .from(cta, { opacity: 0, y: 20, duration: 0.5 }, "-=0.3");

    return () => { tl.kill(); };
  }, []);

  return ref;
};

export { gsap, ScrollTrigger };
