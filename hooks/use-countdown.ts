"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownValue = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
};

function addYears(date: Date, amount: number) {
  const next = new Date(date);
  next.setFullYear(next.getFullYear() + amount);
  return next;
}

function addMonths(date: Date, amount: number) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + amount);
  return next;
}

function calculate(targetDate: string): CountdownValue {
  const now = new Date();
  const target = new Date(targetDate);

  if (target <= now) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    };
  }

  let cursor = new Date(now);
  let years = 0;
  let months = 0;

  while (addYears(cursor, 1) <= target) {
    cursor = addYears(cursor, 1);
    years += 1;
  }

  while (addMonths(cursor, 1) <= target) {
    cursor = addMonths(cursor, 1);
    months += 1;
  }

  let diff = target.getTime() - cursor.getTime();
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minuteMs = 60 * 1000;
  const secondMs = 1000;

  const days = Math.floor(diff / dayMs);
  diff -= days * dayMs;
  const hours = Math.floor(diff / hourMs);
  diff -= hours * hourMs;
  const minutes = Math.floor(diff / minuteMs);
  diff -= minutes * minuteMs;
  const seconds = Math.floor(diff / secondMs);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  };
}

export function useCountdown(targetDate: string) {
  const [value, setValue] = useState<CountdownValue>(() => calculate(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setValue(calculate(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return useMemo(() => value, [value]);
}
