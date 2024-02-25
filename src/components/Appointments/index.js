// Write your code here
import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentList: [], titleInput: '', dateInput: ''}

  onChangeTextInput = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({dateInput: event.target.value})
  }

  toggleIsFavourite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isFavourite: !eachAppointment.isFavourite}
        }
        return eachAppointment
      }),
    }))
  }

  onAddNewAppointment = event => {
    event.preventDefault()
    const {titleInput, dateInput} = this.state
    const newAppointment = {
      id: uuidv4(),
      titleInput,
      dateInput,
      isFavourite: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  render() {
    const {titleInput, dateInput, appointmentList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <div className="cont">
            <div className="content-cont">
              <h1 className="heading">Add Appointment</h1>
              <form
                className="form-container"
                onSubmit={this.onAddNewAppointment}
              >
                <label htmlFor="inputId" className="title-label">
                  TITLE
                </label>
                <br />
                <input
                  id="inputId"
                  type="text"
                  className="input"
                  placeholder="Title"
                  value={titleInput}
                  onChange={this.onChangeTextInput}
                />

                <label className="data-label" htmlFor="inputDateId">
                  DATE
                </label>
                <br />
                <input
                  type="date"
                  value={dateInput}
                  id="inputDateId"
                  className="date"
                  onChange={this.onChangeDateInput}
                />

                <button className="add-button" type="submit">
                  Add
                </button>
              </form>
            </div>

            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              className="image"
              alt="appointments"
            />
          </div>
          <hr className="line" />

          <div className="appointment-container">
            <div className="header">
              <h1 className="below-head">Appointments</h1>
              <button className="button" type="button">
                Starred
              </button>
            </div>
            <ul className="list-of-appointments">
              {appointmentList.map(eachAppointment => (
                <AppointmentItem
                  key={eachAppointment.id}
                  appointments={eachAppointment}
                  toggleIsFavourite={this.toggleIsFavourite}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
