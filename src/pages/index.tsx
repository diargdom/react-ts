import { RandomFox } from "@/components/RandomFox";
import { useState } from "react";

//generate a random function between 1 and 123
const random = (): number => Math.floor(Math.random() * 123) + 1;

//generate simple unique id
const generatetId = () => Math.random().toString(36).substr(2, 9);

type imageItems = Array<{ id: string; url: string }>;

export default function Home() {
  const [images, setImages] = useState<Array<imageItems>>([
    { id: generatetId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generatetId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generatetId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generatetId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);
  return (
    <div>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}
