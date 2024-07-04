import MicSvg from "@assets/mic.svg";
import Title from "@components/home/Title";
import outdoorSleep1 from "@assets/outdoor-sleep1.png";
import outdoorSleep2 from "@assets/outdoor-sleep2.png";
import outdoorSleep3 from "@assets/outdoor-sleep3.png";
import Card from "@components/home/Card";
import speak from "utils/speak";
import Header from "@components/Header";
import PostItems from "@components/community/postItems";

const outDoorItems = [
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 20 },
  { title: "고등학교 친구들이랑 여행", url: outdoorSleep2, likes: 12 },
  { title: "대학교 친구들이랑 글램핑", url: outdoorSleep3, likes: 30 },
];

const documentItems = [
  { title: "농활 양식", url: outdoorSleep1, likes: 20 },
  { title: "해커톤 양식", url: outdoorSleep2, likes: 12 },
  { title: "캠프 양식", url: outdoorSleep3, likes: 30 },
];

const ttsItems = ["안녕하세요 어머니!!", "잘 놀다 갈게요~", "감사합니다!!"];

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
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="flex flex-col gap-2 px-4 mb-12">
        <Title title="외박 인증은 이 사진!" to="/photo" />
        <div className="flex flex-grow overflow-x-scroll">
          {outDoorItems.map((item) => (
            <Card mr={3} key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2 px-4 mb-12">
        <Title title="성실한 학생이라도 땡땡이가 필요해" to="/document" />
        <div className="flex flex-grow overflow-x-scroll">
          {documentItems.map((item) => (
            <Card mr={3} key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2 px-4 mb-12">
        <Title title="엄마한테 통화왔을 때 TTS" to="/voice" />
        {ttsItems.map((item) => (
          <button
            onClick={() => speak(item)}
            key={item}
            className="flex justify-between px-4 py-2 w-full bg-[#D9D9D9] rounded-sm"
          >
            {item}
            <MicSvg />
          </button>
        ))}
      </section>
      <section className="px-4">
        <Title title="확실한 알리바이가 필요하다면?" to="/community/free" />
        <PostItems postData={freeBoardData.slice(0, 3)} />
      </section>
    </main>
  );
}
