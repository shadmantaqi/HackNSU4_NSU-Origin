import Image from "next/image";
import { useState } from "react";

const Services = () => {
  const [openBookModal, setOpenBookModal] = useState(false);
  const arr = [
    "Online Courses",
    "Consult an IT Professional",
    "Privacy Checkup",
    "Legal Aid",
    "Consult a Psychiatrist",
    "Web Safety Tools",
  ];
  return (
    <div className="container_left container_right relative">
      <h2 className="section-gap__top text-center font-bold text-xl lg:text-2xl 2xl:text-4xl">
        Our Services
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center text-center section-gap">
        {arr.map((item, i) => {
          return (
            <div
              className="w-full h-full min-h-[260px] gap-3 p-10 rounded-lg cursor-pointer"
              key={i}
            >
              <div
                onClick={() => setOpenBookModal(true)}
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
      {openBookModal ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-[#00000050] flex items-center justify-center"
          onClick={() => setOpenBookModal(false)}
        >
          <div className="w-min-[320px] w-[800px] rounded-lg bg-[#F5D4C1]">
            <h3 className="p-3 text-center text-xl lg:text-2xl 2xl:text-4xl font-bold bg-[#FFAC4B] rounded-t-lg">
              Consult an IT Professional
            </h3>
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
              className="rounded-t-lg grid grid-cols-1 lg:grid-cols-2 items-center gap-3"
            >
              <Image
                alt="Mountains"
                src={`/static/images/services${1 + 1}.png`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="p-5 text-center">
              <p className="pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button className="btn bg-[#ffac4b] font-semibold">Book an Appoinment!</button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Services;
