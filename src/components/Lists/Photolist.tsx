import Card from "@components/home/Card";
import BackButton from "@components/BackButton";
import outdoorSleep1 from "@assets/outdoor-sleep1.png";
import friend1 from "@assets/friend.png";
import friend2 from "@assets/friend2.png";
import farm1 from "@assets/farm1.png";
import farm2 from "@assets/farm2.png";
import coding1 from "@assets/coding.jpeg";
import coding2 from "@assets/coding2.jpeg";

const outDoorItems = [
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 20, id: 1 },
  { title: "친구들과 한장", url: friend1, likes: 12, id: 2 },
  { title: "여자들끼리 바다여행", url: friend2, likes: 30, id: 3 },
  { title: "농활 사진", url: farm1, likes: 20, id: 4 },
  { title: "여자들끼리 바다여행", url: friend1, likes: 12, id: 5 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 30, id: 6 },
  { title: "친구들과 한장", url: outdoorSleep1, likes: 30, id: 7 },
  { title: "친구들과 한장", url: farm2, likes: 30, id: 8 },
  { title: "친구들과 한장", url: coding1, likes: 30, id: 9 },
  { title: "친구들과 한장", url: coding2, likes: 30, id: 10 },
  { title: "친구들과 한장", url: friend1, likes: 12, id: 11 },
  { title: "여자들끼리 바다여행", url: friend2, likes: 30, id: 12 },
  { title: "농활 사진", url: farm1, likes: 20, id: 13 },
  { title: "여자들끼리 바다여행", url: friend1, likes: 12, id: 14 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 30, id: 15 },
];
export default function Photo() {
  return (
    <div>
      <BackButton mx={4} />
      <div className="grid grid-cols-3 gap-1 px-2 mt-5">
        {outDoorItems.map((item) => (
          <Card mode="photo" key={item.id} {...item} mr={0} />
        ))}
      </div>
    </div>
  );
}
