import Layout from './components/Layout.tsx';
import HeroSection from './components/HeroSection.tsx';
import ExploringSection from './components/ExploringSection.tsx';
import JournalSection from './components/JournalSection.tsx';
import NowSection from './components/NowSection.tsx';
import LabPromoSection from './components/LabPromoSection.tsx';
import ContactSection from './components/ContactSection.tsx';

export default function App() {
  return (
    <Layout>
      {/* Spacious, premium text layouts containing Ley's personal digital home */}
      <div className="space-y-14 sm:space-y-16 md:space-y-24 lg:space-y-28">
        
        {/* Large initial landing screen representing user details */}
        <HeroSection />

        {/* Currently Exploring Grid Cards */}
        <ExploringSection />

        {/* Unified Journal: My Story, Discoveries, and Worth Sharing */}
        <JournalSection />

        {/* Current status tracker */}
        <NowSection />

        {/* High transition portal section to play.ley.dev */}
        <LabPromoSection />

        {/* Icon based reach-out links and signature */}
        <ContactSection />

      </div>
    </Layout>
  );
}
