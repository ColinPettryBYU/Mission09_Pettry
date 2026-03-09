import teamData from "../CollegeBasketballTeams.json";
import TeamCard from "./TeamCard";

// Shape of one team object from the JSON file.
interface Team {
  tid: number;
  school: string;
  name: string;
  city: string;
  state: string;
}

function TeamList() {
  // Pull the array of teams from the imported JSON data.
  const teams: Team[] = teamData.teams;

  return (
    <div className="team-grid">
      {/* Create one TeamCard component for each team */}
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
