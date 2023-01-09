import { useEffect, useRef, useState } from "react";

// https://medium.com/the-non-traditional-developer/how-to-use-an-intersectionobserver-in-a-react-hook-9fb061ac6cb5

/**
 * Custom hook to see if ref tagged DOM element is visible so we can mount the next DOM element.
 *
 * @param root The element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.
 * @param rootMargin Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Defaults to all zeros.
 * @param threshold Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. If you only want to detect when visibility passes the 50% mark, you can use a value of 0.5. If you want the callback to run every time visibility passes another 25%, you would specify the array [0, 0.25, 0.5, 0.75, 1]. The default is 0 (meaning as soon as even one pixel is visible, the callback will be run). A value of 1.0 means that the threshold isn't considered passed until every pixel is visible.
 * @returns
 */
const useOnScreen = <T extends HTMLElement>({
  root = null,
  rootMargin = "0px 0px 0px 0px",
  threshold = 0,
}: IntersectionObserverInit) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isNextDomElVisible, setIsNextDomElVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
      root,
      rootMargin,
      threshold,
    });
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (!isNextDomElVisible) {
      setIsNextDomElVisible(true);
    }
  }, [entry?.isIntersecting, isNextDomElVisible]);

  return { ref, entry, isNextDomElVisible };
};
export default useOnScreen;
