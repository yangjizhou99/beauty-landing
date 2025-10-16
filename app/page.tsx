import Hero from "@/components/Hero";
import ServiceGridWithDetails from "@/components/ServiceGridWithDetails";
import PortfolioGrid from "@/components/PortfolioGrid";
import ReviewList from "@/components/ReviewList";
import CertificateSection from "@/components/CertificateSection";
import MapEmbed from "@/components/MapEmbed";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";
import { Service, Work, QA, Review } from "@/lib/config";
import servicesData from "@/content/services.json";
import portfolioData from "@/content/portfolio.json";
import faqData from "@/content/faq.json";
import reviewsData from "@/content/reviews.json";
import landingTextsData from "@/content/landing-texts.json";

interface LandingText {
  id: string;
  service: string;
  title: string;
  content: string;
  keywords: string[];
}

const services = servicesData as Service[];
const portfolio = portfolioData as Work[];
const faq = faqData as QA[];
const reviews = reviewsData as Review[];
const landingTexts = landingTextsData as LandingText[];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero variant="A" />
      <ServiceGridWithDetails items={services} landingTexts={landingTexts} />
      <PortfolioGrid items={portfolio} />
      <ReviewList items={reviews} />
      <CertificateSection />
      <MapEmbed />
      <FAQ items={faq} />
      <StickyCTA />
    </div>
  );
}
