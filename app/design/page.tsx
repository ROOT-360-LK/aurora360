import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Video, Palette, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Header/Navigation */}
      <header className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-900/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image alt="Logo" src="icon.jpg" width={32} height={32} />
            <span className="text-xl font-bold">Aurora 360</span>
            <Badge variant="secondary" className="ml-2">By Root360</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/design" className="text-sm font-medium text-blue-600">Design</Link>
            <Link href="/marketing" className="text-sm font-medium hover:text-blue-600 transition-colors">Marketing</Link>
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
            <Palette className="w-3 h-3 mr-1" />
            Design Portfolio
          </Badge>
          <h1 className="text-5xl pb-4 md:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Creative Design Work
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of graphic design, video production, and motion graphics projects
          </p>
        </div>
      </section>

      {/* Graphic Design Section */}
      <section className="container mx-auto px-4 py-12" id="graphic">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-8 h-8 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Graphic Design</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
                  <Palette className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader>
                  <CardTitle>Project {item}</CardTitle>
                  <CardDescription>Brand identity & visual design</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">Logo Design</Badge>
                    <Badge variant="secondary">Branding</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Production Section */}
      <section className="container mx-auto px-4 py-12 bg-slate-50 dark:bg-slate-900/50" id="video">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Video Production</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 flex items-center justify-center">
                  <Video className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader>
                  <CardTitle>Video Project {item}</CardTitle>
                  <CardDescription>Commercial & promotional videos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">Commercial</Badge>
                    <Badge variant="secondary">Editing</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Motion Graphics Section */}
      <section className="container mx-auto px-4 py-12" id="motion">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Motion Graphics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader>
                  <CardTitle>Animation {item}</CardTitle>
                  <CardDescription>Motion graphics & animations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">Animation</Badge>
                    <Badge variant="secondary">Effects</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90">
            Let&apos;s create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg">
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
              View All Work
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
