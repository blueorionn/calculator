import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
    </>
  );
}
