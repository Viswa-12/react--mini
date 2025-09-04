// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamImageUrl: '',
    latestMatch: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatchesList = data.recent_matches
    this.setState({
      teamImageUrl: teamBannerUrl,
      recentMatches: recentMatchesList,
      latestMatch: latestMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {teamImageUrl, latestMatch, recentMatches, isLoading} = this.state
    return (
      <div className="detailsContainer">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="detailsCardContainer">
            <img
              src={teamImageUrl}
              alt="team banner"
              className="detailsTeamImg"
            />
            <h1 className="detailsCardHeading">Latest Matches</h1>
            <LatestMatch properties={latestMatch} />
            <ul className="recentMatchesContainer">
              {recentMatches.map(eachrow => (
                <MatchCard properties={eachrow} key={eachrow.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
