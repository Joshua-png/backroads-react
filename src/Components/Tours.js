import { toursList } from "../data";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title1="featured" title2="tours" />

      <div className="section-center featured-center">
        {toursList.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <div className="tour-img-container">
                <img src={tour.image} className="tour-img" alt={tour.title} />
                <p className="tour-date">{tour.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tour.title}</h4>
                </div>
                <p>{tour.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {tour.country}
                  </p>
                  <p>{tour.days}</p>
                  <p>{tour.cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
