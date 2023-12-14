import React from "react";

import { Logo } from "./logo";
import { Search } from "./search";
import { Actions } from "./actions";

export function Navbar() {
  return (
    <div className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
      <Actions />
    </div>
  );
}
