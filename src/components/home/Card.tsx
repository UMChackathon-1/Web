import ThumbsUpSvg from "@assets/thumbs-up.svg";

interface CardProps {
  url: string;
  title: string;
  likes: number;
  mr?: number;
}

export default function Card({ url, title, likes, mr = 3 }: CardProps) {
  return (
    <div
      className={`min-w-[122px] h-[148px] mr-${mr} bg-no-repeat`}
      style={{ backgroundImage: `url(${url})` }}
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
    </div>
  );
}
