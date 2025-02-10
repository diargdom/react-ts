import {
  useEffect,
  useRef,
  useState,
  type JSX,
  type ImgHTMLAttributes,
} from "react";

type LazyImageProps = { src: string };
type imageNative = ImgHTMLAttributes<HTMLImageElement>;
type Props = LazyImageProps & imageNative;

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  useEffect(() => {
    //new observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrentSrc(src);
      });
    });

    //observe node
    if (node.current) observer.observe(node.current);

    //desconectar
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return <img ref={node} src={currentSrc} {...imgProps} />;
};
