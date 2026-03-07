import teamData from "../CollegeBasketballTeams.json";
import TeamCard from "./TeamCard";

interface Team {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

function TeamList() {
  const teams: Team[] = teamData.teams;

  return (
    <div className="team-grid">
      {teams.map((team) => (
        <TeamCard
          key={team.tid}
          school={team.school}
          mascot={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
}

export default TeamList;
