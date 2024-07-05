import { useNavigate, useParams } from "react-router-dom";

import { freeDummyData } from "@pages/freeData";
import { partTimeDummyData } from "@pages/partTimeData";

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
        // @ts-ignore
        state: { postData: freeDummyData.find((item) => item.id === id) },
      });
    } else {
      if (type === "free") {
        navigate(`/community/${type}/${id}`, {
          // @ts-ignore
          state: { postData: freeDummyData.find((item) => item.id === id) },
        });
      } else {
        navigate(`/community/${type}/${id}`, {
          // @ts-ignore
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
          // @ts-ignore
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
