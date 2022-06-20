import Header from "../../components/Common/Header";
import FooterNav from "../../components/Common/FooterNav";
import SpeechBubble from "../../components/Chat/SpeechBubble";
import ChatEnter from "../../components/Chat/Input";
const Chat = () => {
  return (
    <>
      <Header />

      <section>
        <SpeechBubble />
        <SpeechBubble />
        <SpeechBubble />
        <SpeechBubble />
        <ChatEnter />
      </section>

      <FooterNav />
    </>
  );
};

export default Chat;