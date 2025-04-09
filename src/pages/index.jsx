// src/pages/index.jsx
import PageMeta from '../components/meta/PageMeta';
import Hero from '../components/sections/Hero';
import StorySection from '../components/about/StorySection';
import Location from '../components/sections/Location';
import MenuHighlights from '../components/sections/MenuHighlights';

export default function HomePage() {
  return (
    <>
      <PageMeta pageName="home" />
      
      <main className="bg-card text-text dark:bg-background dark:text-white antialiased">
        <Hero />
        <StorySection/>
        <MenuHighlights/>
        <Location/>
      </main>
    </>
  );
}