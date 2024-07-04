import MicSvg from "@assets/mic.svg";
import BackButton from "@components/BackButton";
import { useState } from "react";
import speak from "utils/speak";

export default function Voice() {
  const [text, setText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSpeadk = () => {
    speak(text);
  };

  return (
    <main>
      <BackButton />
      <section className="flex flex-col gap-2 px-4 mt-5 mb-12">
        <h1 className="text-lg font-bold text-[#BE9EFF]">내용 입력하기</h1>
        <textarea
          placeholder="입력한 내용을 TTS가 음성으로 말해줍니다."
          value={text}
          onChange={handleChange}
          className="border border-[#8248F5] w-full min-h-60 bg-[rgba(255,255,255,0.1)] rounded-md px-5 py-4 outline-none text-[rgba(255,255,255,0.5)] placeholder:text-[rgba(255,255,255,0.5)]"
        />
      </section>
      <div className="px-4">
        <button
          onClick={handleSpeadk}
          className="text-white py-6 bg-[rgba(255,255,255,0.2)] flex flex-col w-full items-center gap-2 rounded-md outline-none"
        >
          <MicSvg color="white" />
          생성한 오디오를 들어보세요
        </button>
      </div>
    </main>
  );
}
