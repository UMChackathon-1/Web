import ArrowLeft from "@assets/arrow-left.svg";

interface BackButtonProps {
  mx?: number;
}

const BackButton = ({ mx = 0 }: BackButtonProps) => {
  const handleGoBack = () => window.history.back();
  return (
    <button onClick={handleGoBack} style={{ margin: `0px ${mx * 4}px` }}>
      <ArrowLeft color="#FFFFFF" />
    </button>
  );
};

export default BackButton;
