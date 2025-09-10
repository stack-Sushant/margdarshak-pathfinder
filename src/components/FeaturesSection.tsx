import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  MapIcon, 
  School, 
  Calendar, 
  User, 
  TrendingUp,
  BookOpen,
  Target,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Aptitude & Interest Assessment",
    description: "Take personalized quizzes to discover your strengths, interests, and ideal career paths.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    link: "/assessment"
  },
  {
    icon: MapIcon,
    title: "Course-to-Career Mapping",
    description: "Visualize how different degree programs connect to specific career opportunities and growth paths.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    link: "/courses"
  },
  {
    icon: School,
    title: "Government College Directory",
    description: "Find nearby government colleges with detailed information on programs, facilities, and admission requirements.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    link: "/colleges"
  },
  {
    icon: Calendar,
    title: "Timeline Tracker",
    description: "Never miss important dates for admissions, scholarships, entrance exams, and counseling sessions.",
    color: "text-warning",
    bgColor: "bg-warning/10",
    link: "/timeline"
  },
  {
    icon: User,
    title: "Personalized Dashboard",
    description: "Get AI-driven recommendations tailored to your profile, academic interests, and career goals.",
    color: "text-info",
    bgColor: "bg-info/10",
    link: "/dashboard"
  },
  {
    icon: TrendingUp,
    title: "Success Tracking",
    description: "Monitor your progress and get insights on improving your academic and career prospects.",
    color: "text-success",
    bgColor: "bg-success/10",
    link: "/progress"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Educational Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and guidance you need to make 
            informed decisions about your academic and career future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to={feature.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">10,000+</div>
              <div className="text-white/80">Students Helped</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <School className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-white/80">Colleges Listed</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">50+</div>
              <div className="text-white/80">Course Options</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Target className="h-8 w-8 text-white/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;