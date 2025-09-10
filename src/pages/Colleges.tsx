import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star, Users, BookOpen, Wifi, Home, Building } from "lucide-react";
import { useState } from "react";

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const colleges = [
    {
      id: 1,
      name: "Delhi University",
      location: "New Delhi, Delhi",
      type: "Central University",
      rating: 4.6,
      courses: ["B.A.", "B.Sc.", "B.Com", "BBA"],
      cutoff: "85%+",
      fees: "₹15,000/year",
      facilities: ["Hostel", "Library", "Wi-Fi", "Labs"],
      admissions: "Merit Based",
      distance: "2.5 km"
    },
    {
      id: 2,
      name: "Jawaharlal Nehru University",
      location: "New Delhi, Delhi", 
      type: "Central University",
      rating: 4.5,
      courses: ["B.A.", "B.Sc.", "M.A.", "M.Sc."],
      cutoff: "80%+",
      fees: "₹12,000/year",
      facilities: ["Hostel", "Library", "Wi-Fi", "Sports"],
      admissions: "Entrance Exam",
      distance: "8.2 km"
    },
    {
      id: 3,
      name: "Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      type: "Central University", 
      rating: 4.4,
      courses: ["B.A.", "B.Sc.", "B.Com", "BCA"],
      cutoff: "75%+",
      fees: "₹10,000/year",
      facilities: ["Hostel", "Library", "Labs", "Hospital"],
      admissions: "Entrance Exam",
      distance: "145 km"
    },
    {
      id: 4,
      name: "University of Mumbai",
      location: "Mumbai, Maharashtra",
      type: "State University",
      rating: 4.3,
      courses: ["B.Com", "BBA", "B.Sc.", "BCA"],
      cutoff: "70%+", 
      fees: "₹8,000/year",
      facilities: ["Library", "Wi-Fi", "Labs", "Cafeteria"],
      admissions: "Merit Based",
      distance: "15.7 km"
    },
    {
      id: 5,
      name: "University of Calcutta",
      location: "Kolkata, West Bengal",
      type: "State University",
      rating: 4.2,
      courses: ["B.A.", "B.Sc.", "B.Com"],
      cutoff: "65%+",
      fees: "₹6,000/year", 
      facilities: ["Library", "Wi-Fi", "Labs"],
      admissions: "Merit Based",
      distance: "22.1 km"
    },
    {
      id: 6,
      name: "Madras University",
      location: "Chennai, Tamil Nadu",
      type: "State University",
      rating: 4.1,
      courses: ["B.A.", "B.Sc.", "B.Com", "BSW"],
      cutoff: "60%+",
      fees: "₹7,500/year",
      facilities: ["Library", "Labs", "Sports", "Canteen"],
      admissions: "Merit Based", 
      distance: "18.9 km"
    }
  ];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || college.location.includes(selectedState);
    const matchesType = selectedType === "all" || college.type === selectedType;
    return matchesSearch && matchesState && matchesType;
  });

  const getFacilityIcon = (facility: string) => {
    switch (facility) {
      case "Hostel": return Home;
      case "Library": return BookOpen;
      case "Wi-Fi": return Wifi;
      case "Labs": return Building;
      default: return Building;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Government Colleges Directory
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the best government colleges near you. Compare facilities, courses, 
              fees, and admission requirements to make an informed decision.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8 shadow-card">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search colleges..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                  <SelectItem value="West Bengal">West Bengal</SelectItem>
                  <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="University type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Central University">Central University</SelectItem>
                  <SelectItem value="State University">State University</SelectItem>
                  <SelectItem value="Deemed University">Deemed University</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Near Me</span>
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredColleges.length} colleges
            </p>
          </div>

          {/* College Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredColleges.map((college) => (
              <Card key={college.id} className="bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {college.type}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm font-medium">{college.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {college.name}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{college.location}</span>
                    <span className="text-muted-foreground">• {college.distance}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Course Offerings */}
                    <div>
                      <div className="text-sm font-medium mb-2">Available Courses:</div>
                      <div className="flex flex-wrap gap-1">
                        {college.courses.map((course, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Details */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Cutoff:</span>
                        <div className="font-medium">{college.cutoff}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Annual Fees:</span>
                        <div className="font-medium text-success">{college.fees}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Admission:</span>
                        <div className="font-medium">{college.admissions}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Distance:</span>
                        <div className="font-medium">{college.distance}</div>
                      </div>
                    </div>

                    {/* Facilities */}
                    <div>
                      <div className="text-sm font-medium mb-2">Facilities:</div>
                      <div className="grid grid-cols-2 gap-2">
                        {college.facilities.map((facility, index) => {
                          const IconComponent = getFacilityIcon(facility);
                          return (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <IconComponent className="h-4 w-4 text-muted-foreground" />
                              <span>{facility}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="default" size="sm" className="flex-1">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-primary text-white border-0 shadow-glow max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Can't Find the Right College?
                </h3>
                <p className="text-white/90 mb-6">
                  Let our AI-powered recommendation system suggest colleges based on your 
                  academic profile, location preferences, and career goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Get Recommendations
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10">
                    Contact Counselor
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Colleges;