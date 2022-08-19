import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="container_left container_right bg-[#FFAC4B50] grid grid-cols-1 lg:grid-cols-2 gap-2 section-gap">
        <div>
          <div className="flex items-center gap-3">
          <div>
            <Image src="/static/logo/logo.png" alt="" width="50" height="50" />
          </div>
          <h3 className="text-xl lg:text-2xl 2xl:text-4xl pb-3 font-bold">
            W3 Safety
          </h3>
          </div>
          <p>
            Deserunt consequat incididunt adipisicing est officia elit amet non
            incididunt cillum mollit. Non aliqua aliqua magna aute mollit nulla
            ut aliquip. Excepteur et consequat incididunt voluptate. Excepteur
            sint minim pariatur elit consequat aliqua laboris veniam dolore
            voluptate ipsum nisi.
          </p>
        </div>
        <div>
          <form>
            <h2 className="font-semibold">Contact us</h2>
            <div className="input_fields">
              {/* email */}
              <div className="input_style">
                <label htmlFor="email" className="font-normal">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <button className="btn bg-[#FFAC4B]">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bg-[#FFAC4B] text-center py-5">
        All rights reserved Ⓒ2022
      </div>
    </div>
  );
};

export default Footer;
