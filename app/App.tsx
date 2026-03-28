import { Hero } from './components/Hero';
import { Competencies } from './components/Competencies';
import { SelectedProjects } from './components/SelectedProjects';
import { KevaProject } from './components/KevaProject';
import { EnevoProject } from './components/EnevoProject';
import { SeureProject } from './components/SeureProject';
import { VisualsProject } from './components/VisualsProject';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Hero />
      <Competencies />
      <SelectedProjects />
      <KevaProject />
      <EnevoProject />
      <SeureProject />
      <VisualsProject />
      <Contact />
    </div>
  );
}