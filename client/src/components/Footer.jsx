import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FooterDetail } from "../utils/constants";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bg-white border-t-8 rounded-t-xl border-x-4 border-cyan-700 bottom-0 py-4 px-7 lg:px-20 space-y-5 w-full">
      <div className="flex justify-between max-sm:gap-9">
        <div className="text-xl">
          <Logo />
        </div>

        <div className=" grid sm:grid-cols-3 grid-cols-2 max-sm:gap-y-5">
          {FooterDetail.map((detail) => (
            <div key={detail.title} className="space-y-4">
              <h3 className="font-medium uppercase text-gray-600">
                {detail.title}
              </h3>
              <div className="flex flex-col gap-2">
                {detail.sub.map((s) => (
                  <Link
                    target="_blank"
                    className="text-gray-600"
                    key={s.name}
                    to={s.url}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between border-t-2 text-gray-700 *:basis-1/2 py-5 ">
        <div>&copy; 2024 Surjith&apos;s blog</div>
        <div className="flex gap-7 text-xl justify-end">
          <Link target="_blank" to="https://github.com/SurjithPeriyasamy">
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/surjith-p-dev005"
          >
            <FaLinkedin />
          </Link>
          <Link target="_blank" to="https://wa.me/919003393417">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
