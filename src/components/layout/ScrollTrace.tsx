import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'how-i-work', label: 'How I work' },
  { id: 'contact', label: 'Contact' },
];

export function ScrollTrace() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0.7]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShow(mq.matches && !reduced.matches);
    const handler = () => setShow(mq.matches && !reduced.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed left-6 top-0 bottom-0 z-30 hidden lg:flex flex-col items-center pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="40"
        height="100%"
        viewBox="0 0 40 1000"
        preserveAspectRatio="none"
        className="fixed top-0 left-6 h-screen"
        style={{ width: '40px' }}
      >
        <path
          d="M20 0 L20 100 L8 130 L8 200 L20 230 L20 350 L8 380 L8 450 L20 480 L20 600 L8 630 L8 700 L20 730 L20 850 L8 880 L8 950 L20 980"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="2"
        />
        <motion.path
          d="M20 0 L20 100 L8 130 L8 200 L20 230 L20 350 L8 380 L8 450 L20 480 L20 600 L8 630 L8 700 L20 730 L20 850 L8 880 L8 950 L20 980"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          style={{ pathLength, opacity }}
        />
      </svg>
    </div>
  );
}
