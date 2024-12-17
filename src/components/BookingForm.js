import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS file

function BookingForm(props) {
  const { date, time, guests, occasion, state } = props.data;
  const { setDate, setTime, setGuests, setOccasion, dispatch } = props.functions;

  const [guestsError, setGuestsError] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ date: e.target.value });
  }

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleGuestsChange = (e) => {
    if (e.target.value === "") {
      setGuestsError("Must input number of guests.");
      setButtonDisabled(true);
    } else if (e.target.value < 1) {
      setGuestsError("Too few guests entered.");
      setButtonDisabled(true);
    } else if (e.target.value > 12) {
      setGuestsError("Too many guests entered.");
      setButtonDisabled(true);
    } else {
      setGuestsError("");
      setButtonDisabled(false);
    }
    setGuests(e.target.value);
  }

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  }

  return (
    <div className="booking-container">
      <h1>Book Now</h1>
      <br/>
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={handleTimeChange}
        >
          {state.availableTimes.map((t) => {
            return <option key={t}>{t}</option>
          })}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={handleGuestsChange}
        />
        {guestsError &&
          <div className="error">{guestsError}</div>
        }

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={handleOccasionChange}
        >
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>

        <button
          type="submit"
          disabled={buttonDisabled}
          onClick={(e) => {
            e.preventDefault();
            props.onSubmit({ date, time, guests, occasion });
          }}
        >
          Make Your reservation
        </button>
      </form>
    </div>
  )
}

export default BookingForm;
