import NavBar from "@components/community/navBar";
import PostItems from "@components/community/postItems";
import { useNavigate, useParams } from "react-router-dom";
import PlusButtonSvg from "@assets/plusButton.svg";
import Header from "@components/Header";

const freeBoardData = [
  {
    id: 1,
    title: "친구 집에서 잔다고 할 때 꿀팁!",
    writer: "레니",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 2,
    title: "이런 공부 모임이면 핑계대기 더 좋다!",
    writer: "학점 C 뿌리기",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 3,
    title: "어떤 교내 행사가 외박 핑계대기 좋을까요?ㅠㅠ",
    writer: "오춘기",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 4,
    title: "기숙사 생활하니까 외박 넘 편하네요 ㅎㅎ",
    writer: "긱사굿",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 5,
    title: "취미 활동 추천해주세요!",
    writer: "취미찾는중",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 6,
    title: "야근을 핑계로 외박 성공한 썰ㅋㅋ",
    writer: "야근러",
    createdAt: "18:30",
    viewCount: 5,
  },
  {
    id: 7,
    title: "학원에서 자율 학습한다고 했는데 걸렸어요ㅠㅠ",
    writer: "학원노예",
    createdAt: "15:45",
    viewCount: 8,
  },
  {
    id: 8,
    title: "친척 집에서 잔다고 할 때 좋은 핑계!",
    writer: "사촌동생사랑",
    createdAt: "16:00",
    viewCount: 4,
  },
  {
    id: 9,
    title: "외박할 때 가장 좋은 핑계 TOP 5",
    writer: "핑계장인",
    createdAt: "22:45",
    viewCount: 15,
  },
  {
    id: 10,
    title: "학교 행사로 외박 성공한 이야기",
    writer: "행사맨",
    createdAt: "13:00",
    viewCount: 11,
  },
];

const partTimeBoardData = [
  {
    id: 1,
    title: "여성분 중 친구인 척 해줄 사람!! 제바류ㅠ",
    writer: "몰래외박장인",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 2,
    title: "고등학교 친구인척 해줄사람..!!",
    writer: "고친구",
    createdAt: "14:20",
    viewCount: 10,
  },
  {
    id: 3,
    title: "이따가 친구인 척하고 전화 좀 대신 받아줄 사람!!",
    writer: "대리전화",
    createdAt: "17:17",
    viewCount: 3,
  },
  {
    id: 4,
    title: "급구! 친구인 척 대화해줄 사람!!",
    writer: "급구",
    createdAt: "19:45",
    viewCount: 5,
  },
  {
    id: 5,
    title: "부모님께 친구인 척 전화해줄 사람 ㅠㅠ",
    writer: "부모님핑계",
    createdAt: "20:10",
    viewCount: 8,
  },
  {
    id: 6,
    title: "이번 주말 친구인 척 해줄 사람 구해요!!",
    writer: "주말외박러",
    createdAt: "21:30",
    viewCount: 12,
  },
  {
    id: 7,
    title: "급! 외박 핑계 대줄 친구 역할 해줄 분!",
    writer: "외박마스터",
    createdAt: "22:00",
    viewCount: 7,
  },
  {
    id: 8,
    title: "오늘 밤 친구인 척 같이 있어줄 사람 구합니다",
    writer: "밤외박",
    createdAt: "23:15",
    viewCount: 4,
  },
  {
    id: 9,
    title: "친구인 척 문자 보내줄 분 구해요!",
    writer: "문자도우미",
    createdAt: "13:45",
    viewCount: 6,
  },
  {
    id: 10,
    title: "부모님께 친구라고 말해줄 사람 급히 구해요!",
    writer: "부모님핑계왕",
    createdAt: "18:30",
    viewCount: 9,
  },
];

export default function Community() {
  const { type } = useParams<string>();
  const navigate = useNavigate();

  const toWrite = (type: string) => {
    navigate(`/writepost/${type}`);
  };

  return (
    <div className="relative">
      <Header />
      <NavBar />
      {type === "free" && <PostItems postData={freeBoardData} />}
      {type === "parttime" && <PostItems postData={partTimeBoardData} />}
      <div className="absolute cursor-pointer bottom-2 right-2" onClick={() => toWrite(type)}>
        <PlusButtonSvg />
      </div>
    </div>
  );
}
