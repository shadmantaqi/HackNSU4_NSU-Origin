import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { userData } = useContext(UserContext);
  console.log(theme, userData);
  const arr = [
    "Online Courses",
    "Consult an IT Professional",
    "Privacy Checkup",
    "Legal Aid",
    "Consult a Psychiatrist",
    "Web Safety Tools",
  ];
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("/static/images/homeHero.png")`,
          backgroundPosition: "left",
          backgroundSize: "cover",
          minHeight: "80vh",
        }}
      ></div>
      <div className="container_left container_right">
        <h2 className="section-gap__top text-center font-bold text-xl lg:text-2xl 2xl:text-4xl">
          Our Services
        </h2>
        <Link href="/services">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center text-center section-gap cursor-pointer">
            {arr.map((item, i) => {
              return (
                <div
                  className="w-full h-full min-h-[260px] gap-3 p-10 rounded-lg"
                  key={i}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      backgroundColor: `${
                        i === 0 || i === 3
                          ? "#C9EAFD"
                          : i === 1 || i === 4
                          ? "#F5D4C1"
                          : "#D0F1EB"
                      }`,
                    }}
                    className="rounded-t-lg"
                  >
                    <Image
                      alt="Mountains"
                      src={`/static/images/services${i + 1}.png`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div
                    className={`text-white px-2 py-3 rounded-b-lg`}
                    style={{
                      backgroundColor: `${
                        i === 0 || i === 3
                          ? "#91D7E0"
                          : i === 1 || i === 4
                          ? "#FFAC4B"
                          : "#23E9B4"
                      }`,
                    }}
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
