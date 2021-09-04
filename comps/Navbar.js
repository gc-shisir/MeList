import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/logo.png" width={100} height={80} />
          </a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a href="">About</a>
      </Link>
      <Link href="/members">
        <a href="">Members listing </a>
      </Link>
    </nav>
  );
};

export default Navbar;
