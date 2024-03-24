import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
import Series from "./pages/series/Series";
import Fixturs from "./pages/fixtures/Fixturs";
import StatsCorner from "./pages/statsCorner/StatsCorner";
import Rankings from "./pages/rankings/Rankings";
import Footer from "./components/footer/Footer";
import Men from "./pages/rankings/Men";
import Women from "./pages/rankings/Women";
import MenTeam from "./components/RankingComponent/menCategories/MenTeam";
import MenBatter from "./components/RankingComponent/menCategories/MenBatter";
import MenBowler from "./components/RankingComponent/menCategories/MenBowler";
import MenAllRounder from "./components/RankingComponent/menCategories/MenAllRounder";
import WomenTeam from "./components/RankingComponent/womenCategories/WomenTeam";
import WomenBatter from "./components/RankingComponent/womenCategories/WomenBatter";
import WomenBowler from "./components/RankingComponent/womenCategories/WomenBowler";
import WomenAllRounder from "./components/RankingComponent/womenCategories/WomenAllRounder";
import Testing from "../src/components/nazim/testing"
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/fixtures" element={<Fixturs />} />
        <Route path="/stats_corner" element={<StatsCorner />} />
        <Route path="/rankings" element={<Rankings />}>
          <Route path="rankings_category_men" element={<Men />}>
            <Route path="team" element={<MenTeam />} />
            <Route path="batter" element={<MenBatter />} />
            <Route path="bowler" element={<MenBowler />} />
            <Route path="all_rounder" element={<MenAllRounder />} />
          </Route>
          <Route path="rankings_category_women" element={<Women />}>
            <Route path="team1" element={<WomenTeam/>}/>
            <Route path="batter1" element={<WomenBatter/>}/>
            <Route path="bowler1" element={<WomenBowler/>}/>
            <Route path="all_rounder1" element={<WomenAllRounder/>}/>
            <Route path="Testing" element={<Testing/>}/>
          </Route>
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
