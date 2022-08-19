import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
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
  useEffect(() => {
    setOpenUserMenu(false);

    return () => setOpenUserMenu(false);
  }, [router]);
  return (
    <nav className="container_left container_right">
      <div className="nav_container">
        <div className="flex items-center justify-start gap-5">
          <div>
            <Image src="/static/logo/logo.png" alt="" width="50" height="50" />
          </div>
          <div className="n_c__links">
            <ul>
              {links.map((item, i) => {
                const { name, link } = item;
                console.log(router.pathname.includes(link), "<---");
                return (
                  <li
                    key={i}
                    className={
                      link.includes(router.pathname) &&
                      link.length === router.pathname.length
                        ? "active_link"
                        : ""
                    }
                  >
                    <Link href={link}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="n_c__account">
          <div className="flex items-center justify-end gap-3">
            <div className="flex flex-col items-end justify-center">
              <p className="font-semibold">John Doe</p>
              <p className="font-thin text-gray-400">Member</p>
            </div>
            <div className="bg-gray-300 rounded-full relative h-10 w-10">
              <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faUser}
                  onClick={() => setOpenUserMenu(true)}
                />
              </div>
            </div>
          </div>
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
