import BackButton from "@components/BackButton";
import { ChangeEvent, useState } from "react";
import ProfileExample from "@assets/profileExample.png";
import BlueLikeSvg from "@assets/thumbs-up-blue.svg";
import GrayLikeSvg from "@assets/thumbs-up-gray.svg";
import RedUnLikeSvg from "@assets/thumbs-down-red.svg";
import GrayUnLikeSvg from "@assets/thumbs-down-gray.svg";
import { useLocation } from "react-router-dom";

// const dummyData = {
//   id: 1,
//   title: "자유게시판 게시글 1",
//   content:
//     "자유게시판 게시글 내용입니다. 꽁꽁 얼어붙은 한강 위로 고양이가 걸어다닙니다. 꽁꽁 얼어붙은 고양이 위로 한강이가 걸어다닙니다.",
//   writer: "안녕12",
//   profileImage: ProfileExample,
//   createdAt: "17:17",
//   likeCount: 10,
//   isLiked: true,
//   unLikeCount: 3,
//   isUnLiked: false,
//   viewCount: 3,
//   comment: [
//     {
//       id: 1,
//       writer: "작성자1",
//       profileImage: ProfileExample,
//       content: "댓글 예시1",
//     },
//     {
//       id: 2,
//       writer: "작성자2",
//       profileImage: ProfileExample,
//       content: "댓글 예시2",
//     },
//   ],
// };

export default function PostDetail() {
  const location = useLocation();
  const detailData = location.state.postData;

  // const [detailData, setDetailData] = useState();
  const [comment, setComment] = useState<string>("");

  const handleComment = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <div>
      <BackButton />
      <div className="p-4 border-b-2 border-b-[#252525]">
        <div className="flex flex-row mb-4">
          <img src={detailData.profileImage} className="w-10 h-10 mr-2" />
          <div>
            <div className="text-white">{detailData.writer}</div>
            <div className="text-xs text-[#B0B0B0]">{detailData.createdAt}</div>
          </div>
        </div>

        <div className="mb-5 text-xl text-white">{detailData.title}</div>
        <div className="text-white">{detailData.content}</div>
      </div>

      <div className="p-4">
        {detailData.comment.map((data) => (
          <div key={data.id} className="flex flex-col pb-5">
            <div className="font-semibold text-white">{data.writer}</div>
            <div className="font-medium text-white">{data.content}</div>
          </div>
        ))}
      </div>
      <div className="relative flex p-4">
        <input
          type="text"
          placeholder="댓글을 입력해주세요"
          value={comment}
          onChange={handleComment}
          className="w-full p-4 pr-20 text-sm rounded-lg opacity-70"
        />
        <div className="absolute px-2 py-1 bg-white border-2 border-black rounded-lg cursor-pointer top-6 right-8">
          작성
        </div>
      </div>
    </div>
  );
}
