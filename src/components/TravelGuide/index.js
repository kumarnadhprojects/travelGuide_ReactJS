import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TravelCard'

import './index.css'

const travelApiUrl = 'https://apis.ccbp.in/tg/packages'

class TravelGuide extends Component {
  state = {
    isLoading: true,
    packages: [],
  }

  componentDidMount() {
    this.getTeams()
  }

  setTeams = (formattedData, isLoading) => {
    this.setState({
      packages: formattedData,
      isLoading,
    })
  }

  getTeams = async () => {
    const response = await fetch(travelApiUrl)
    const fetchedData = await response.json()
    const formattedData = fetchedData.packages.map(team => ({
      name: team.name,
      id: team.id,
      teamImageURL: team.image_url,
      description: team.description,
    }))
    this.setTeams(formattedData, false)
  }

  renderTeamsList = () => {
    const {packages} = this.state

    return (
      <div className="teams-list">
        {packages.map(team => (
          <TeamCard teamData={team} key={team.id} />
        ))}
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader
        className="loader-container"
        type="TailSpin"
        color="#00BFFF"
        height={50}
        width={50}
      />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading-container">
            <h1 className="ipl-dashboard-heading">Travel Guide</h1>
          </div>
          {isLoading ? this.renderLoader() : this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default TravelGuide
