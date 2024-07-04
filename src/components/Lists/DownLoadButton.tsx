import React from "react";
import DownloadSvg from "@assets/download-white.svg";

type DownLoadButtonProps = {
  children: string;
  func: () => void | Promise<void>;
  download?: boolean;
};

export const DownLoadButton: React.FC<DownLoadButtonProps> = ({
  children,
  func,
  download = false,
}) => {
  return (
    <button
      type="button"
      onClick={func}
      className="bg-[#8248F5] flex items-center justify-center gap-3 rounded-full mt-8 h-[44px] w-full text-white px-5 py-2 text-[20px] mb-5"
    >
      {children} {download && <DownloadSvg />}
    </button>
  );
};
