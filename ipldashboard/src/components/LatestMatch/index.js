// Write your code here
import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {properties} = this.props
    const competingTeam = properties.competing_team
    const {date, venue, result, umpires} = properties
    const competingTeamLogo = properties.competing_team_logo
    const firstInnings = properties.first_innings
    const secondInnings = properties.second_innings
    const manOfTheMatch = properties.man_of_the_match
    return (
      <div className="latestMatchContainer">
        <div className="latestFirstContainer">
          <div className="subContainer">
            <p className="latestTeamName">{competingTeam}</p>
            <p className="latestDate">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <div className="latestImgContainer">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="competingTeamlatestLogo"
            />
          </div>
        </div>
        <div className="latestSecondContainer">
          <p className="innings">First Innings</p>
          <p className="innings">{firstInnings}</p>
          <p className="innings">second Innings</p>
          <p className="innings">{secondInnings}</p>
          <h1 className="manOfMatchHeading">Man Of The Match</h1>
          <p className="manOfTheMatch">{manOfTheMatch}</p>
          <h1 className="umpiresHeading">Umpires</h1>
          <p className="umpires">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
