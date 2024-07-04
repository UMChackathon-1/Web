import ArrowLeft from "@assets/arrow-left.svg";

const BackButton = () => {
  const handleGoBack = () => window.history.back();
  return (
    <button onClick={handleGoBack}>
      <ArrowLeft color="#FFFFFF" />
    </button>
  );
};

export default BackButton;
