import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Department from "../components/Department";
import MessageForm from "../components/MessageForm";

function Home() {
  return (
    <>
      <Hero
        title={
          "Welcome to KCare Wellness-Center | Your CareTaker For Healthy Life"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Department />
      <MessageForm />
    </>
  );
}
export default Home;
