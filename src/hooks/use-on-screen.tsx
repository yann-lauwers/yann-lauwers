import { useState, useEffect, RefObject } from "react"

const useOnScreen = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting))
    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [])

  return isIntersecting
}
export default useOnScreen
