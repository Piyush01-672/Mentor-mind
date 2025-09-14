import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  BookOpen, 
  Star, 
  Clock, 
  TrendingUp,
  Eye,
  Bookmark,
  ChevronRight
} from "lucide-react";

const QuestionBank = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock data - will be replaced with real API data
  const categories = [
    { id: "behavioral", name: "Behavioral", count: 150 },
    { id: "technical", name: "Technical", count: 200 },
    { id: "situational", name: "Situational", count: 120 },
    { id: "company", name: "Company-Specific", count: 80 },
  ];

  const roles = [
    "Software Engineer",
    "Product Manager", 
    "Data Scientist",
    "UX Designer",
    "Marketing Manager",
    "Sales Representative",
  ];

  const difficulties = [
    { value: "entry", label: "Entry Level" },
    { value: "mid", label: "Mid Level" },
    { value: "senior", label: "Senior Level" },
  ];

  const questions = [
    {
      id: 1,
      question: "Tell me about yourself.",
      category: "behavioral",
      difficulty: "entry",
      roles: ["Software Engineer", "Product Manager"],
      popularity: 95,
      sampleAnswer: "Start with a brief overview of your professional background, highlight key achievements, and connect your experience to the role you're applying for.",
      tips: ["Keep it concise (2-3 minutes)", "Focus on professional achievements", "End with why you're interested in this role"],
      saved: false,
    },
    {
      id: 2,
      question: "Describe a time when you had to work with a difficult team member.",
      category: "behavioral",
      difficulty: "mid",
      roles: ["Product Manager", "Marketing Manager"],
      popularity: 78,
      sampleAnswer: "Use the STAR method to describe the situation, your approach to handling the conflict, and the positive outcome.",
      tips: ["Use STAR method", "Show empathy and problem-solving skills", "Focus on the resolution"],
      saved: true,
    },
    {
      id: 3,
      question: "How would you design a URL shortener like bit.ly?",
      category: "technical",
      difficulty: "senior",
      roles: ["Software Engineer"],
      popularity: 89,
      sampleAnswer: "Start with requirements gathering, then discuss system architecture, database design, and scalability considerations.",
      tips: ["Ask clarifying questions", "Think about scale", "Consider edge cases"],
      saved: false,
    },
    {
      id: 4,
      question: "What would you do if you disagreed with your manager's decision?",
      category: "situational",
      difficulty: "mid",
      roles: ["Product Manager", "Marketing Manager"],
      popularity: 82,
      sampleAnswer: "Demonstrate respect for hierarchy while showing you can advocate for your ideas professionally.",
      tips: ["Show respect for authority", "Demonstrate communication skills", "Focus on finding common ground"],
      saved: false,
    },
  ];

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.question.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === "all" || question.roles.includes(selectedRole);
    const matchesDifficulty = selectedDifficulty === "all" || question.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === "all" || question.category === selectedCategory;
    
    return matchesSearch && matchesRole && matchesDifficulty && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "entry": return "bg-success/10 text-success border-success/20";
      case "mid": return "bg-warning/10 text-warning border-warning/20";
      case "senior": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const QuestionCard = ({ question }: { question: any }) => (
    <Card className="card-elevated hover:shadow-lg transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {question.question}
            </h3>
            <Button variant="ghost" size="sm">
              <Bookmark className={`w-4 h-4 ${question.saved ? "fill-current text-primary" : "text-muted-foreground"}`} />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className={getDifficultyColor(question.difficulty)}>
              {question.difficulty}
            </Badge>
            <Badge variant="outline">
              {question.category}
            </Badge>
            {question.roles.slice(0, 2).map((role) => (
              <Badge key={role} variant="secondary">
                {role}
              </Badge>
            ))}
            {question.roles.length > 2 && (
              <Badge variant="secondary">
                +{question.roles.length - 2} more
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4" />
                <span>{question.popularity}% popular</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
              View Details
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Question Bank</h1>
          <p className="text-muted-foreground">
            Explore thousands of interview questions with expert answers and tips
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Filters</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Role</label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Roles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Difficulty</label>
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Levels" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      {difficulties.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedCategory === category.id
                          ? "bg-primary/10 border border-primary/20"
                          : "hover:bg-muted/50"
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="font-medium text-foreground">{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 input-field"
              />
            </div>

            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {filteredQuestions.length} Questions Found
                </h2>
                <p className="text-muted-foreground text-sm">
                  {selectedRole !== "all" && `${selectedRole} • `}
                  {selectedDifficulty !== "all" && `${selectedDifficulty} level • `}
                  {selectedCategory !== "all" && categories.find(c => c.id === selectedCategory)?.name}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Saved Questions
                </Button>
                <Button size="sm" className="btn-hero">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Practice Set
                </Button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {filteredQuestions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </div>

            {filteredQuestions.length === 0 && (
              <Card className="card-elevated">
                <CardContent className="p-12 text-center">
                  <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No Questions Found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or search terms to find relevant questions.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;