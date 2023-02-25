import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setloading] = useState(true);
  const [tours, settours] = useState([]);

  //DELETING TOURS

  const RemoveTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);

    settours(newTour);
  };

  //FETCHING TOURS

  const FetchTours = async () => {
    setloading(true);

    try {
      const Responses = await fetch(url);
      const Tours = await Responses.json();
      console.log(Tours);
      settours(Tours);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };

  useEffect(() => {
    FetchTours();
  }, []);

  //LOADING STATE
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  // EMPTY TOURS

  if (tours.length === 0) {
    return (
      <main className="empty">
        <div className="empty_tour">
          <h2>NO TOURS LEFT</h2>
          <button onClick={FetchTours} className="tour_btn">
            REFRESH
          </button>
        </div>
      </main>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} RemoveTour={RemoveTour} />
    </div>
  );
}

export default App;
