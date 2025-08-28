"use client"
import { useState } from 'react';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import ContentTextbox from '@/components/textbox/ContentTextbox';
import PushableButton from '@/components/buttons/PushableButton';
import Image from 'next/image';

const heroContent = { title: "Welcome to MySite", description: "Deliver clarity and purpose with our solutions.", primaryButtonText: "Get Started", secondaryButtonText: "Learn More" };
const aboutContent = { description: "We strive to provide transparent and trustworthy services." };
const contactContent = { headline: "Contact Us", privacyNote: "Your information is safe with us." };

const CustomContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 border rounded" required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border rounded" required />
      <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="p-2 border rounded" required></textarea>
      <PushableButton text="Submit" onClick={() => { /* Submit logic here */ }} className="bg-blue-500 text-white rounded" />
      <p className="text-xs">{contactContent.privacyNote}</p>
    </form>
  );
}

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-gradient-to-br from-[#eaf4ff] to-[#ffffff] py-16">
        <SimpleHero title={heroContent.title} description={heroContent.description} primaryButtonText={heroContent.primaryButtonText} secondaryButtonText={heroContent.secondaryButtonText} />
      </section>
      <section id="about" className="bg-white py-16">
        <MinimalAbout description={aboutContent.description} />
      </section>
      <section id="terms" className="bg-white py-16">
        <ContentTextbox title={<h2>Terms of Service</h2>} description={<p>Summary of our terms and conditions.</p>} className="text-lg" />
      </section>
      <section id="policy" className="bg-[#F9FAFB] py-16">
        <ContentTextbox title={<h2>Privacy Policy</h2>} description={<p>Summary of our privacy practices.</p>} className="text-lg" />
      </section>
      <section id="contact" className="bg-white py-16">
        <h2 className="text-2xl font-bold">{contactContent.headline}</h2>
        <CustomContactForm />
      </section>
    </SiteThemeProvider>
  );
}