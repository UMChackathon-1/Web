import Card from "@components/home/Card";
import BackButton from "@components/BackButton";
import { outDoorItems } from "dummies/outDoorItems";

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
