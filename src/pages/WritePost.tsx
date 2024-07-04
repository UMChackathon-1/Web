import { ChangeEvent, useState } from "react";
import Header from "@components/Header";

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
      <Header />
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
