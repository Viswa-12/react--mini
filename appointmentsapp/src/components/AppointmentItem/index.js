// Write your code here
import {Component} from 'react'
import './index.css'

class AppointmentItem extends Component {
  render() {
    const {properties, onClick} = this.props
    const {id, titleInput, dateInput, isLiked} = properties
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const Days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const appDate = new Date(dateInput)
    const month = months[appDate.getMonth()]
    const date = appDate.getDate()
    const year = appDate.getFullYear()
    const day = Days[appDate.getDay()]
    const url = isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    return (
      <li className="listItem">
        <div className="listItemtop">
          <p className="treatType">{titleInput}</p>
          <p className="dateOfApp">
            Date: {date} {month} {year}, {day}
          </p>
        </div>
        <button
          type="button"
          className="starButton"
          onClick={() => onClick(id)}
          data-testid="star"
        >
          {' '}
          <img src={url} alt="star" className="likeImage" />
        </button>
      </li>
    )
  }
}

export default AppointmentItem
