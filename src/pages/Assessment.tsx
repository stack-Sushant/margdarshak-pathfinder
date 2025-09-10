import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Clock, Target, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const assessmentTypes = [
    {
      icon: Brain,
      title: "Aptitude Assessment",
      description: "Discover your natural abilities and cognitive strengths",
      duration: "15 minutes",
      questions: "30 questions",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Target,
      title: "Interest Profiling",
      description: "Identify subjects and activities that genuinely interest you",
      duration: "10 minutes", 
      questions: "25 questions",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Users,
      title: "Personality Analysis",
      description: "Understand your working style and personality traits",
      duration: "12 minutes",
      questions: "20 questions",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Career Assessment
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take our comprehensive assessment to discover your ideal career path and 
              get personalized course recommendations.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">Assessment Progress</span>
              <span className="text-sm text-muted-foreground">{currentStep}/{totalSteps} completed</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Assessment Types */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {assessmentTypes.map((type, index) => (
              <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${type.bgColor} flex items-center justify-center mb-4`}>
                    <type.icon className={`h-6 w-6 ${type.color}`} />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {type.title}
                  </CardTitle>
                  <CardDescription>
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {type.duration}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Target className="h-4 w-4 mr-2" />
                      {type.questions}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Start Assessment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sample Question Preview */}
          <Card className="bg-gradient-card border-border shadow-card mb-8">
            <CardHeader>
              <CardTitle>Sample Question Preview</CardTitle>
              <CardDescription>
                Get a taste of what our assessment questions look like
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Question 1 of 30</h4>
                  <p className="mb-4">Which activity would you enjoy most during your free time?</p>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="sample" className="text-primary" />
                      <span>Reading about scientific discoveries and innovations</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="sample" className="text-primary" />
                      <span>Creating art, music, or writing stories</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="sample" className="text-primary" />
                      <span>Organizing events or leading group activities</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="sample" className="text-primary" />
                      <span>Solving mathematical puzzles or problems</span>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Card className="bg-gradient-primary text-white border-0 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Discover Your Ideal Career Path?
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Complete our comprehensive assessment and get personalized recommendations 
                  for courses, colleges, and career opportunities that match your profile.
                </p>
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Full Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;