import ThumbsUpSvg from "@assets/thumbs-up-gray.svg";
import ThumbsDownSvg from "@assets/thumbs-down-gray.svg";
import DownloadSvg from "@assets/download-gray.svg";

export const Likes = ({
  likes,
  dislikes,
  downloads,
}: {
  likes: number;
  dislikes: number;
  downloads: number;
}) => {
  const buttons = [
    { num: likes, svg: ThumbsUpSvg },
    { num: dislikes, svg: ThumbsDownSvg },
    { num: downloads, svg: DownloadSvg },
  ];
  return (
    <div className="flex gap-2 my-3">
      {buttons.map((item) => (
        <div className="flex gap-1 flex-col items-center">
          <item.svg />
          <div className="text-[14px] text-[#9797A8]">{item.num}</div>
        </div>
      ))}
    </div>
  );
};
