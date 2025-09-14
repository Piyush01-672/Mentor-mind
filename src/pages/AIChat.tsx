import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI career assistant. Ask me anything about interviews, career advice, resume tips, or job search strategies!',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateAIResponse = (userQuestion: string): string => {
    const lowerQuestion = userQuestion.toLowerCase();
    
    if (lowerQuestion.includes('resume')) {
      return 'For a strong resume, focus on quantifiable achievements, use action verbs, and tailor it to each job. Include relevant skills, keep it concise (1-2 pages), and ensure consistent formatting.';
    } else if (lowerQuestion.includes('interview')) {
      return 'For interviews: Research the company thoroughly, practice STAR method for behavioral questions, prepare thoughtful questions to ask, dress appropriately, and arrive early. Remember to show enthusiasm and be authentic!';
    } else if (lowerQuestion.includes('salary')) {
      return 'When negotiating salary, research market rates, consider your experience level, and factor in benefits. It\'s often best to let the employer make the first offer, then negotiate based on your value proposition.';
    } else if (lowerQuestion.includes('skill')) {
      return 'Focus on developing both technical and soft skills relevant to your field. Stay updated with industry trends, consider online courses, and practice hands-on projects to demonstrate your abilities.';
    } else if (lowerQuestion.includes('job search')) {
      return 'Effective job searching involves networking, optimizing your LinkedIn profile, applying to relevant positions, following up professionally, and maintaining a consistent application routine.';
    } else {
      return 'That\'s a great question! For career guidance, I recommend focusing on your strengths, setting clear goals, networking actively, and continuously learning. Feel free to ask more specific questions about interviews, resumes, or career development!';
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            AI Career Assistant
          </h1>
          <p className="text-muted-foreground text-lg">
            Get instant answers to your career questions with AI-powered guidance
          </p>
        </div>

        <Card className="h-[70vh] flex flex-col shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" />
              Chat with AI Assistant
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 flex flex-col p-4">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 bg-muted/30 rounded-lg max-h-[50vh]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`flex gap-3 max-w-[85%] ${
                      message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background border border-border'
                      }`}
                    >
                      <p className="text-sm leading-relaxed break-words">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-background border border-border rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="flex gap-2 mt-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about careers, interviews, or job search..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputValue.trim() || isLoading}
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Questions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Quick Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "How to write a good resume?",
              "Tips for job interviews",
              "How to negotiate salary?",
              "What skills should I develop?",
              "Job search strategies",
              "How to prepare for behavioral questions?"
            ].map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-left justify-start h-auto p-3 text-sm hover:bg-primary/10 transition-colors"
                onClick={() => {
                  setInputValue(question);
                  // Auto-send the question
                  const userMessage = {
                    id: Date.now().toString(),
                    text: question,
                    sender: 'user' as const,
                    timestamp: new Date()
                  };
                  setMessages(prev => [...prev, userMessage]);
                  setIsLoading(true);
                  setTimeout(() => {
                    const aiResponse = {
                      id: (Date.now() + 1).toString(),
                      text: generateAIResponse(question),
                      sender: 'ai' as const,
                      timestamp: new Date()
                    };
                    setMessages(prev => [...prev, aiResponse]);
                    setIsLoading(false);
                  }, 1000);
                  setInputValue('');
                }}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;