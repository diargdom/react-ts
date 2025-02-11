import { LazyImage } from "@/components/LazyImage";
import { useState } from "react";
import type { MouseEventHandler } from "react";
import { random } from "lodash";

//generate simple unique id
const generatetId = () =>
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

//generate a random function between 1 and 123
const myRandom = (): number => random(1, 123);

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: IFoxImageItems = {
      id: generatetId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`,
    };
    setImages([...images, newImageItem]);
    //window.plausible(PlausibleEvents.ADD_FOX);
  };
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button
          onClick={addNewFox}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add new Fox
        </button>
        {images.map(({ id, url }, index) => (
          <div key={id} className="p-4">
            <LazyImage
              src={url}
              width={320}
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => console.log("hey")}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
