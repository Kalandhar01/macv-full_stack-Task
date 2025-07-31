import "tailwindcss";
import { ModeToggle } from "./mode-toggle";

export default function Home() {
  return (
    <div className="poppins">
      <ModeToggle/>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
