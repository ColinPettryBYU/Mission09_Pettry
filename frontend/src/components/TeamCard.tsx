interface TeamCardProps {
  // School name (example: Duke)
  school: string;
  // Team mascot/name (example: Blue Devils)
  mascot: string;
  // School city
  city: string;
  // School state
  state: string;
}

function TeamCard({ school, mascot, city, state }: TeamCardProps) {
  return (
    // Displays one team's info.
    <div className="team-card">
      <h2>{school}</h2>
      <p className="mascot">{mascot}</p>
      <p className="location">
        {city}, {state}
      </p>
    </div>
  );
}

export default TeamCard;
