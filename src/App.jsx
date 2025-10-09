// components
import Section from '@/components/Section';

// sections
import Header from '@/contents/Header';
import Presentation from '@/contents/Presentation';
import About from '@/contents/About';
import Stacks from '@/contents/Stacks';
import Projects from '@/contents/Projects';
import ContactMe from '@/contents/ContactMe';
import Footer from '@/contents/Footer';
import Expertise from '@/contents/Expertise';

export default function App() {
  return (
    <>
      <span className="flex justify-center">
        <Header />
      </span>

      <Section padding={100} paddingTop={"15dvh"} id="home">
        <Presentation />
      </Section>

      <Section padding={50} id="about">
        <About />
      </Section>

      <Section>
        <Expertise />
      </Section>

      {/* <Section>
        <Stacks />
      </Section> */}

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="contact">
        <ContactMe />
      </Section>

      <Footer />
    </>
  );
}