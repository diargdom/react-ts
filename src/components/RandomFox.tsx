import { JSX } from "react";

type Props = { image: string };
export const RandomFox = ({ image }: Props): JSX.Element => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img width={320} height="auto" src={image} className="rounded" />
  );
};
