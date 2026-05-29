import HeroSection from "../components/HeroSection";
import ToolsSection from "../components/ToolsSection";
import ProjectsSection from "../components/ProjectsSection";

function Home() {
  return (
    <div>
      {/* Hero stays pinned while the content panel below rises up and covers it */}
      <div className="sticky top-0 z-0">
        <HeroSection />
      </div>

      <div className="relative z-10 -mt-6 rounded-t-[2.5rem] bg-white shadow-[0_-20px_60px_rgba(0,0,0,0.35)]">
        <ToolsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default Home;
