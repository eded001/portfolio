// components
import Section from './components/Section';

// sections
import Presentation from './contents/Presentation';
import About from './contents/About';
import Stacks from './contents/Stacks';
import Projects from './contents/Projects';
import ContactMe from './contents/ContactMe';

export default function App() {
  return (
    <>
      <Section>
        <Presentation />
      </Section>

      {/* <Section>
        <About />
      </Section>

      <Section>
        <Stacks />
      </Section>

      <Section>
        <Projects />
      </Section>

      <Section>
        <ContactMe />
      </Section> */}
    </>
  );
}