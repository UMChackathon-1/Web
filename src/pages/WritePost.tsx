import { ChangeEvent, useState } from "react";
import Header from "@components/Header";
import { useParams } from "react-router-dom";

export default function WritePost() {
  const { type } = useParams<string>();

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="px-4">
      <Header />
      <div className="flex flex-col">
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2 text-white">
            제목을 입력해주세요
          </label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="제목을 입력해주세요"
            className="p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="content" className="mb-2 text-white">
            내용을 입력해주세요
          </label>
          <textarea
            name="content"
            value={content}
            onChange={handleContent}
            placeholder="내용을 입력해주세요"
            className="p-2 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
