import { useState } from "react";
import languages from "../data/languages";
import Accordion from "./Accordion";

export default function Main() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleActiveAccordion = (id) => {
    setActiveAccordion((currentId) => {
      if (currentId === id) {
        return null;
      }
      return id;
    });
  };

  return (
    <main>
      <section className="container">
        {languages.map((language) => {
          return (
            <Accordion
              key={language.id}
              title={language.title}
              description={language.description}
              isOpen={language.id === activeAccordion}
              onAccordionToggle={() => handleActiveAccordion(language.id)}
            />
          );
        })}
      </section>
    </main>
  );
}
