import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
const statusObject = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  isLoading: 'LOADING',
  initial: 'INITIAL',
}

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    status: statusObject.initial,
    itemsData: [],
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    this.setState({status: statusObject.isLoading})
    const {activeTabId} = this.state
    // const githubReposApiUrl = 'https://apis.ccbp.in/popular-repos'
    // const url = `${githubReposApiUrl}?language=${activeTabId}`
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const newData = data.popular_repos.map(eachrow => ({
        id: eachrow.id,
        avatarUrl: eachrow.avatar_url,
        forksCount: eachrow.forks_count,
        issuesCount: eachrow.issues_count,
        name: eachrow.name,
        starsCount: eachrow.stars_count,
      }))
      this.setState({status: statusObject.success, itemsData: newData})
    } else {
      this.setState({status: statusObject.failure})
    }
  }

  setNewTab = newTabId => {
    this.setState({activeTabId: newTabId}, this.getItems)
  }

  displayData = () => {
    const {itemsData} = this.state
    return (
      <ul className="itemsContainer">
        {itemsData.map(eachrow => (
          <RepositoryItem key={eachrow.id} properties={eachrow} />
        ))}
      </ul>
    )
  }

  failureView = () => (
    <div className="failureContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failureImg"
      />
    </div>
  )

  loadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderPage = () => {
    const {status} = this.state
    switch (status) {
      case statusObject.success:
        return this.displayData()
      case statusObject.failure:
        return this.failureView()
      case statusObject.isLoading:
        return this.loadingView()
      default:
        return null
    }
  }

  render() {
    const {activeTabId} = this.state
    return (
      <div className="container">
        <h1 className="containerHeading">Popular</h1>
        <ul className="tabsContainer">
          {languageFiltersData.map(eachtab => (
            <LanguageFilterItem
              key={eachtab.id}
              properties={eachtab}
              activeTabId={activeTabId}
              onClick={this.setNewTab}
            />
          ))}
        </ul>
        {this.renderPage()}
      </div>
    )
  }
}

export default GithubPopularRepos
