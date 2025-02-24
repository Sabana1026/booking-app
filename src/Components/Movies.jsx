import React, { useState } from 'react';

const MOVIES = [
  {
    id: 1,
    title: "A.R.M",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/arm-et00407124-1726144274.jpg",
  },
  {
    id: 2,
    title: "Vaazhai",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vaazhai-et00408594-1724233930.jpg",
  },
  {
    id: 3,
    title: "G.O.A.T",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-greatest-of-all-time-et00401439-1725014428.jpg",
  },
  {
    id: 4,
    title: "Lubber Pandhu",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/lubber-pandhu-et00409924-1725002124.jpg",
  },
];

export default function Movies() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  // Initialize screens for each movie
  const [screens, setScreens] = useState({
    1: [
      { id: 1, time: "10.00AM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { id: 2, time: "2.00PM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    ],
    2: [
      { id: 1, time: "10.00AM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { id: 2, time: "2.00PM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    ],
    3: [
      { id: 1, time: "10.00AM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { id: 2, time: "2.00PM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    ],  
     4: [
      { id: 1, time: "10.00AM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { id: 2, time: "2.00PM", seats: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
    ],
  });

  const handleSeatSelect = (index, screen) => {
    if (screen?.id !== selectedScreen?.id) {
      setSelectedSeats([index]);
      setSelectedScreen(screen);
      return;
    }
    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter((i) => i !== index));
      if (selectedSeats.filter((i) => i !== index).length < 1) {
        setSelectedScreen(null);
      }
    } else {
      setSelectedSeats((seats) => [...seats, index]);
    }
  };

  const handleBooking = () => {
    alert(`Seats ${selectedSeats.map((index) => index + 1).join(", ")} booked for ${selectedMovie.title} at ${selectedScreen.time}`);
    
    // Update screens data for the specific movie
    const updatedScreens = { ...screens }; 
    const movieScreens = updatedScreens[selectedMovie.id];
    const updatedMovieScreen = movieScreens.map(screen => {
      if (screen.id === selectedScreen.id) {
        const updatedSeats = [...screen.seats];
        selectedSeats.forEach((seat) => {
          updatedSeats[seat] = 0; // Mark seat as booked
        });
        return { ...screen, seats: updatedSeats };
      }
      return screen;
    });

    updatedScreens[selectedMovie.id] = updatedMovieScreen;
    setScreens(updatedScreens);  // Update the state

    // Reset selection
    setSelectedMovie(null);
    setSelectedScreen(null);
    setSelectedSeats([]);
  };

  return (
    <div>
      <h2>Recommended Movies</h2>
      <div className="movie-selection">
        {MOVIES.map((movie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
          >
            <img className="movie-poster" src={movie.image} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <>
          <h2>Choose Your Screen</h2>
          <div className="screen-selection">
            {screens[selectedMovie.id].map((screen) => (
              <div
                key={screen.id}
                className={`screen ${screen.id === selectedScreen?.id ? "selected" : ""} ${screen.seats.includes(1) ? "available" : ""}`}
                onClick={() => setSelectedScreen(screen)}
              >
                <div className="screen-number">Screen {screen.id}</div>
                <div className="screen-time">{screen.time}</div>
                <div className="screen-title">{selectedMovie.title}</div>
                <div className="screen-seats">
                  {screen.seats.map((seat, index) => (
                    <div
                      key={index}
                      className={`seat ${seat ? "available" : "unavailable"} ${selectedSeats.includes(index) && selectedScreen?.id === screen.id ? "selected" : ""} ${selectedSeats.includes(index) ? "booked" : ""}`}
                      onClick={() => {
                        if (seat) {
                          handleSeatSelect(index, screen);
                        }
                      }}
                    >
                      <div className="seat-number">{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <div className="booking-summary">
        <div className="selected-screen">
          {selectedScreen && (
            <div>
              <h3>Selected Screen: {selectedScreen.id}</h3>
              <p>Time: {selectedScreen.time}</p>
              <p>Movie: {selectedMovie.title}</p>
            </div>
          )}
        </div>

        <div className="selected-seat">
          {selectedScreen && selectedSeats?.length > 0 && (
            <div>
              <h3>Selected Seats: {selectedSeats.map((index) => index + 1).join(", ")}</h3>
              <h3>No of Tickets: {selectedSeats?.length}</h3>
            </div>
          )}
        </div>
      </div>
      <button
        className="payment-button"
        onClick={handleBooking}
        disabled={!selectedScreen || selectedSeats?.length === 0}
      >
        Book Now
      </button>
    </div>
  );
}