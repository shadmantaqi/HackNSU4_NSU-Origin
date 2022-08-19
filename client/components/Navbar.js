import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const router = useRouter();

  console.log(router.pathname);
  useEffect(() => {
    setOpenUserMenu(false);

    return () => setOpenUserMenu(false);
  }, [router]);
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
        <div className="n_c__account">
          <FontAwesomeIcon
            icon={faUser}
            onClick={() => setOpenUserMenu(true)}
          />
        </div>
      </div>
      {openUserMenu ? (
        <div
          className="n_c__user_profile__menu"
          onClick={() => setOpenUserMenu(false)}
        >
          <div>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/login">Login</Link>
            <button className="btn bg-red-600 text-white">Logout</button>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
