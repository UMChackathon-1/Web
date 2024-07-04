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
  return (
    <div className="mt-4">
      {postData.map((data) => (
        <div
          key={data.id}
          className={`p-4 border-b-2 border-b-gray-500 ${
            postData.length === data.id && "border-b-0"
          }`}
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
