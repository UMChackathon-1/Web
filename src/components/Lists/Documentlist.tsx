import Card from "@components/home/Card";
import BackButton from "@components/BackButton";
import outdoorSleep1 from "@assets/outdoor-sleep1.png";
import { Link } from "react-router-dom";

const outDoorItems = [
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 20, id: 1 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 12, id: 2 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 30, id: 3 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 20, id: 1 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 12, id: 2 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 30, id: 3 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 30, id: 3 },
];
export default function Document() {
  return (
    <div>
      <BackButton />
      <div className="flex flex-wrap gap-4 mt-5">
        {outDoorItems.map((item) => {
          return (
            <Link to={`/editform/${item.id}`}>
              <Card {...item} mr={0} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
