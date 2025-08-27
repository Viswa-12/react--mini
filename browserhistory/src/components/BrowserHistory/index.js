import {Component} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
class BrowserHistory extends Component {
  state = {
    userInput: '',
    HistoryList: initialHistoryList,
  }

  changeState = event => {
    const valued = event.target.value
    this.setState({userInput: valued})
  }

  updateNewState = appId => {
    const {HistoryList} = this.state
    const finalResults = HistoryList.filter(eachrow => eachrow.id !== appId)
    this.setState({HistoryList: finalResults})
  }

  render() {
    const {userInput, HistoryList} = this.state
    const finalResults = HistoryList.filter(eachrow =>
      eachrow.title.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()),
    )
    return (
      <>
        <div className="header">
          <div className="imgContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="headerlogo"
            />
          </div>
          <div className="searchContainer">
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="searchicon"
            />
            <input
              type="search"
              className="userInput"
              placeholder="Search history"
              onChange={this.changeState}
              value={userInput}
            />
          </div>
        </div>
        {finalResults.length === 0 ? (
          <div className="errorDiv">
            <p className="errorMsg">There is no history to show</p>
          </div>
        ) : (
          <div className="outerdiv">
            <ul className="listsContainer">
              {finalResults.map(eachrow => (
                <li className="listItem" key={eachrow.id}>
                  <p className="timing">{eachrow.timeAccessed}</p>
                  <div className="innerContainer1">
                    <div className="innerContainer2">
                      <img
                        src={eachrow.logoUrl}
                        className="logo"
                        alt="domain logo"
                      />
                      <div className="innerContainer3">
                        <p className="logoName">{eachrow.title}</p>
                        <p className="logoLink">{eachrow.domainUrl}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="button"
                      data-testid="delete"
                      onClick={() => {
                        this.updateNewState(eachrow.id)
                      }}
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                        alt="deleteicon"
                        className="deleteIcon"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default BrowserHistory
