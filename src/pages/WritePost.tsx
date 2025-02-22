import { ChangeEvent, useState } from "react";
import Header from "@components/Header";
import { useParams } from "react-router-dom";

export default function WritePost() {
  // @ts-ignore
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
    <>
      <Header />
      <div className="flex flex-col px-4">
        <div className="flex flex-col mb-8">
          <label htmlFor="title" className="pl-1 mb-3 text-white">
            제목을 입력해주세요
          </label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={handleTitle}
            placeholder="제목을 입력해주세요"
            className="p-4 text-sm rounded-lg opacity-70"
          />
        </div>
        <div className="flex flex-col mb-8">
          <label htmlFor="content" className="pl-1 mb-3 text-white">
            내용을 입력해주세요
          </label>
          <textarea
            name="content"
            value={content}
            onChange={handleContent}
            placeholder="내용을 입력해주세요"
            className="p-4 text-sm rounded-lg h-[300px] opacity-70"
          />
        </div>
      </div>
      <div className="float-end w-fit cursor-pointer px-6 py-2 bg-[#6B6AFF] text-white rounded-lg">
        작성하기
      </div>
    </>
  );
}
