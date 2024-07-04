import Card from "@components/home/Card";
import BackButton from "@components/BackButton";
import { outDoorItems } from "dummies/outDoorItems";
import PlusButtonSvg from "@assets/plusButton.svg";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const Modal = styled.div`
  background-color: white;
  width: 200px;
  height: 300px;
`;

export default function Photo() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

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
        console.log(res.data); // 업로드 결과 확인
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setIsOpened(true);
  };

  const ModalBox = () => {
    return (
      <Modal>
        <input type="file" onChange={handleFileInputChange} />
        <button onClick={handleSubmit}>제출하기</button>
      </Modal>
    );
  };

  return (
    <>
      <div>
        <BackButton mx={4} />
        <div className="grid grid-cols-3 gap-1 px-2 mt-5">
          {outDoorItems.map((item) => (
            <Card mode="photo" key={item.id} {...item} mr={0} />
          ))}
        </div>
        <div
          className="absolute cursor-pointer bottom-2 right-2"
          onClick={handleClick}
        >
          <PlusButtonSvg />
        </div>
      </div>
      {isOpened && <ModalBox />}
    </>
  );
}
