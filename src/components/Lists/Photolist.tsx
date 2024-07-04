import Card from "@components/home/Card";
import BackButton from "@components/BackButton";
import outdoorSleep1 from "@assets/outdoor-sleep1.png";

const outDoorItems = [
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 20, id: 1 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 12, id: 2 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 30, id: 3 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 20, id: 1 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 12, id: 2 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 30, id: 3 },
  { title: "여자들끼리 바다여행", url: outdoorSleep1, likes: 30, id: 3 },
];
export default function Photo() {
  return (
    <div>
      <BackButton mx={4} />
      <div className="grid grid-cols-3 gap-1 mt-5 px-2">
        {outDoorItems.map((item) => (
          <Card mode="photo" key={item.id} {...item} mr={0} />
        ))}
      </div>
    </div>
  );
}
