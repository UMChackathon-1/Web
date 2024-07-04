import Card from "@components/home/Card";
import BackButton from "@components/BackButton";

import { forms } from "@assets/forms";
interface CardProps {
  url: string;
  title: string;
  likes: number;
  id: number;
  mode: "photo" | "editform";
  mr?: number;
}
export default function Document() {
  return (
    <div>
      <BackButton />
      <div className="flex flex-wrap gap-1 mt-5 justify-center">
        {forms.map((item, index) => {
          const props: CardProps = {
            title: item.name,
            url: item.url,
            likes: item.likes,
            id: index + 1,
            mode: "editform",
            mr: 0,
          };
          return <Card key={index + 1} {...props} />;
        })}
      </div>
    </div>
  );
}
