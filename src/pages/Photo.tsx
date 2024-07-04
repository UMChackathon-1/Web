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
  likes: 20,
  dislikes: 10,
  downloads: 5,
  id: 1,
};

export const Photo = () => {
  // const params = useParams();
  // const id = parseInt(params.id?.toString() || "1");
  return (
    <div>
      <BackButton />
      <div className="w-full flex items-center">
        <img
          src={outDoorItems.url}
          className={`min-w-[122px] h-[300px] bg-no-repeat mx-auto`}
        />
      </div>
      <h1 className="text-[20px] mt-5 m-2 text-white">{outDoorItems.title}</h1>
      <div className="text-[18px] text-white text-opacity-50 m-2">
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
  );
};
