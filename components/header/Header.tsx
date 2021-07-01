import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </header>
  );
};

export default Header;
