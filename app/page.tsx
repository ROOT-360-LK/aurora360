import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, MessageCircle, TrendingUp, Users, Zap, Target } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header/Navigation */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image alt="Logo" src="icon.jpg" width={32} height={32} />
            <span className="text-xl font-bold">Aurora 360 </span>
            <a href="https://root-360-lk.github.io" target="_blank" rel="noopener noreferrer"><Badge variant="secondary" className="ml-2">By Root360</Badge></a>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</a>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="mb-4">
            <Zap className="w-3 h-3 mr-1" />
            Digital Marketing Excellence
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Elevate Your Brand&apos;s Digital Presence
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aurora 360, a Root360 company, delivers cutting-edge digital marketing and social media strategies 
            that drive engagement, growth, and measurable results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="text-lg">
              Start Your Campaign
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Comprehensive digital solutions for modern businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Social Media Management</CardTitle>
                <CardDescription>
                  Build engaging communities across all platforms with strategic content and real-time engagement.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Digital Advertising</CardTitle>
                <CardDescription>
                  Data-driven ad campaigns that maximize ROI across Google, Meta, LinkedIn, and beyond.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Content Marketing</CardTitle>
                <CardDescription>
                  Compelling content strategies that attract, engage, and convert your target audience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Brand Strategy</CardTitle>
                <CardDescription>
                  Develop a powerful brand identity that resonates with your audience and stands out.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle>Influencer Marketing</CardTitle>
                <CardDescription>
                  Connect with the right influencers to amplify your brand message and reach new audiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  In-depth performance tracking and actionable insights to optimize your marketing efforts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-5xl font-bold text-blue-600 mb-2">500+</h3>
                  <p className="text-muted-foreground">Successful Campaigns</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-purple-600 mb-2">98%</h3>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold text-green-600 mb-2">250M+</h3>
                  <p className="text-muted-foreground">Impressions Generated</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold mb-4">Why Choose Aurors 360</h2>
          <p className="text-xl text-muted-foreground">
            As a subsidiary of Root360, we combine innovative thinking with proven methodologies. 
            Our team of digital marketing experts stays ahead of industry trends to deliver campaigns 
            that not only meet but exceed your expectations.
          </p>
          <div className="grid md:grid-cols-2 gap-6 pt-8 text-left">
            <Card>
              <CardHeader>
                <CardTitle>🎯 Strategic Approach</CardTitle>
                <CardDescription>
                  Every campaign is backed by thorough market research and data analysis to ensure optimal results.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>🚀 Cutting-Edge Tools</CardTitle>
                <CardDescription>
                  We leverage the latest marketing technologies and platforms to give you a competitive edge.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>💡 Creative Excellence</CardTitle>
                <CardDescription>
                  Our creative team crafts compelling narratives that capture attention and drive action.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>📊 Transparent Reporting</CardTitle>
                <CardDescription>
                  Receive detailed analytics and insights with clear metrics that demonstrate real ROI.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-bold">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl opacity-90">
                Let&apos;s create a winning strategy together. Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="text-lg">
                  Schedule a Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 border-white/30">
                  Get a Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
                <span className="text-lg font-bold">Aurora 360</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A Root360 company specializing in digital marketing and social media excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Digital Ads</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Content Marketing</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Brand Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Aurora 360, a Root360 Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
