export default function Accordion({ id, title, description }) {
  return (
    <div key={id} className="accordion">
      <div className="accordion__top">
        <h3 className="accordion__title">{title}</h3>
        <button className="accordion__btn">+</button>
      </div>
      <div className="accordion__description">{description}</div>
    </div>
  );
}
