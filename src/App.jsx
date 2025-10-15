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
      <Header />

      <Section id="home">
        <Presentation />
      </Section>

      <Section id="about">
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

      <Section id="contact">
        <ContactMe />
      </Section>

      <Footer />
    </>
  );
}