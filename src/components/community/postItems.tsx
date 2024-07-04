import { useNavigate, useParams } from "react-router-dom";

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
      navigate(`/community/free/${id}`);
    } else {
      navigate(`/community/${type}/${id}`);
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
