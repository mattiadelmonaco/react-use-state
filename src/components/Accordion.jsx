export default function Accordion({
  id,
  title,
  description,
  isOpen,
  onAccordionToggle,
}) {
  return (
    <div key={id} className="accordion">
      <div className={`accordion__top ${isOpen ? "accordion__top--open" : ""}`}>
        <h3 className="accordion__title">{title}</h3>
        <button onClick={onAccordionToggle} className="accordion__btn">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div className="accordion__description">{description}</div>}
    </div>
  );
}
