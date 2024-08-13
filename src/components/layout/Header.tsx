import Image from "next/image";
import Logo from "/public/panaverse_logo.png";
import Link from "next/link";
import Buttons from "@/components/shared/Buttons";
import Wrapper from "@/components/shared/Wrapper";

const Header = () => {
  return (
    <header className="flex justify-between px-14 items-center h-20 sticky top-0  mx-auto bg-white  leading-4 font-normal ">
      {/* bg-transparent backdrop-blur-3xl for header class if needed */}
      <div>
        <Link href="/">
          <Image src={Logo} alt="Panaverse Logo" />
        </Link>
      </div>

      <div className="">
        <ul className="flex items-center space-x-6 text-zinc-600 font-semibold ">
          <li className=" hover:bg-lime-700">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:bg-lime-700">
            <Link href="/Blog">Blog</Link>
          </li>
          <li className=" hover:bg-lime-700">
            <Link href="/Contact">Contact</Link>
          </li>
          <li>
            <Buttons name="Login" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
