// Write your code here
import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    homeCardsData: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const newData = teams.map(eachrow => ({
      id: eachrow.id,
      name: eachrow.name,
      teamImageUrl: eachrow.team_image_url,
    }))
    this.setState({
      homeCardsData: newData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, homeCardsData} = this.state
    return (
      <div className="homeContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="homeInnerContainer">
            <div className="homeLogoContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="iplLogo"
              />
              <h1 className="homecontainerHeading">IPL Dashboard</h1>
            </div>
            <ul className="homeCardsContainer">
              {homeCardsData.map(eachrow => (
                <TeamCard key={eachrow.id} properties={eachrow} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
