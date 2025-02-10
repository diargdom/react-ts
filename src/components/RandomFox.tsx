// Forma explícita "JSX.Element"** → Es la recomendada
//generate a random function between 1 and 123
const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = (): JSX.Element => {
  const image = `https://randomfox.ca/images/${random()}.jpg`;
  return <img width={320} height="auto" src={image} className="rounded" />;
};

// // Usando tipos de React "FunctionComponent"**
// // Forma implícito (JSX:Element)
// export const RandomFox = () => {
//   return (
//     <div>
//       <h2>Hola!</h2>
//     </div>
//   );
// };
// import type { FunctionComponente } from "react";

// export const RandomFox: FunctionComponent = () => {
//   return (
//     <div>
//       <h2>Hola!</h2>
//     </div>
//   );
// };

// // Usando tipos de React "FC"**
// import type { FC } from "react";

// export const RandomFox: FC = () => {
//   return (
//     <div>
//       <h2>Hola!</h2>
//     </div>
//   );
// };
