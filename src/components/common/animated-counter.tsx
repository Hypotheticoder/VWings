"use client";

import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({ end, duration = 2, className }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView) {
      setHasStarted(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      {hasStarted ? <CountUp end={end} duration={duration} /> : 0}
    </div>
  );
}
