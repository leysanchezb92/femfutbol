import "./TeamBoard.css";
import TeamCard from "../TeamCard";

interface Team {
  color?: string;
  name: string;
  league: string;
  country: string;
  logo: string;
  titles: number;
}

interface TeamBoardProps {
  teams: Team[];
}

export default function TeamBoard({ teams }: TeamBoardProps) {
  return (
    <div className="team-board">
      {teams.map((team) => (
        <TeamCard
          key={team.name}
          color={team.color}
          teamCountry={team.country}
          teamName={team.name}
          teamLeague={team.league}
          teamLogo={team.logo}
          teamTitles={team.titles > 0 ? team.titles : "En progreso"}
        />
      ))}
    </div>
  );
}
