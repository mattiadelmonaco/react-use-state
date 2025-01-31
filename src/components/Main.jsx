import languages from "../data/languages";
import Accordion from "./Accordion";

export default function Main() {
  return (
    <main>
      <section className="container">
        {languages.map((language) => {
          return (
            <Accordion
              key={language.id}
              title={language.title}
              description={language.description}
            />
          );
        })}
      </section>
    </main>
  );
}
