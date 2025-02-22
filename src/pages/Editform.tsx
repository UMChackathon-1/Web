// import Hackathon from "@assets/Hackathon.png";

import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import BackButton from "@components/BackButton";
import { forms } from "@assets/forms";
import { useParams } from "react-router-dom";
import { DownLoadButton } from "@components/Lists/DownLoadButton";

export interface formProps {
  name: string;
  url: string;
  visible_height: number;
  width: number;
  height: number;
  user: string;
  likes: number;
  texts: Array<{
    name: string;
    text: string;
    top: number;
    left: number;
    font: number;
    color: string;
  }>;
}

export default function Editform() {
  const params = useParams();
  const id = parseInt(params.id?.toString() || "1") - 1;
  const [exports, setExports] = useState<boolean>(false);
  const [texts, setTexts] = useState<string[]>(["", "", "", ""]);
  const onClickDownloadButton = async () => {
    setExports(true);
  };

  useEffect(() => {
    if (!exports) return;
    const target = document.getElementById("form");
    if (!target) {
      return alert("사진 저장에 실패했습니다.");
    }
    setExports(false);
    html2canvas(target).then((canvas) => {
      const link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL("image/png");
      link.download = "image.png";
      link.click();
      document.body.removeChild(link);
    });
  }, [exports]);

  return (
    <>
      <BackButton mx={4} />
      <div
        className={`inline-block object-cover bg-cover relative`}
        style={{
          width: "100%",
          height: forms[id].visible_height,
          backgroundImage: "url(" + forms[id].url + ")",
        }}
      ></div>
      <div className="px-4">
        <h1 className="text-[20px] mt-5 text-white">{forms[id].name}</h1>
        <div className="text-[18px] text-white text-opacity-50">
          @{forms[id].user}
        </div>
        <form className="flex flex-col gap-2 mt-5">
          {forms[id].texts.map((text, index) => (
            <div key={index}>
              <label htmlFor={text.name} className="text-[16px] text-[#BE9EFF]">
                {text.name}
              </label>
              <input
                type="text"
                id={text.name}
                placeholder={text.text}
                value={texts[index]}
                onChange={(e) => {
                  const new_texts = [...texts];
                  new_texts[index] = e.target.value;
                  setTexts(new_texts);
                }}
                className="h-[45px] placeholder-white bg-white bg-opacity-10 placeholder-opacity-50 border-2 border-[#8248F5] w-full rounded-md p-4 outline-none text-sm text-white"
              />
            </div>
          ))}
          <DownLoadButton func={onClickDownloadButton}>
            이 정보로 템플릿 생성
          </DownLoadButton>
        </form>
      </div>

      {exports && (
        <div
          className={`inline-block object-cover bg-cover relative`}
          id="form"
          style={{
            width: forms[id].width,
            height: forms[id].height,
            backgroundImage: "url(" + forms[id].url + ")",
          }}
        >
          {forms[id].texts.map((text, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: text.top,
                left: text.left,
                fontSize: `${text.font}px`,
                color: text.color,
              }}
            >
              {texts[index]}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
