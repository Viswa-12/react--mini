import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    titleInput: '',
    dateInput: '',
    appointments: [],
    specialClass: 'normal',
    showstarred: false,
  }

  titleChange = event => {
    event.preventDefault()
    this.setState({titleInput: event.target.value})
  }

  dateChange = event => {
    event.preventDefault()
    this.setState({dateInput: event.target.value})
  }

  createAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const obj = {
      id: uuidv4(),
      titleInput,
      dateInput,
      isLiked: false,
    }
    this.setState(prevstate => ({
      appointments: [...prevstate.appointments, obj],
      titleInput: '',
      dateInput: '',
    }))
  }

  changeLike = appointmentId => {
    const {appointments} = this.state
    const newAppointments = appointments.map(eachrow => {
      if (eachrow.id === appointmentId) {
        const newrow = eachrow
        newrow.isLiked = !newrow.isLiked
        return newrow
      }
      return eachrow
    })
    this.setState({appointments: newAppointments})
  }

  displayStarred = () => {
    const {showstarred} = this.state
    const newValue = !showstarred
    if (newValue) {
      this.setState({specialClass: 'special', showstarred: newValue})
    }
    this.setState({specialClass: 'normal', showstarred: newValue})
  }

  render() {
    const {titleInput, dateInput, appointments, specialClass, showstarred} =
      this.state
    const newAppointments = showstarred
      ? appointments.filter(eachrow => eachrow.isLiked)
      : appointments
    return (
      <div className="container">
        <div className="cardContainer">
          <div className="cardTopContainer">
            <div className="formContainer">
              <h1 className="heading1">Add Appointment</h1>
              <form>
                <label htmlFor="title">TITLE</label> <br />
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  className="titleInput"
                  value={titleInput}
                  onChange={this.titleChange}
                />{' '}
                <br />
                <label htmlFor="date">DATE</label> <br />
                <input
                  type="date"
                  className="dateInput"
                  id="date"
                  onChange={this.dateChange}
                  value={dateInput}
                />{' '}
                <br />
                <button
                  type="submit"
                  className="button"
                  onClick={this.createAppointment}
                >
                  Add
                </button>
              </form>
            </div>
            <div className="imageContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="image"
                alt="appointments"
              />
            </div>
          </div>
          <div className="bottomContainer">
            <h1 className="heading2">Appointments</h1>
            <button
              className={specialClass}
              type="button"
              onClick={this.displayStarred}
            >
              Starred
            </button>
          </div>
          <ul className="resultContainer">
            {newAppointments.map(eachrow => (
              <AppointmentItem
                properties={eachrow}
                key={eachrow.id}
                onClick={this.changeLike}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
