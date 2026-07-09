'use client'

import { useEffect, useRef, useState } from 'react'

export function useCountUp(
  end: number,
  duration = 1200,
  start = 0,
  active = true,
) {
  const [value, setValue] = useState(start)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return

    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (end - start) * eased))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step)
      }
    }

    frameRef.current = requestAnimationFrame(step)

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [end, duration, start, active])

  return value
}
