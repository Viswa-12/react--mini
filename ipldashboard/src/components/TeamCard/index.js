// Write your code here
import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {properties} = this.props
    const {id, name, teamImageUrl} = properties
    return (
      <Link to={`/team-matches/${id}`} className="card-Link">
        <li className="homeDisplayCard">
          <img src={teamImageUrl} alt={name} className="homeCardImg" />
          <p className="homeCardTeam">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
