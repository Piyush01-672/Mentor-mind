import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";
import { ArrowRight, CheckCircle, Users, TrendingUp, Award, Brain, FileText, Mic, BookOpen, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import resumeIcon from "@/assets/resume-icon.png";
import interviewIcon from "@/assets/interview-icon.png";
import questionsIcon from "@/assets/questions-icon.png";

const Landing = () => {
  const features = [
    {
      title: "AI Resume Analysis",
      description: "Get instant feedback on your resume with AI-powered analysis. Identify strengths, weaknesses, and optimization opportunities.",
      icon: FileText,
      image: resumeIcon,
    },
    {
      title: "Mock Interviews",
      description: "Practice with AI-driven mock interviews tailored to your target role. Receive detailed feedback on your responses.",
      icon: Mic,
      image: interviewIcon,
    },
    {
      title: "Question Bank",
      description: "Access thousands of interview questions categorized by role, company, and difficulty level with expert answers.",
      icon: BookOpen,
      image: questionsIcon,
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvement over time with detailed analytics and personalized recommendations.",
      icon: TrendingUp,
    },
    {
      title: "Industry Insights",
      description: "Stay updated with the latest hiring trends and requirements in your field.",
      icon: Brain,
    },
    {
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security and privacy measures.",
      icon: Shield,
    },
  ];

  const stats = [
    { value: "10,000+", label: "Users Prepared" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Industries Covered" },
    { value: "24/7", label: "AI Availability" },
  ];

  const benefits = [
    "Personalized AI feedback",
    "Industry-specific preparation",
    "Real-time interview practice",
    "Progress tracking & analytics",
    "Expert-curated content",
    "Mobile-friendly platform",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Master Your{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Career Journey
                  </span>{" "}
                  with AI
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Prepare for interviews, optimize your resume, and accelerate your career growth with our AI-powered mentorship platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button className="btn-hero">
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="border-primary/20 hover:border-primary">
                    Explore Features
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={heroImage}
                alt="AI Career Guidance"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive suite of AI-powered tools helps you prepare for interviews, optimize your professional profile, and land your dream job.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    MentorMind?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our platform combines cutting-edge AI technology with proven career development strategies to give you the competitive edge you need.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup">
                <Button className="btn-hero">
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="card-elevated p-8 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Success Stories</h3>
                    <p className="text-muted-foreground text-sm">Real results from real users</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <blockquote className="text-foreground italic">
                    "MentorMind helped me land my dream job at a Fortune 500 company. The AI feedback was incredibly insightful!"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Sarah Chen</div>
                      <div className="text-sm text-muted-foreground">Software Engineer at Google</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of professionals who have already accelerated their career growth with MentorMind's AI-powered guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                  Start Free Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;