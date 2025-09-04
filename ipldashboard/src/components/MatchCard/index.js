// Write your code here
import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {properties} = this.props
    const {result} = properties
    const competingTeamLogo = properties.competing_team_logo
    const competingTeam = properties.competing_team
    const matchStatus = properties.match_status
    const applyClass = matchStatus === 'Lost' ? 'lostMatch' : 'winMatch'
    return (
      <li className="matchCardContainer">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competingTeamLogoCard"
        />
        <p className="teamName">{competingTeam}</p>
        <p className="resultState">{result}</p>
        <p className={applyClass}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
