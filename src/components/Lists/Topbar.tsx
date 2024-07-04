import { NavLink } from "react-router-dom";

const Links = [
  { to: "/photo", text: "사진" },
  { to: "/document", text: "공모전" },
  { to: "/voice", text: "목소리" },
];

export const Topbar = () => {
  const location = window.location.pathname;
  console.log(location);
  return (
    <div className="flex text-white my-3">
      {Links.map((link) => (
        <NavLink
          to={link.to}
          key={link.to}
          className="flex-1 aria-[current=page]:text-opacity-100 border-opacity-30 aria-[current=page]:border-opacity-100 text-white text-opacity-30 border-black"
        >
          <div className="text-center text-[18px]">{link.text}</div>
          <hr
            className={`w-5/6 mx-auto mt-1 border-white border-[1.5px] ${
              link.to === location ? "" : "border-opacity-30"
            }`}
          />
        </NavLink>
      ))}
    </div>
  );
};
