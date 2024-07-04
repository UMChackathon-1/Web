import MicSvg from "@assets/mic.svg";
import Title from "@components/home/Title";
import Card from "@components/home/Card";
import speak from "utils/speak";
import Header from "@components/Header";
import PostItems from "@components/community/postItems";
import hackathon from "@assets/Hackathon.png";
import { forms } from "@assets/forms";
import { outDoorItems } from "dummies/outDoorItems";

interface CardProps {
  url: string;
  title: string;
  likes: number;
  id: number;
  mode: "photo" | "editform";
  mr?: number;
}

const ttsItems = ["안녕하세요 어머니!!", "잘 놀다 갈게요~", "감사합니다!!"];

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
];

export default function Home() {
  return (
    <main>
      <Header />
      <img src={hackathon} alt="광고 이미지" className="mb-9" />
      <section className="flex flex-col gap-2 px-4 mb-12">
        <Title title="외박 인증은 이 사진!" to="/photo" />
        <div className="flex flex-grow overflow-x-scroll">
          {outDoorItems.slice(0, 3).map((item) => (
            <Card mode="photo" mr={3} key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2 px-4 mb-12">
        <Title title="성실한 학생이라도 땡땡이가 필요해" to="/document" />
        <div className="flex flex-grow gap-3 overflow-x-scroll">
          {forms.map((item, index) => {
            const props: CardProps = {
              title: item.name,
              url: item.url,
              likes: item.likes,
              id: index + 1,
              mode: "editform",
              mr: 0,
            };
            return <Card key={index + 1} {...props} />;
          })}
        </div>
      </section>
      <section className="flex flex-col gap-2 px-4 mb-12">
        <Title title="엄마한테 통화왔을 때 TTS" to="/voice" />
        {ttsItems.map((item) => (
          <div
            onClick={() => speak(item)}
            key={item}
            className="flex justify-between px-4 py-2 w-full bg-[#D9D9D9] rounded-sm cursor-pointer hover:bg-[#8248F5] hover:text-white"
          >
            {item}
            <MicSvg />
          </div>
        ))}
      </section>
      <section className="px-4">
        <Title title="확실한 알리바이가 필요하다면?" to="/community/free" />
        <PostItems postData={freeBoardData} />
      </section>
    </main>
  );
}
