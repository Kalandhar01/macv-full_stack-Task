import { Search } from "lucide-react";
import { SiMarketo } from "react-icons/si";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  return (
    <nav className="flex h-[73px] items-center justify-between px-6">
      <Logo />
      <div className="flex items-center justify-center gap-4 w-[30%]">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-primary" />
          <input
            type="search"
            placeholder="Search a coin"
            className="w-full rounded-md border border-gray-300 bg-white px-10 py-2 text-sm text-gray-700 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <header className="flex items-center gap-2 left-10 top-8">
      <div className="size-9 bg-primary rounded-b-md flex justify-center items-center">
        <SiMarketo className="text-white textw-lg" aria-hidden="true" />
      </div>

      <h1 className="font-semibold text-2xl font-poppins max-md:hidden">
        Coin <span className="font-normal text-primary font-blue"> Pulse </span>
      </h1>
    </header>
  );
}
