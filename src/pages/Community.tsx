import NavBar from "@components/community/navBar";
import PostItems from "@components/community/postItems";
import { useNavigate, useParams } from "react-router-dom";
import PlusButtonSvg from "@assets/plusButton.svg";
import Header from "@components/Header";
import { useState } from "react";

import { freeDummyData } from "dummies/freeDummyData";
import { partTimeDummyData } from "dummies/partTimeDummyData";

export default function Community() {
  const { type } = useParams<string>();
  const navigate = useNavigate();

  const toWrite = (type: string) => {
    navigate(`/writepost/${type}`);
  };

  const [selectedOption, setSelectedOption] = useState<string>("total");
  const [freeBoardData, setFreeBoardData] = useState(freeDummyData);
  const [partTimeBoardData, setPartTimeBoardData] = useState(partTimeDummyData);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const getSortedData = (data: typeof freeDummyData) => {
    if (selectedOption === "popular") {
      return [...data].sort((a, b) => b.viewCount - a.viewCount);
    }
    return data;
  };

  const sortedFreeBoardData = getSortedData(freeBoardData);
  const sortedPartTimeBoardData = getSortedData(partTimeBoardData);

  return (
    <div className="relative">
      <Header />
      <div className="flex flex-row items-center justify-between px-4">
        <NavBar />
        <select onChange={handleSortChange} value={selectedOption}>
          <option value="total">전체</option>
          <option value="popular">인기순</option>
        </select>
      </div>
      {type === "free" && <PostItems postData={sortedFreeBoardData} />}
      {type === "parttime" && <PostItems postData={sortedPartTimeBoardData} />}
      <div
        className="absolute cursor-pointer bottom-2 right-2"
        onClick={() => toWrite(type)}
      >
        <PlusButtonSvg />
      </div>
    </div>
  );
}
