interface TeamCardProps {
  school: string;
  mascot: string;
  city: string;
  state: string;
}

function TeamCard({ school, mascot, city, state }: TeamCardProps) {
  return (
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
