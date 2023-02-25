import Tour from './Tour';
const Tours = ({ tours, RemoveTour }) => {
  return (
    <section className="tours">
      <div className="tours_title">
        <h2>our tours </h2>
        <div className="underline"></div>
      </div>
      <div className="">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} RemoveTour={RemoveTour} />
        ))}
      </div>
    </section>
  );
};
export default Tours;
