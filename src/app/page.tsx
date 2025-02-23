import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="w-full h-max py-4 md:py-8 lg:py-12 px-2">
        <nav className="max-w-screen-2xl mx-auto flex gap-4 items-center">
          <Link href={"/"}>
            <Image
              src={"/logo/logo.svg"}
              alt="Website Logo"
              width={256}
              height={256}
              className="h-8 w-8 lg:h-12 lg:w-12 aspect-auto"
            />
          </Link>
        </nav>
      </header>
      <main className="h-full w-full py-8 lg:py-12 xl:py-16">
        <section className={`max-w-screen-md mx-auto px-4`}>
          <h1
            className={`${spaceGrotesk.className} font-bold text-xl xl:text-2xl text-gray-100`}
          >
            CALCULATOR APP
          </h1>
          <h2 className="my-4 text-base xl:text-lg text-gray-300">
            Welcome to my <strong>Calculator App!</strong>
          </h2>
          <div className="my-6 lg:my-8">
            <p className="text-lg leading-7 font-medium text-gray-400">
              The Calculator App is a multi-functional web application built
              with Next.js to demonstrate my skills in modern web development.
              It includes various calculators, such as basic, scientific, Unit
              Converter, and BMI calculators, designed to cater to diverse user
              needs. This project highlights clean design, responsive UI, and
              efficient client-side calculations, making it a practical and
              polished showcase of my work.
            </p>
          </div>
        </section>
        <section className="max-w-screen-md mx-auto px-4 my-4 md:my-8 lg:my-12">
          <h1
            className={`${spaceGrotesk.className} font-bold text-xl xl:text-2xl text-gray-400`}
          >
            CALCULATORS
          </h1>
          <div className="w-full my-4 md:my-6 lg:my-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 md:gap-4 lg:gap-6">
            <Link
              href={"/basic"}
              className="group w-full p-4 flex gap-2.5 items-end border-2 rounded-md border-gray-800 hover:border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="h-4 w-4 lg:h-6 lg:w-6 aspect-auto fill-gray-200"
              >
                <path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
              </svg>
              <span
                className={`${spaceGrotesk.className} uppercase text-gray-200 group-hover:text-gray-100 transition-all`}
              >
                basic
              </span>
            </Link>
            <Link
              href={"/scientific"}
              className="group w-full p-4 flex gap-2.5 items-end border-2 rounded-md border-gray-800 hover:border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="h-4 w-4 lg:h-6 lg:w-6 aspect-auto fill-gray-200"
              >
                <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z" />
              </svg>
              <span
                className={`${spaceGrotesk.className} uppercase text-gray-200 group-hover:text-gray-100 transition-all`}
              >
                scientific
              </span>
            </Link>
            <Link
              href={"/bmi"}
              className="group w-full p-4 flex gap-2.5 items-end border-2 rounded-md border-gray-800 hover:border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-4 w-4 lg:h-6 lg:w-6 aspect-auto fill-gray-200"
              >
                <path d="M432 32H80a48.05 48.05 0 00-48 48v352a48.05 48.05 0 0048 48h352a48.05 48.05 0 0048-48V80a48.05 48.05 0 00-48-48zm-16.71 165l-52.46 61.73a27.83 27.83 0 01-37.65 4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18 15.6-69.18 24.89a27.84 27.84 0 01-37.65-4.62L96.71 197a32.12 32.12 0 01.42-42c18.93-21.31 72.3-70.87 158.87-70.87S395.94 133.72 414.87 155a32.12 32.12 0 01.42 42z" />
              </svg>
              <span
                className={`${spaceGrotesk.className} uppercase text-gray-200 group-hover:text-gray-100 transition-all`}
              >
                BMI
              </span>
            </Link>
            <Link
              href={"/unit-converter"}
              className="group w-full p-4 flex gap-2.5 items-end border-2 rounded-md border-gray-800 hover:border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                className="h-4 w-4 lg:h-6 lg:w-6 aspect-auto fill-gray-200"
              >
                <path d="M208-120q-37 0-62.5-25.5T120-208v-548q0-29 27-40.5t47 8.5l90 90-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 104 104-54 54 28 28 54-54 80 80q20 20 8.5 47T756-120H208Zm32-120h332L240-572v332Z" />
              </svg>
              <span
                className={`${spaceGrotesk.className} uppercase text-gray-200 group-hover:text-gray-100 transition-all`}
              >
                Unit Converter
              </span>
            </Link>
          </div>
        </section>
        <section className="max-w-screen-md mx-auto px-4 my-4 md:my-8 lg:my-12">
          <div>
            <h2 className="text-gray-300">Find me across web</h2>
            <div className="py-2 md:py-4 w-full flex gap-2 md:gap-4">
              <Link
                href="https://github.com/blueorionn/functionbasket"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group relative flex flex-row-reverse justify-center items-center gap-1 md:gap-2"
              >
                <span className="inline-block absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all group-hover:bg-gray-800"></span>
                <span className="text-gray-400 transition-all group-hover:text-gray-300">
                  Github
                </span>
                <svg
                  className="fill-gray-500 dark:fill-gray-400 h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 hover:fill-gray-800 dark:hover:fill-gray-200 transition-all"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://x.com/SS_Swadhinn"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="group relative flex flex-row-reverse justify-center items-center gap-1 md:gap-2"
              >
                <span className="inline-block absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all group-hover:bg-gray-800"></span>
                <span className="text-gray-400 transition-all group-hover:text-gray-300">
                  Twitter/X
                </span>
                <svg
                  className="fill-gray-500 dark:fill-gray-400 h-3 w-3 md:h-4 md:w-4 group-hover:fill-gray-200 transition-all"
                  viewBox="0 0 1200 1227"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full">
        <section className="w-full max-w-screen-md mx-auto p-4">
          <Link
            href="https://github.com/blueorionn/calculator/blob/main/LICENSE"
            target="_blank"
            className="text-gray-400"
          >
            <span className="cursor-pointer transition-all hover:text-gray-500">
              MIT
            </span>
          </Link>
          <span className="mx-2 lg:mx-4 cursor-default text-gray-400">
            &copy; 2024 Functionbasket.
          </span>
        </section>
      </footer>
    </>
  );
}
