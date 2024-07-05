import { useNavigate, useParams } from "react-router-dom";

import { freeDummyData } from "@pages/freeDummyData";
import { partTimeDummyData } from "@pages/partTimeDummyData";

interface Props {
  postData: {
    id: number;
    title: string;
    writer: string;
    createdAt: string;
    viewCount: number;
  }[];
}

export default function PostItems({ postData }: Props) {
  const navigate = useNavigate();
  const { type } = useParams<string>();

  const handleClick = (type: string, id: number) => {
    if (type === undefined) {
      navigate(`/community/free/${id}`, {
        state: { postData: freeDummyData.find((item) => item.id === id) },
      });
    } else {
      if (type === "free") {
        navigate(`/community/${type}/${id}`, {
          state: { postData: freeDummyData.find((item) => item.id === id) },
        });
      } else {
        navigate(`/community/${type}/${id}`, {
          state: { postData: partTimeDummyData.find((item) => item.id === id) },
        });
      }
    }
  };

  return (
    <div className="p-4">
      {postData.map((data, index) => (
        <div
          key={data.id}
          className={`p-4 px-2 border-b-2 border-b-gray-500 ${
            index === postData.length - 1 ? "border-b-0" : ""
          }`}
          onClick={() => handleClick(type, data.id)}
        >
          <div className="text-base font-semibold text-white cursor-pointer hover:text-[#6B6AFF]">
            {data.title}
          </div>
          <div className="text-xs font-medium text-white opacity-50">
            {data.writer} {data.createdAt} {data.viewCount}
          </div>
        </div>
      ))}
    </div>
  );
}
