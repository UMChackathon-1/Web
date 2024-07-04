import NavBar from "@components/community/navBar";
import PostItems from "@components/community/postItems";
import { Link, useParams } from "react-router-dom";
import ProfileSvg from "@assets/profile.svg";
import PlusButtonSvg from "@assets/plusButton.svg";

const freeBoardData = [
  {
    id: 1,
    title: "자유게시판 게시글 1",
    writer: "안녕12",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 2,
    title: "자유게시판 게시글 2",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 3,
    title: "자유게시판 게시글 3",
    writer: "안녕12",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 4,
    title: "자유게시판 게시글 4",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 5,
    title: "자유게시판 게시글 5",
    writer: "안녕12",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 6,
    title: "자유게시판 게시글 6",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 7,
    title: "자유게시판 게시글 7",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 8,
    title: "자유게시판 게시글 8",
    writer: "안녕12",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 9,
    title: "자유게시판 게시글 9",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 10,
    title: "자유게시판 게시글 10",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
];

const partTimeBoardData = [
  {
    id: 1,
    title: "아르바이트 게시글 1",
    writer: "안녕12",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 2,
    title: "아르바이트 게시글 2",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 3,
    title: "아르바이트 게시글 3",
    writer: "안녕12",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 4,
    title: "아르바이트 게시글 4",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 5,
    title: "아르바이트 게시글 5",
    writer: "안녕12",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 6,
    title: "아르바이트 게시글 6",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 7,
    title: "아르바이트 게시글 7",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 8,
    title: "아르바이트 게시글 8",
    writer: "안녕12",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 9,
    title: "아르바이트 게시글 9",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 10,
    title: "아르바이트 게시글 10",
    writer: "촉촉한 초코칩3",
    createdAt: "14:20",
    viewCount: 10,
  },
];

export default function Community() {
  const { type } = useParams();

  return (
    <div className="relative">
      <header className="flex items-center justify-between px-4 mt-4 mb-9">
        <Link to="/">
          <h1 className="text-[#6B6AFF] text-xl font-semibold">
            Party Tonight
          </h1>
        </Link>
        <Link to="/profile">
          <ProfileSvg color="#6B6AFF" />
        </Link>
      </header>
      <NavBar />
      {type === "free" && <PostItems postData={freeBoardData} />}
      {type === "parttime" && <PostItems postData={partTimeBoardData} />}
      <div className="absolute cursor-pointer bottom-2 right-2">
        <PlusButtonSvg />
      </div>
    </div>
  );
}
