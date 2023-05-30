import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <>
      <header className="w-screen flex flex-row h-[130px] justify-center bg-aj-black">
        <div className="h-full w-3/4 flex flex-row items-center">
          {/* Logo */}
          <div className="relative w-[265px] h-[64px] min-w-[265px]">
            <Image src="/autojaamlogo.png" fill />
          </div>

          {/* Menu */}
          <nav className="flex flex-row items-center justify-start ml-auto gap-10 text-2xl font-sans font-extralight">
            <Link
              href={"/"}
              className="text-white uppercase hover:text-aj-red transition-all"
            >
              Proovisõidud
            </Link>
            <Link
              href={"/"}
              className="text-white uppercase hover:text-aj-red transition-all"
            >
              Sõidukiotsing
            </Link>
            <Link
              href={"/"}
              className="text-white uppercase hover:text-aj-red transition-all"
            >
              Autofotograafia
            </Link>
            <Link
              href={"/"}
              className="text-white uppercase hover:text-aj-red transition-all"
            >
              Galeriid
            </Link>
            <Link
              href={"/"}
              className="text-white uppercase hover:text-aj-red transition-all"
            >
              Meist
            </Link>
          </nav>
        </div>
      </header>
      <div className="h-[6px] w-full bg-aj-red"></div>
    </>
  );
}

export default Header;
