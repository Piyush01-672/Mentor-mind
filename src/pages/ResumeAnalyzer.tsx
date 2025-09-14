import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  Star,
  Download,
  Eye,
  RefreshCw
} from "lucide-react";

const ResumeAnalyzer = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  // Mock analysis data - will be replaced with real API data
  const analysisData = {
    overallScore: 82,
    sections: {
      formatting: { score: 90, feedback: "Excellent formatting and visual appeal" },
      content: { score: 85, feedback: "Strong technical skills and experience" },
      keywords: { score: 75, feedback: "Could benefit from more industry keywords" },
      achievements: { score: 80, feedback: "Good quantifiable achievements" },
    },
    strengths: [
      "Clear and professional formatting",
      "Strong technical skill set",
      "Relevant work experience",
      "Good use of action verbs",
    ],
    improvements: [
      "Add more industry-specific keywords",
      "Include more quantifiable achievements",
      "Expand on leadership experience",
      "Add relevant certifications",
    ],
    keywords: {
      found: ["JavaScript", "React", "Node.js", "Python", "AWS"],
      missing: ["TypeScript", "Docker", "Kubernetes", "CI/CD", "Agile"],
      suggestions: ["Machine Learning", "API Development", "Database Design"],
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setAnalysisComplete(false);
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const ScoreCard = ({ title, score, feedback }: { title: string; score: number; feedback: string }) => (
    <Card className="card-elevated">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">{score}</span>
            <span className="text-sm text-muted-foreground">/100</span>
          </div>
        </div>
        <Progress value={score} className="mb-3" />
        <p className="text-sm text-muted-foreground">{feedback}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Resume Analyzer</h1>
          <p className="text-muted-foreground">
            Get AI-powered insights to optimize your resume for better job prospects
          </p>
        </div>

        {!analysisComplete ? (
          <div className="max-w-2xl mx-auto">
            <Card className="card-elevated">
              <CardHeader className="text-center">
                <CardTitle>Upload Your Resume</CardTitle>
                <CardDescription>
                  Upload your resume in PDF or DOCX format for instant AI analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium text-foreground mb-2">
                      Drop your resume here or click to browse
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports PDF, DOC, and DOCX files up to 10MB
                    </p>
                  </label>
                </div>

                {uploadedFile && (
                  <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{uploadedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing}
                      className="btn-hero"
                    >
                      {isAnalyzing ? (
                        <>
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Analyze Resume
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {isAnalyzing && (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                      <RefreshCw className="w-8 h-8 text-white animate-spin" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Analyzing Your Resume</h3>
                    <p className="text-muted-foreground">
                      Our AI is examining your resume for optimization opportunities...
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Overall Score */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Overall Resume Score</h2>
                    <p className="text-muted-foreground">Your resume analysis is complete</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">{analysisData.overallScore}</div>
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(analysisData.overallScore / 20)
                              ? "text-warning fill-current"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Resume
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  <Button onClick={() => setAnalysisComplete(false)}>
                    <Upload className="w-4 h-4 mr-2" />
                    Analyze Another
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="scores" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="scores">Section Scores</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
                <TabsTrigger value="keywords">Keywords</TabsTrigger>
                <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
              </TabsList>

              <TabsContent value="scores" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(analysisData.sections).map(([key, section]) => (
                    <ScoreCard
                      key={key}
                      title={key.charAt(0).toUpperCase() + key.slice(1)}
                      score={section.score}
                      feedback={section.feedback}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="feedback" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-success">
                        <CheckCircle className="w-5 h-5" />
                        <span>Strengths</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {analysisData.strengths.map((strength, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-warning">
                        <AlertCircle className="w-5 h-5" />
                        <span>Areas for Improvement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {analysisData.improvements.map((improvement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <AlertCircle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-foreground">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="keywords" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="text-success">Found Keywords</CardTitle>
                      <CardDescription>Keywords already in your resume</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {analysisData.keywords.found.map((keyword, index) => (
                          <span
                            key={index}
                            className="badge-success"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="text-warning">Missing Keywords</CardTitle>
                      <CardDescription>Important keywords to consider adding</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {analysisData.keywords.missing.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-warning/10 text-warning border border-warning/20 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="card-elevated">
                    <CardHeader>
                      <CardTitle className="text-info">Suggestions</CardTitle>
                      <CardDescription>Trending keywords in your field</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {analysisData.keywords.suggestions.map((keyword, index) => (
                          <span
                            key={index}
                            className="badge-info"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="suggestions" className="space-y-6">
                <Card className="card-elevated">
                  <CardHeader>
                    <CardTitle>Personalized Recommendations</CardTitle>
                    <CardDescription>
                      Based on your resume analysis, here are specific actions to improve your score
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">High Impact Changes</h4>
                        <ul className="space-y-2 text-sm text-foreground">
                          <li>• Add 3-5 more industry keywords like "TypeScript" and "Docker"</li>
                          <li>• Quantify 2-3 more achievements with specific numbers or percentages</li>
                          <li>• Include a brief summary section at the top of your resume</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                        <h4 className="font-semibold text-secondary mb-2">Medium Impact Changes</h4>
                        <ul className="space-y-2 text-sm text-foreground">
                          <li>• Expand leadership experience descriptions</li>
                          <li>• Add relevant certifications or courses</li>
                          <li>• Use more action verbs in job descriptions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;