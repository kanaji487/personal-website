import HeadSecction from "./components/Head";
import TechSecction from "./components/Tech";
import PortSecction from "./components/Port/Port";
import Navbar from "./components/Navbar/Navbar";
import Cern from "./components/Cern/Cern";

export default function Home() {

  return (
    <div>
      <main className="px-10 bg-[#191825] md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar />
          <HeadSecction />
        </section>
        <section>
          <h1 className="text-center font-bold text-4xl text-[#865DFF] underline my-4">
            My Skill
          </h1>
          <TechSecction />
        </section>
        <PortSecction />
      </main>
    </div>
  );
}