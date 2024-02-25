// Write your code here
import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {appointments, toggleIsFavourite} = props
  const {id, titleInput, dateInput, isFavourite} = appointments
  const starImage = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'

  const onClickFavouriteImage = () => {
    toggleIsFavourite(id)
  }

  return (
    <li className="list-items">
      <div className="list-container">
        <div className="heading-cont">
          <h1 className="headings">{titleInput}</h1>
          <button
            className="star-button"
            type="button"
            onClick={onClickFavouriteImage}
          >
            <img src={starImage} className="star-image" alt={titleInput} />
          </button>
        </div>
        <p className="below-para">{format(dateInput)}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
