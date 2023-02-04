import "../assets/styles/card.css";

export const Card = ({ title, desc, img }) => {
  return (
    <>
      <section>
        <div className="card">
          <div className="card-img">
            <img src={img} alt={`A picture of ${title} aspect.`} />
          </div>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{desc}</p>
          </div>
        </div>
      </section>
    </>
  );
};
