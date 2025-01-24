import Link from "next/link";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Header({ headerMsg }: { headerMsg?: string }) {
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
          <h1
            className={`${spaceGrotesk.className} mr-8 lg:mr-12 text-xl font-bold grow uppercase text-center text-gray-100`}
          >
            {headerMsg}
          </h1>
        </nav>
      </header>
    </>
  );
}
