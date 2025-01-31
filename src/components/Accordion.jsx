import { useState } from "react";

export default function Accordion({ id, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const accordionOpen = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  return (
    <div key={id} className="accordion">
      <div className={`accordion__top ${isOpen && "accordion__top--open"}`}>
        <h3 className="accordion__title">{title}</h3>
        <button onClick={accordionOpen} className="accordion__btn">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div className="accordion__description">{description}</div>}
    </div>
  );
}
