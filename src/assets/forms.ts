import { formProps } from "@pages/Editform";
import Hackathon from "./Hackathon.png";
import Farm from "./Farm.png";
import I2024 from "./2024.png";

export const forms: formProps[] = [
  {
    name: "Hackathon",
    url: Hackathon,
    user: "PROME",
    visible_height: 200,
    width: 1500,
    height: 750,
    texts: [
      {
        name: "장소",
        text: "장소를 입력하세요",
        top: 493,
        left: 210,
        font: 30,
        color: "white",
      },
      {
        name: "날짜",
        text: "일시를 입력하세요",
        top: 565,
        left: 210,
        font: 30,
        color: "white",
      },
    ],
  },
  {
    name: "농활",
    url: Farm,
    visible_height: 500,
    width: 700,
    height: 900,
    user: "user1",
    texts: [
      {
        name: "년도",
        text: "년도를 입력하세요",
        top: 42,
        left: 380,
        font: 55,
        color: "white",
      },
      {
        name: "신청기간",
        text: "신청기간를 입력하세요",
        top: 750,
        left: 112,
        font: 20,
        color: "#356F60",
      },
      {
        name: "신청기간",
        text: "신청기간를 입력하세요",
        top: 775,
        left: 112,
        font: 20,
        color: "#356F60",
      },
    ],
  },
  {
    name: "2024년 자유양식",
    url: I2024,
    visible_height: 550,
    width: 700,
    height: 1000,
    user: "user102354",
    texts: [
      {
        name: "주제목",
        text: "주제목을 입력하세요",
        top: 560,
        left: 90,
        font: 60,
        color: "#00DC66",
      },
      {
        name: "신청기간",
        text: "신청기간를 입력하세요",
        top: 620,
        left: 90,
        font: 50,
        color: "#B199F8",
      },
      {
        name: "시작날짜(월.일)",
        text: "시작날짜를 입력하세요",
        top: 700,
        left: 130,
        font: 30,
        color: "black",
      },
      {
        name: "종료날짜(월.일)",
        text: "종료날짜를 입력하세요",
        top: 700,
        left: 350,
        font: 30,
        color: "black",
      },
    ],
  },
];
