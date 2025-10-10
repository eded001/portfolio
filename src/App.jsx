// components
import Section from '@/components/Section';

// sections
import Header from '@/contents/Header';

import Presentation from '@/contents/Presentation';
import About from '@/contents/About';
import Skills from '@/contents/Skills';
import Stacks from '@/contents/Stacks'
import Projects from '@/contents/Projects';
import ContactMe from '@/contents/ContactMe';

import Footer from '@/contents/Footer';

export default function App() {
  return (
    <>
      <span className="flex justify-center">
        <Header />
      </span>

      <Section id="home" padding={100}>
        <Presentation />
      </Section>

      <Section id="about" padding={50}>
        <About />
      </Section>

      <Section id="skills">
        <Skills />
      </Section>

      <Section id="stacks">
        <Stacks />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="contact" height={90}>
        <ContactMe />
      </Section>

      <Footer />
    </>
  );
}