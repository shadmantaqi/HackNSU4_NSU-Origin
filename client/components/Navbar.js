import Link from "next/link";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Articles",
    link: "/articles",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="nav_container">
        <div>logo</div>
        <div className="n_c__links">
          <ul>
            {links.map((item, i) => {
              const { name, link } = item;
              return (
                <li key={i}>
                  <Link href={link}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          user
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
