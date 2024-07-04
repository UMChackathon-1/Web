import ProfileSvg from "@assets/profile.svg";
import Title from "@components/home/Title";
import { Link } from "react-router-dom";
import outdoorSleep1 from "@assets/outdoor-sleep1.png";
import outdoorSleep2 from "@assets/outdoor-sleep2.png";
import outdoorSleep3 from "@assets/outdoor-sleep3.png";
import Card from "@components/home/Card";

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

export default function Home() {
  return (
    <main>
      <header className="flex justify-between px-4 items-center mb-9">
        <Link to="/">
          <h1 className="text-[#6B6AFF] text-xl font-semibold">Party Tonight</h1>
        </Link>
        <Link to="/profile">
          <ProfileSvg color="#6B6AFF" />
        </Link>
      </header>
      <section className="px-4 flex flex-col gap-2 mb-12">
        <Title title="외박 인증은 이 사진!" to="/photo" />
        <div className="flex flex-grow overflow-x-scroll">
          {outDoorItems.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="px-4 flex flex-col gap-2 mb-12">
        <Title title="성실한 학생이라도 땡땡이가 필요해" to="/document" />
        <div className="flex flex-grow overflow-x-scroll">
          {documentItems.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
      <section className="px-4">
        <Title title="엄마한테 통화왔을 때 TTS" to="/voice" />
      </section>
      <section className="px-4">
        <Title title="확실한 알리바이가 필요하다면?" to="/community" />
      </section>
    </main>
  );
}
