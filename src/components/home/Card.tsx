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
      className={`min-w-[122px] h-[148px] bg-no-repeat bg-cover`}
      style={{ backgroundImage: `url(${url})`, marginRight: mr * 4 }}
    >
      <div className="flex flex-col text-white font-bold text-xs justify-between h-full">
        <div className="flex items-center gap-2 p-2">
          <ThumbsUpSvg />
          {likes}
        </div>
        <span className="p-2 truncate bg-gradient-to-b from-[rgba(35,1,79,0)] to-[#23014F]">
          {title}
        </span>
      </div>
    </Link>
  );
}
