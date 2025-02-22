export default function speak(text: string) {
  if (typeof SpeechSynthesisUtterance === "undefined" || typeof window.speechSynthesis === "undefined") {
    alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
    return;
  }

  window.speechSynthesis.cancel(); // 현재 읽고있다면 초기화

  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.rate = 1; // 속도: 0.1 ~ 10
  speechMsg.pitch = 1; // 음높이: 0 ~ 2
  speechMsg.lang = "ko-KR";
  speechMsg.text = text;

  // SpeechSynthesisUtterance에 저장된 내용을 바탕으로 음성합성 실행
  window.speechSynthesis.speak(speechMsg);
}
