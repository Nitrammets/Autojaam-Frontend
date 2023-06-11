import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <div className="h-80 bg-aj-black">
      <div className="w-11/12 lg:w-10/12 2xl:w-8/12 mx-auto text-white py-4">
        <div className="flex flex-row gap-4">
          <hr className="bg-white w-full h-[2px]"></hr>
          <hr className="bg-white w-full h-[2px]"></hr>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-4 w-1/2">
            <div>
              <div className="flex flex-row gap-2 pt-2 w-full">
                <a href="https://www.facebook.com/autojaam" target="_blank">
                  <AiFillFacebook
                    size={32}
                    className="cursor-pointer hover:text-aj-red transition-all"
                  />
                </a>
                <a
                  href="https://www.instagram.com/autojaam_eesti/"
                  target="_blank"
                >
                  <CiInstagram
                    size={33}
                    className="cursor-pointer hover:text-aj-red transition-all"
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCVPNig3J9LovIM8CZ5osmBw"
                  target="_blank"
                >
                  <IoLogoYoutube
                    size={33}
                    className="cursor-pointer hover:text-aj-red transition-all"
                  />
                </a>
              </div>
              <h1>AUTOJAAM 2023</h1>
            </div>
          </div>
          <div className="w-1/2 text-right">
            <nav className="mt-2 flex flex-col justify-start gap-4 ml-auto text-md md:text-lg lg:text-xl font-sans font-light">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
