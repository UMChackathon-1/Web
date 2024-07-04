import Card from "@components/home/Card";
import BackButton from "@components/BackButton";
import { outDoorItems } from "dummies/outDoorItems";
import PlusButtonSvg from "@assets/plusButton.svg";
import styled from "styled-components";
import { ChangeEvent, useRef, useState } from "react";
import axios from "axios";

const Modal = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
  padding: 16px;
  border-radius: 16px;
  background-color: white;
  width: 300px;
  height: 200px;
`;

export default function Photo() {
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
  const [data, setData] = useState(outDoorItems);

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState<string>("");

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files![0];
    handleImageChange(selectedFile);
  };

  const handleImageChange = (file: File) => {
    setImageFile(file);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      if (imageFile) {
        formData.append("image", imageFile); // 이미지 파일 추가

        const res = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/images`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/pictures`,
          {
            url: res.data.imageUrl,
            title: title,
          },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        setData((prev) => [
          ...prev,
          {
            title: title,
            url: res.data.imageUrl,
            user: "이면지",
            likes: 0,
            dislikeCount: 0,
            downloadCount: 0,
            id: prev.length + 1,
          },
        ]);
      }
      setIsOpened(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setIsOpened(true);
  };

  const ModalBox = () => {
    return (
      <Modal className="flex flex-col items-center justify-between">
        <input
          className="px-2 py-1 mb-3 border-2 border-black rounded-lg"
          type="text"
          placeholder="사진의 제목을 입력해주세요"
          value={title}
          onChange={handleTitle}
        />
        <button className="mb-3" onClick={() => inputRef.current?.click()}>
          업로드
        </button>
        <input
          type="file"
          onChange={handleFileInputChange}
          style={{ display: "none" }}
          ref={inputRef}
        />
        <button
          className="px-4 py-1 border-2 border-black rounded-xl"
          onClick={handleSubmit}
        >
          제출하기
        </button>
      </Modal>
    );
  };

  return (
    <>
      <div className="relative">
        <BackButton mx={4} />
        <div className="grid grid-cols-3 gap-1 px-2 mt-5">
          {data.map((item) => (
            <Card mode="photo" key={item.id} {...item} mr={0} />
          ))}
        </div>
        <div
          className="absolute cursor-pointer bottom-2 right-2"
          onClick={handleClick}
        >
          <PlusButtonSvg />
        </div>
        {isOpened && <ModalBox />}
      </div>
    </>
  );
}
