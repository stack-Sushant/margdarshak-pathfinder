import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, Bell, CheckCircle, AlertCircle, Calendar } from "lucide-react";

const Timeline = () => {
  const currentEvents = [
    {
      id: 1,
      title: "DU Admission Registration",
      description: "Online registration for Delhi University undergraduate courses",
      date: "March 15, 2024",
      deadline: "April 10, 2024",
      status: "ongoing",
      category: "Admission",
      priority: "high",
      actionRequired: true
    },
    {
      id: 2,
      title: "JEE Main Application",
      description: "Application for Joint Entrance Examination - Main",
      date: "February 1, 2024", 
      deadline: "March 1, 2024",
      status: "upcoming",
      category: "Entrance Exam",
      priority: "high",
      actionRequired: true
    },
    {
      id: 3,
      title: "Merit Scholarship Applications",
      description: "State government merit-based scholarship applications",
      date: "March 1, 2024",
      deadline: "March 31, 2024", 
      status: "ongoing",
      category: "Scholarship",
      priority: "medium",
      actionRequired: false
    }
  ];

  const upcomingEvents = [
    {
      id: 4,
      title: "Mumbai University Admissions",
      description: "Online admission process for various undergraduate programs",
      date: "May 1, 2024",
      deadline: "June 15, 2024",
      category: "Admission",
      priority: "medium"
    },
    {
      id: 5,
      title: "NEET Registration",
      description: "National Eligibility cum Entrance Test for medical courses",
      date: "April 15, 2024",
      deadline: "May 15, 2024", 
      category: "Entrance Exam",
      priority: "high"
    },
    {
      id: 6,
      title: "Central University Common Entrance",
      description: "Common entrance test for central universities",
      date: "June 1, 2024",
      deadline: "July 1, 2024",
      category: "Entrance Exam", 
      priority: "medium"
    }
  ];

  const completedEvents = [
    {
      id: 7,
      title: "CBSE Board Results",
      description: "Class 12 board examination results declaration",
      date: "February 20, 2024",
      completedDate: "February 20, 2024",
      category: "Results",
      status: "completed"
    },
    {
      id: 8,
      title: "State Board Applications",
      description: "Application deadline for state board supplementary exams",
      date: "January 15, 2024",
      completedDate: "January 30, 2024",
      category: "Exam",
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing": return "bg-primary text-primary-foreground";
      case "upcoming": return "bg-warning text-warning-foreground";
      case "completed": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Admission": return CalendarDays;
      case "Entrance Exam": return Clock;
      case "Scholarship": return Bell;
      case "Results": return CheckCircle;
      default: return Calendar;
    }
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <Header />
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Academic Timeline
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay on top of important dates for admissions, entrance exams, scholarships, 
              and academic deadlines. Never miss an opportunity again.
            </p>
          </div>

          {/* Current & Urgent Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <AlertCircle className="h-6 w-6 text-destructive mr-2" />
              Action Required
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEvents.map((event) => {
                const IconComponent = getCategoryIcon(event.category);
                return (
                  <Card key={event.id} className="bg-gradient-card border-border shadow-card hover:shadow-elevated transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                        <IconComponent className={`h-5 w-5 ${getPriorityColor(event.priority)}`} />
                      </div>
                      <CardTitle className="text-lg">
                        {event.title}
                      </CardTitle>
                      <CardDescription>
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <div className="text-muted-foreground">Start Date:</div>
                          <div className="font-medium">{event.date}</div>
                        </div>
                        <div className="text-sm">
                          <div className="text-muted-foreground">Deadline:</div>
                          <div className="font-medium text-destructive">{event.deadline}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {event.category}
                          </Badge>
                          <div className={`text-xs font-medium ${getPriorityColor(event.priority)}`}>
                            {event.priority} priority
                          </div>
                        </div>
                        <Button 
                          variant={event.actionRequired ? "default" : "outline"} 
                          size="sm" 
                          className="w-full"
                        >
                          {event.actionRequired ? "Apply Now" : "View Details"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Clock className="h-6 w-6 text-warning mr-2" />
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => {
                const IconComponent = getCategoryIcon(event.category);
                return (
                  <Card key={event.id} className="bg-gradient-card border-border shadow-card">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">
                          Upcoming
                        </Badge>
                        <IconComponent className={`h-5 w-5 ${getPriorityColor(event.priority)}`} />
                      </div>
                      <CardTitle className="text-lg">
                        {event.title}
                      </CardTitle>
                      <CardDescription>
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="text-sm">
                          <div className="text-muted-foreground">Start Date:</div>
                          <div className="font-medium">{event.date}</div>
                        </div>
                        <div className="text-sm">
                          <div className="text-muted-foreground">Deadline:</div>
                          <div className="font-medium">{event.deadline}</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {event.category}
                          </Badge>
                          <div className={`text-xs font-medium ${getPriorityColor(event.priority)}`}>
                            {event.priority} priority
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Set Reminder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Completed Events */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 text-success mr-2" />
              Completed Events
            </h2>
            <div className="space-y-4">
              {completedEvents.map((event) => {
                const IconComponent = getCategoryIcon(event.category);
                return (
                  <Card key={event.id} className="bg-muted/30 border-border opacity-75">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <IconComponent className="h-5 w-5 text-success" />
                          <div>
                            <div className="font-medium">{event.title}</div>
                            <div className="text-sm text-muted-foreground">{event.description}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-success text-success-foreground">
                            Completed
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-1">
                            {event.completedDate}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-secondary text-white border-0 shadow-glow max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Never Miss Important Deadlines
                </h3>
                <p className="text-white/90 mb-6">
                  Get personalized notifications and reminders for admissions, scholarships, 
                  and entrance exams that match your academic profile and interests.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" className="bg-white text-secondary hover:bg-white/90">
                    <Bell className="mr-2 h-5 w-5" />
                    Enable Notifications
                  </Button>
                  <Button variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10">
                    Customize Timeline
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

export default Timeline;