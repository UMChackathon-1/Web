import ThumbsUpSvg from "@assets/thumbs-up-gray.svg";
import ThumbsDownSvg from "@assets/thumbs-down-gray.svg";
import DownloadSvg from "@assets/download-gray.svg";

export const Likes = ({ likes, dislikeCount, downloadCount }: { likes?: number; dislikeCount?: number; downloadCount?: number }) => {
  const buttons = [
    { num: likes, svg: ThumbsUpSvg },
    { num: dislikeCount, svg: ThumbsDownSvg },
    { num: downloadCount, svg: DownloadSvg },
  ];
  return (
    <div className="flex gap-2 my-3">
      {buttons.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-1">
          <item.svg />
          <div className="text-[14px] text-[#9797A8]">{item.num}</div>
        </div>
      ))}
    </div>
  );
};
