import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    "Personalized career guidance based on your interests",
    "Access to comprehensive government college database",
    "Track important academic deadlines and opportunities",
    "AI-powered recommendations for your educational journey"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Shape Your Academic Future?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have successfully navigated their educational 
          journey with MARG DARSHAK's personalized guidance platform.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-10 text-left max-w-2xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
              <span className="text-white/90">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link to="/assessment">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent text-white border-white/30 hover:bg-white/10"
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </div>

        <p className="text-white/70 text-sm mt-6">
          Free to use • No hidden fees • Government approved
        </p>
      </div>
    </section>
  );
};

export default CTASection;