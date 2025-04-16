// src/pages/index.jsx
import PageMeta from '../components/meta/PageMeta';
import Hero from '../components/sections/Hero';
import StorySection from '../components/sections/StorySection';

export default function HomePage() {
  return (
    <>
      <PageMeta pageName="home" />
      
      <main className="bg-card text-text dark:bg-background dark:text-white antialiased">
        <Hero />
        <StorySection/>
      </main>
    </>
  );
}