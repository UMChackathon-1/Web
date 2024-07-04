import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404: Not Found</h1>
      <Link to="/">메인으로 돌아가기</Link>
    </>
  );
}
