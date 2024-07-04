import ProfileSvg from "@assets/profile.svg";
import Title from "@components/home/Title";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between px-4 items-center">
        <Link to="/">
          <h1 className="text-[#6B6AFF] text-xl font-semibold">Party Tonight</h1>
        </Link>
        <Link to="/profile">
          <ProfileSvg color="#6B6AFF" />
        </Link>
      </header>
      <section className="px-4">
        <Title title="외박 인증은 이 사진!" to="/photo" />
      </section>
      <section className="px-4">
        <Title title="성실한 학생이라도 땡땡이가 필요해" to="/document" />
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
