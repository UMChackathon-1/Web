import ThumbsUpSvg from "@assets/thumbs-up.svg";
import { Link } from "react-router-dom";

interface CardProps {
  url: string;
  title: string;
  likes: number;
  id: number;
  mode: "photo" | "editform";
  mr?: number;
}

export default function Card({
  url,
  title,
  likes,
  id,
  mode,
  mr = 3,
}: CardProps) {
  const path = `/${mode}/${id}`;

  return (
    <Link
      to={path}
      className={`min-w-[122px] h-[148px] bg-no-repeat bg-cover relative group rounded-lg`}
      style={{ backgroundImage: `url(${url})`, marginRight: mr * 4 }}
    >
      <div className="absolute inset-0 transition-opacity duration-300 bg-black rounded-lg opacity-0 group-hover:opacity-40"></div>
      <div className="absolute inset-0 flex flex-col justify-between h-full text-xs font-bold text-white transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100">
        <div className="flex flex-row items-end p-2">
          <ThumbsUpSvg />
          <div className="ml-1">{likes}</div>
        </div>
        <span className="rounded-b-lg p-2 truncate bg-gradient-to-b from-[rgba(0,0,0,0.61)] to-[rgba(0,0,0,1)]">
          {title}
        </span>
      </div>
    </Link>
  );
}
