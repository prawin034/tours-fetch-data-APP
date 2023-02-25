import { useState } from 'react';
const Tour = ({ id, image, info, price, name, RemoveTour }) => {
  //READMORE FUNCTIONALITY
  const [readmore, setreadmore] = useState(false);
  return (
    <article className="tour">
      <img src={image} alt={name} className="tour_img" />
      <footer className="tour">
        <div className="tour_info">
          <div className="tour_flex">
            <h4 className="tour_title">{name}</h4>
            <h4 className="tour_price">${price}</h4>
          </div>
          <p className="tour_detail">
            {readmore ? info : `${info.substring(0, 200)}...`}
            <button className="btn_read" onClick={() => setreadmore(!readmore)}>
              {readmore ? 'SHOW LESS' : 'READ MORE'}
            </button>
          </p>
          <button onClick={() => RemoveTour(id)} className="tour_btn">
            not interested
          </button>
        </div>
      </footer>
    </article>
  );
};
export default Tour;
