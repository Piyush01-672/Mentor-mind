import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  Mic, 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Trophy, 
  Target,
  ArrowRight,
  BarChart3,
  CheckCircle
} from "lucide-react";

const Dashboard = () => {
  // Mock data - will be replaced with real data from API
  const userStats = {
    name: "John Doe",
    interviewsCompleted: 12,
    overallScore: 85,
    resumeScore: 92,
    weeklyGoal: 3,
    weeklyProgress: 2,
  };

  const recentActivity = [
    {
      type: "interview",
      title: "Software Engineer Mock Interview",
      score: 88,
      date: "2 hours ago",
      status: "completed",
    },
    {
      type: "resume",
      title: "Resume Analysis",
      score: 92,
      date: "1 day ago",
      status: "completed",
    },
    {
      type: "question",
      title: "Behavioral Questions Practice",
      score: 76,
      date: "2 days ago",
      status: "completed",
    },
  ];

  const quickActions = [
    {
      title: "Start Mock Interview",
      description: "Practice with AI-powered interview simulation",
      icon: Mic,
      href: "/mock-interview",
      color: "bg-gradient-to-br from-primary to-primary-dark",
    },
    {
      title: "Analyze Resume",
      description: "Get instant AI feedback on your resume",
      icon: FileText,
      href: "/resume-analyzer",
      color: "bg-gradient-to-br from-secondary to-secondary-dark",
    },
    {
      title: "Browse Questions",
      description: "Explore our comprehensive question bank",
      icon: BookOpen,
      href: "/question-bank",
      color: "bg-gradient-to-br from-success to-success/80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, {userStats.name}! 👋
          </h1>
          <p className="text-muted-foreground mt-2">
            Continue your journey to career success with personalized AI guidance.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Mic className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Interviews</p>
                  <p className="text-2xl font-bold text-foreground">{userStats.interviewsCompleted}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-success to-success/80 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Overall Score</p>
                  <p className="text-2xl font-bold text-foreground">{userStats.overallScore}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Resume Score</p>
                  <p className="text-2xl font-bold text-foreground">{userStats.resumeScore}%</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-warning to-warning/80 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weekly Goal</p>
                  <p className="text-2xl font-bold text-foreground">{userStats.weeklyProgress}/{userStats.weeklyGoal}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Card className="card-feature group hover:scale-105 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className={`w-16 h-16 ${action.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{action.title}</h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Recent Activity</h2>
                <Link to="/history">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <Card key={index} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                            {activity.type === "interview" && <Mic className="w-5 h-5 text-white" />}
                            {activity.type === "resume" && <FileText className="w-5 h-5 text-white" />}
                            {activity.type === "question" && <BookOpen className="w-5 h-5 text-white" />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{activity.title}</h3>
                            <p className="text-sm text-muted-foreground">{activity.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Score</p>
                            <p className="text-lg font-bold text-success">{activity.score}%</p>
                          </div>
                          <CheckCircle className="w-5 h-5 text-success" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Weekly Progress */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Weekly Progress</span>
                </CardTitle>
                <CardDescription>
                  Complete {userStats.weeklyGoal} activities this week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress 
                    value={(userStats.weeklyProgress / userStats.weeklyGoal) * 100} 
                    className="h-2"
                  />
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {userStats.weeklyProgress} of {userStats.weeklyGoal} completed
                    </span>
                    <span className="text-primary font-medium">
                      {Math.round((userStats.weeklyProgress / userStats.weeklyGoal) * 100)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Chart */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Performance Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Interview Skills</span>
                    <span className="text-sm font-medium text-foreground">{userStats.overallScore}%</span>
                  </div>
                  <Progress value={userStats.overallScore} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Resume Quality</span>
                    <span className="text-sm font-medium text-foreground">{userStats.resumeScore}%</span>
                  </div>
                  <Progress value={userStats.resumeScore} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Schedule */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Today's Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">Complete 1 mock interview</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Review technical questions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Update portfolio</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;