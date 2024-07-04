// import { useParams } from "react-router-dom";
import outdoorSleep1 from "@assets/outdoor-sleep1.png";
import { Likes } from "@components/Lists/Likes";
import { DownLoadButton } from "@components/Lists/DownLoadButton";
import { downloadFile } from "utils/downloadFile";
import BackButton from "@components/BackButton";

const outDoorItems = {
  title: "여자들끼리 바다여행",
  url: outdoorSleep1,
  user: "user1",
  likeCount: 20,
  dislikeCount: 10,
  downloadCount: 5,
  id: 1,
};

export const Photo = () => {
  // const params = useParams();
  // const id = parseInt(params.id?.toString() || "1");
  return (
    <div>
      <BackButton mx={4} />
      <div className="flex items-center w-full">
        <img
          src={outDoorItems.url}
          className={`min-w-[122px] h-[300px] bg-no-repeat mx-auto`}
        />
      </div>
      <div className="px-4">
        <h1 className="text-[20px] mt-5 text-white">{outDoorItems.title}</h1>
        <div className="text-[18px] text-white text-opacity-50">
          @{outDoorItems.user}
        </div>
        <Likes {...outDoorItems} />
        <DownLoadButton
          func={() => {
            downloadFile(outDoorItems.url, outDoorItems.title);
          }}
          download
        >
          다운로드
        </DownLoadButton>
      </div>
    </div>
  );
};
