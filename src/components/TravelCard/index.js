import './index.css'

const TravelCard = props => {
  const {teamData} = props
  const {name, teamImageURL, description} = teamData

  return (
    <div className="team-card">
      <div className="travel-card-space">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <div className="travel-card-description">
          <p className="team-name">{name}</p>
          <p className="travel">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TravelCard
