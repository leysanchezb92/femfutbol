interface TeamCardProps {
  color?: string;
  teamCountry: string;
  teamName: string;
  teamLeague: string;
  teamLogo: string;
  teamTitles?: number | string;
}

function TeamCard({ teamName, teamLeague, teamCountry, teamLogo, color, teamTitles }: TeamCardProps) {
  return (
    <div className="team-card" style={{ borderTop: `4px solid ${color}` }}>
      <img src={teamLogo} alt={teamName} />
      <span className="team-name">{teamName}</span>
      <p className="team-league">{teamCountry} · {teamLeague}</p>
      <p>🏆 {teamTitles} títulos europeos</p>
    </div>
  )
}

export default TeamCard;