import { Likes } from "@components/Lists/Likes";
import { DownLoadButton } from "@components/Lists/DownLoadButton";
import { downloadFile } from "utils/downloadFile";
import BackButton from "@components/BackButton";
import { useParams } from "react-router-dom";
import { outDoorItems } from "dummies/outDoorItems";

export const Photo = () => {
  const params = useParams();
  const id = parseInt(params.id! || "1");
  const outDoorItem = outDoorItems.find((item) => item.id === id);
  return (
    <div>
      <BackButton mx={4} />
      <div className="flex items-center w-full">
        <img src={outDoorItem!.url} className={`min-w-[122px] h-[300px] bg-no-repeat mx-auto`} />
      </div>
      <div className="px-4">
        <h1 className="text-[20px] mt-5 text-white">{outDoorItem!.title}</h1>
        <div className="text-[18px] text-white text-opacity-50">@{outDoorItem!.user}</div>
        <Likes {...outDoorItem} />
        <DownLoadButton
          func={() => {
            downloadFile(outDoorItem!.url, outDoorItem!.title);
          }}
          download
        >
          다운로드
        </DownLoadButton>
      </div>
    </div>
  );
};
