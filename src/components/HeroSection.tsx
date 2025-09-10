import { Button } from "@/components/ui/button";
import { ArrowRight, Target, BookOpen, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Your Path to 
              <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                Academic Success
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Navigate your educational journey with confidence. Get personalized guidance 
              for course selection, career paths, and college admissions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/assessment">
                  Start Career Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Link to="/colleges">Explore Colleges</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Aptitude Tests</div>
                  <div className="text-white/80 text-sm">Personalized assessments</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Course Mapping</div>
                  <div className="text-white/80 text-sm">Career path guidance</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">College Finder</div>
                  <div className="text-white/80 text-sm">Government colleges</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Impact So Far</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-accent">10,000+</div>
                  <div className="text-white/80">Students Guided</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-white/80">Government Colleges</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning">95%</div>
                  <div className="text-white/80">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;