import './App.css'
import Header from './components/Header'
import TeamCard from './components/TeamCard'
import mockTeams from './data/teams.json'

function App() {

  return (
    <>
      <Header backgroundColor="lightgray" color="black" />
      {mockTeams.map((team)=>{
        return (
        <TeamCard
          color = {team.color}
          teamName={team.name}
          teamLeague={team.league}
          teamCountry={team.country}
          teamLogo={team.logo}
          teamTitles={team.titles > 0 ? team.titles : "En progreso"}
        />
      )})}
    </>
  )
}

export default App
