import ArrowLeft from "@assets/arrow-left.svg";

interface BackButtonProps {
  mx?: number;
}
// @ts-ignore
const BackButton = ({ mx = 0 }: BackButtonProps) => {
  const handleGoBack = () => window.history.back();
  return (
    <button onClick={handleGoBack} className="p-4">
      {/* @ts-ignore */}
      <ArrowLeft color="#FFFFFF" />
    </button>
  );
};

export default BackButton;
