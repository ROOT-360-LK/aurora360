import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, TrendingUp, Target, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header/Navigation */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image alt="Logo" src="/icon.jpg" width={32} height={32} />
            <span className="text-xl font-bold">Aurora 360</span>
            <Badge variant="secondary" className="ml-2">By Root360</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/design" className="text-sm font-medium hover:text-blue-600 transition-colors">Design</Link>
            <Link href="/marketing" className="text-sm font-medium text-blue-600">Marketing</Link>
            <Link href="/printing" className="text-sm font-medium hover:text-blue-600 transition-colors">Printing</Link>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-blue-600 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="w-3 h-3 mr-1" />
            Marketing Portfolio
          </Badge>
          <h1 className="text-5xl pb-4 md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Digital Marketing Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our success stories in social media management and strategic marketing campaigns
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="container mx-auto px-4 py-12" id="social-media">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MessageCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Social Media Campaigns</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 flex items-center justify-center relative">
                  <MessageCircle className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
                  <Badge className="absolute top-4 right-4 bg-blue-500">Featured</Badge>
                </div>
                <CardHeader>
                  <CardTitle>Social Campaign {item}</CardTitle>
                  <CardDescription>Instagram, Facebook & TikTok</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary">Content Creation</Badge>
                      <Badge variant="secondary">Engagement</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>+245% reach</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BarChart3 className="w-4 h-4" />
                        <span>2.5M views</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="container mx-auto px-4 py-12 bg-slate-50 dark:bg-slate-900/50" id="strategy">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Marketing Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="group hover:shadow-xl transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
                        <Target className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle>Strategy Case Study {item}</CardTitle>
                        <CardDescription>Full-funnel marketing approach</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Comprehensive marketing strategy including market analysis, competitor research, 
                    customer journey mapping, and multi-channel campaign planning.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">150%</div>
                      <div className="text-xs text-muted-foreground">ROI Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">45%</div>
                      <div className="text-xs text-muted-foreground">Conversion</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">3.2x</div>
                      <div className="text-xs text-muted-foreground">Growth</div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">SEO</Badge>
                    <Badge variant="secondary">Content</Badge>
                    <Badge variant="secondary">Analytics</Badge>
                    <Badge variant="secondary">Email</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                <CardDescription>Campaigns Launched</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">10M+</div>
                <CardDescription>People Reached</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">200%</div>
                <CardDescription>Avg ROI</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">98%</div>
                <CardDescription>Client Satisfaction</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Business?</h2>
          <p className="text-lg opacity-90">
            Let&apos;s create a winning marketing strategy together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Aurora 360 by Root360. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
