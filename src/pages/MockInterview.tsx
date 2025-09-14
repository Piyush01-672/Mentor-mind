import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Mic, 
  MicOff, 
  Play, 
  Square, 
  SkipForward, 
  Clock, 
  Trophy,
  ArrowLeft,
  ArrowRight,
  Brain
} from "lucide-react";

const MockInterview = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isInterviewStarted, setIsInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [textAnswer, setTextAnswer] = useState("");

  const roles = [
    "Software Engineer",
    "Product Manager",
    "Data Scientist",
    "UX Designer",
    "Marketing Manager",
    "Sales Representative",
    "Business Analyst",
    "DevOps Engineer",
  ];

  const difficulties = [
    { value: "entry", label: "Entry Level" },
    { value: "mid", label: "Mid Level" },
    { value: "senior", label: "Senior Level" },
    { value: "executive", label: "Executive Level" },
  ];

  // Mock questions - will be replaced with AI-generated questions
  const questions = [
    "Tell me about yourself and your background.",
    "Why are you interested in this role?",
    "Describe a challenging project you worked on.",
    "How do you handle tight deadlines?",
    "Where do you see yourself in 5 years?",
  ];

  const handleStartInterview = () => {
    if (selectedRole && difficulty) {
      setIsInterviewStarted(true);
      setCurrentQuestion(0);
      setAnswers([]);
    }
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = textAnswer;
    setAnswers(newAnswers);
    setTextAnswer("");
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Interview complete - show results
      console.log("Interview complete:", newAnswers);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setTextAnswer(answers[currentQuestion - 1] || "");
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // TODO: Implement actual recording logic
  };

  if (!isInterviewStarted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Mock Interview</h1>
            <p className="text-muted-foreground">
              Practice with AI-powered interviews tailored to your target role
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <CardTitle>Setup Your Interview</CardTitle>
                <CardDescription>
                  Choose your target role and difficulty level for a personalized interview experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Select Role</label>
                  <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your target role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Difficulty Level</label>
                  <Select value={difficulty} onValueChange={setDifficulty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose difficulty level" />
                    </SelectTrigger>
                    <SelectContent>
                      {difficulties.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-foreground">What to Expect:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>5-7 role-specific questions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Option to answer via text or voice</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>AI-powered feedback and scoring</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Approximately 15-20 minutes</span>
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handleStartInterview}
                  disabled={!selectedRole || !difficulty}
                  className="w-full btn-hero"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Mock Interview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {selectedRole} Interview
              </h1>
              <p className="text-muted-foreground capitalize">
                {difficulty} Level • Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>15:30</span>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsInterviewStarted(false)}
              >
                Exit Interview
              </Button>
            </div>
          </div>
          
          <Progress 
            value={(currentQuestion / questions.length) * 100} 
            className="mt-4"
          />
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
          {/* Question Panel */}
          <div className="lg:col-span-2">
            <Card className="card-elevated mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-primary" />
                  <span>Question {currentQuestion + 1}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground leading-relaxed">
                  {questions[currentQuestion]}
                </p>
              </CardContent>
            </Card>

            {/* Answer Input */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Your Answer</CardTitle>
                <CardDescription>
                  Take your time to provide a thoughtful response
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea
                  value={textAnswer}
                  onChange={(e) => setTextAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="min-h-[200px] input-field"
                />

                {/* Recording Controls */}
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Button
                      variant={isRecording ? "destructive" : "outline"}
                      size="sm"
                      onClick={toggleRecording}
                    >
                      {isRecording ? (
                        <>
                          <Square className="w-4 h-4 mr-2" />
                          Stop Recording
                        </>
                      ) : (
                        <>
                          <Mic className="w-4 h-4 mr-2" />
                          Record Answer
                        </>
                      )}
                    </Button>
                    {isRecording && (
                      <div className="flex items-center space-x-2 text-destructive">
                        <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
                        <span className="text-sm">Recording...</span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Or use voice recording instead of typing
                  </span>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-4">
                  <Button
                    variant="outline"
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <SkipForward className="w-4 h-4 mr-2" />
                      Skip
                    </Button>
                    <Button
                      onClick={handleNextQuestion}
                      disabled={!textAnswer.trim()}
                      className="btn-hero"
                    >
                      {currentQuestion === questions.length - 1 ? (
                        <>
                          <Trophy className="w-4 h-4 mr-2" />
                          Finish Interview
                        </>
                      ) : (
                        <>
                          Next Question
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Interview Progress */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Interview Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {questions.map((_, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                        index === currentQuestion
                          ? "bg-primary/10 border border-primary/20"
                          : index < currentQuestion
                          ? "bg-success/10"
                          : "bg-muted/30"
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          index === currentQuestion
                            ? "bg-primary text-white"
                            : index < currentQuestion
                            ? "bg-success text-white"
                            : "bg-muted-foreground text-white"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span
                        className={`text-sm ${
                          index === currentQuestion
                            ? "text-primary font-medium"
                            : index < currentQuestion
                            ? "text-success"
                            : "text-muted-foreground"
                        }`}
                      >
                        Question {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Interview Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Use the STAR method (Situation, Task, Action, Result)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Be specific and provide concrete examples</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Take your time to think before answering</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Show enthusiasm and passion for the role</span>
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

export default MockInterview;