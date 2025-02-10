import {
  useEffect,
  useRef,
  useState,
  type JSX,
  type ImgHTMLAttributes,
} from "react";

type LazyImageProps = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};
type imageNative = ImgHTMLAttributes<HTMLImageElement>;
type Props = LazyImageProps & imageNative;

export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  useEffect(() => {
    if (isLazyLoaded) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) return;
        setCurrentSrc(src);
        observer.disconnect();
        setIsLazyLoaded(true);

        if (typeof onLazyLoad === "function") onLazyLoad(node.current);
      });
    });

    if (node.current) observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
  }, [src, onLazyLoad, isLazyLoaded]);

  return <img ref={node} src={currentSrc} {...imgProps} />;
};
