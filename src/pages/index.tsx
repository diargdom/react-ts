import { LazyImage } from "@/components/LazyImage";
import { useState } from "react";
import type { MouseEventHandler } from "react";

//generate a random function between 1 and 123
const random = (): number => Math.floor(Math.random() * 123) + 1;

//generate simple unique id
const generatetId = () => Math.random().toString(36).substr(2, 9);

type imageItems = { id: string; url: string };

export default function Home() {
  const [images, setImages] = useState<Array<imageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const newImageItem: imageItems = {
      id: generatetId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([...images, newImageItem]);
  };
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button onClick={addNewFox}>Add new Fox</button>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <LazyImage
              src={url}
              width={320}
              height="auto"
              className="rounded bg-gray-300"
              onClick={() => console.log("hey")}
            />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
