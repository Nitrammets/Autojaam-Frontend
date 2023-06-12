import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  if (router.pathname.includes("/posts/")) {
    return null;
  }

  return (
    <>
      <header className="w-screen flex flex-col md:flex-row min-h-[130px] justify-center bg-aj-dark-black items-center">
        <div className="h-full w-full lg:w-11/12 flex flex-col lg:flex-row items-center justify-center lg:justify-start">
          {/* Logo */}
          <div className="relative w-[265px] h-[64px] min-w-[265px] my-4 lg:my-0">
            <Image src="/autojaamlogo.png" fill alt="Logo" />
          </div>

          {/* Menu */}
          <nav className="lg:pl-2 flex-row items-center justify-start ml-0 lg:ml-auto gap-10 text-md md:text-lg lg:text-xl  font-sans font-light hidden md:flex">
            <Link
              href={"/"}
              className={` uppercase hover:text-aj-red transition-all ${
                router.pathname === "/" ? "text-aj-red" : "text-white"
              }`}
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

          {/* Mobile Menu */}
          {!isExpanded ? (
            <div
              className="h-8 w-8 flex flex-col gap-[6px] cursor-pointer md:hidden"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <hr className="h-[2px] bg-white w-42" />
              <hr className="h-[2px] bg-white w-42" />
              <hr className="h-[2px] bg-white w-42" />
            </div>
          ) : (
            <React.Fragment>
              <div
                className="h-8 w-8 flex items-center justify-center cursor-pointer md:hidden py-2"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <hr className="h-[2px] bg-white w-10 transform rotate-45 absolute" />
                <hr className="h-[2px] bg-white w-10 transform -rotate-45 absolute" />
              </div>
            </React.Fragment>
          )}
        </div>
        {isExpanded && (
          <div className="flex flex-col text-center text-lg gap-y-2 py-4 md:hidden">
            <Link
              href={"/"}
              className={` uppercase hover:text-aj-red transition-all ${
                router.pathname === "/" ? "text-aj-red" : "text-white"
              }`}
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
          </div>
        )}
      </header>
      <div className="h-[6px] w-full bg-aj-red"></div>
    </>
  );
}

export default Header;
