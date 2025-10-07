// components
import Section from './components/Section';

// sections
import Header from './contents/Header';
import Presentation from './contents/Presentation';
import About from './contents/About';
import Stacks from './contents/Stacks';
import Projects from './contents/Projects';
import ContactMe from './contents/ContactMe';
import Footer from './contents/Footer';

export default function App() {
  return (
    <>
      <span className="flex justify-center">
        <Header />
      </span>

      <Section height={80} padding={20} paddingTop={"15dvh"}>
        <Presentation />
      </Section>

      <Section>
        <About />
      </Section>

      {/* <Section>
        <Stacks />
      </Section> */}

      <Section>
        <Projects />
      </Section>

      <Section>
        <ContactMe />
      </Section>

      <Footer />
    </>
  );
}