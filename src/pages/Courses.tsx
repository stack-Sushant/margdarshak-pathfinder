import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, BookOpen, TrendingUp, Users, Clock, Star } from "lucide-react";
import { useState } from "react";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStream, setSelectedStream] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Bachelor of Science (B.Sc.)",
      stream: "Science",
      description: "Comprehensive science education with multiple specialization options",
      duration: "3 years",
      careerPaths: ["Research Scientist", "Lab Technician", "Healthcare Professional", "Teacher"],
      averageSalary: "₹3-8 LPA",
      demandLevel: "High",
      colleges: 450,
      rating: 4.5
    },
    {
      id: 2,
      title: "Bachelor of Commerce (B.Com)",
      stream: "Commerce", 
      description: "Business and commerce fundamentals with accounting and finance focus",
      duration: "3 years",
      careerPaths: ["Accountant", "Financial Analyst", "Banking Professional", "CA/CS"],
      averageSalary: "₹2.5-6 LPA",
      demandLevel: "Very High",
      colleges: 380,
      rating: 4.3
    },
    {
      id: 3,
      title: "Bachelor of Arts (B.A.)",
      stream: "Arts",
      description: "Liberal arts education with humanities and social sciences",
      duration: "3 years", 
      careerPaths: ["Civil Services", "Journalist", "Teacher", "Social Worker"],
      averageSalary: "₹2-5 LPA",
      demandLevel: "Moderate",
      colleges: 520,
      rating: 4.2
    },
    {
      id: 4,
      title: "Bachelor of Computer Applications (BCA)",
      stream: "Science",
      description: "Computer science and applications with programming focus",
      duration: "3 years",
      careerPaths: ["Software Developer", "System Analyst", "Web Developer", "IT Consultant"],
      averageSalary: "₹4-10 LPA",
      demandLevel: "Very High",
      colleges: 280,
      rating: 4.6
    },
    {
      id: 5,
      title: "Bachelor of Business Administration (BBA)",
      stream: "Commerce",
      description: "Management and business administration fundamentals",
      duration: "3 years",
      careerPaths: ["Manager", "Business Analyst", "Marketing Executive", "Entrepreneur"],
      averageSalary: "₹3-7 LPA",
      demandLevel: "High", 
      colleges: 320,
      rating: 4.4
    },
    {
      id: 6,
      title: "Bachelor of Social Work (BSW)",
      stream: "Arts",
      description: "Social work practices and community development",
      duration: "3 years",
      careerPaths: ["Social Worker", "NGO Professional", "Counselor", "Community Developer"],
      averageSalary: "₹2-4 LPA",
      demandLevel: "Moderate",
      colleges: 150,
      rating: 4.1
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStream = selectedStream === "all" || course.stream === selectedStream;
    return matchesSearch && matchesStream;
  });

  const getDemandColor = (level: string) => {
    switch (level) {
      case "Very High": return "bg-success text-success-foreground";
      case "High": return "bg-primary text-primary-foreground";
      case "Moderate": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Courses
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover degree programs that align with your interests and career goals. 
              Get detailed insights into course content, career paths, and opportunities.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-card">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedStream} onValueChange={setSelectedStream}>
                <SelectTrigger>
                  <SelectValue placeholder="Select stream" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Streams</SelectItem>
                  <SelectItem value="Science">Science</SelectItem>
                  <SelectItem value="Commerce">Commerce</SelectItem>
                  <SelectItem value="Arts">Arts</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center space-x-2">
                <span>Apply Filters</span>
              </Button>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.stream}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{course.colleges} colleges</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Job Demand</span>
                        <Badge className={getDemandColor(course.demandLevel)}>
                          {course.demandLevel}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Average Salary:</span> {course.averageSalary}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-2">Career Paths:</div>
                      <div className="flex flex-wrap gap-1">
                        {course.careerPaths.slice(0, 3).map((path, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {path}
                          </Badge>
                        ))}
                        {course.careerPaths.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{course.careerPaths.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="default" size="sm" className="flex-1">
                        Find Colleges
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-secondary text-white border-0 shadow-glow max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Still Confused About Course Selection?
                </h3>
                <p className="text-white/90 mb-6">
                  Take our comprehensive career assessment to get personalized course recommendations 
                  based on your interests, aptitude, and career goals.
                </p>
                <Button variant="hero" size="lg" className="bg-white text-secondary hover:bg-white/90">
                  Take Career Assessment
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

export default Courses;