import { Link } from "react-router-dom";
import ProfileSvg from "@assets/profile.svg";
import { ChangeEvent, useState } from "react";

export default function WritePost() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div>
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

      <input
        type="text"
        value={title}
        onChange={handleTitle}
        placeholder="제목을 입력해주세요"
      />
      <textarea
        value={content}
        onChange={handleContent}
        placeholder="내용을 입력해주세요"
      />
    </div>
  );
}
