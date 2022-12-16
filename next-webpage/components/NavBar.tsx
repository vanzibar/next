import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>EP</h1>
      </div>
      <div className="middleNav">
        <h1>
          <Link href="/">Home</Link>
        </h1>
        <h1>
          <Link href="/funstuff">Fun Stuff</Link>
        </h1>
      </div>
      <div className="pallete">
        <h1>Picker</h1>
      </div>
    </nav>
  );
};

export default NavBar;
