import { Link } from "react-router-dom";
import ArrowRightSvg from "@assets/arrow-right.svg";

interface TitleProps {
  title: string;
  to: string;
}

export default function Title({ title, to }: TitleProps) {
  return (
    <Link to={to} className="flex items-center gap-1">
      <h2 className="text-[#FFFFFF] text-lg font-extrabold">{title}</h2>
      <ArrowRightSvg color="rgba(255,255,255,0.45)" />
    </Link>
  );
}
