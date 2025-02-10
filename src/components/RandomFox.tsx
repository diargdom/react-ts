import { useEffect, useRef, useState, type JSX } from "react";

type Props = { image: string };
export const RandomFox = ({ image }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [src, setSrc] = useState("");

  useEffect(() => {
    //new observador
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setSrc(image);
      });
    });

    //observe node
    if (node.current) observer.observe(node.current);

    //desconectar
    return () => {
      observer.disconnect();
    };
  }, [image]);
  return (
    <img
      ref={node}
      width={320}
      height="auto"
      src={src}
      className="rounded bg-gray-300"
    />
  );
};
