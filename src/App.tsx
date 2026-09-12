import "./App.css";
import Header from "./components/Header";
import mockTeams from "./data/teams.json";
import TeamBoard from "./components/TeamBoard/TeamBoard";

function App() {
  return (
    <>
      <Header backgroundColor="lightgray" color="black" />
      <TeamBoard teams={mockTeams} />
    </>
  );
}

export default App;
