import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Package, BookOpen, Newspaper, Calendar, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PrintingPage() {
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
            <Link href="/marketing" className="text-sm font-medium hover:text-blue-600 transition-colors">Marketing</Link>
            <Link href="/printing" className="text-sm font-medium text-blue-600">Printing</Link>
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
            <FileText className="w-3 h-3 mr-1" />
            Printing Portfolio
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Professional Printing Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            High-quality printing solutions for all your business and marketing needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Printing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 w-fit">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Business Materials</CardTitle>
                <CardDescription>Cards, letterheads & stationery</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 w-fit">
                  <Newspaper className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Marketing Collateral</CardTitle>
                <CardDescription>Brochures, flyers & posters</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 w-fit">
                  <Package className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Large Format</CardTitle>
                <CardDescription>Banners, signage & displays</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-4 py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Print Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Business Cards */}
            <Card className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 flex items-center justify-center">
                <FileText className="w-16 h-16 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Business Cards</CardTitle>
                <CardDescription>Premium cards with special finishes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">Embossed</Badge>
                  <Badge variant="secondary">Foil Stamping</Badge>
                  <Badge variant="secondary">UV Coating</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Brochures */}
            <Card className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-blue-400 group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Brochures & Catalogs</CardTitle>
                <CardDescription>Multi-page perfect bound materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">Tri-fold</Badge>
                  <Badge variant="secondary">Saddle Stitch</Badge>
                  <Badge variant="secondary">Perfect Bind</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Posters */}
            <Card className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center">
                <Newspaper className="w-16 h-16 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Posters & Flyers</CardTitle>
                <CardDescription>Eye-catching promotional materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">Full Color</Badge>
                  <Badge variant="secondary">Large Format</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Banners */}
            <Card className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 flex items-center justify-center">
                <Package className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Banners & Signage</CardTitle>
                <CardDescription>Outdoor and indoor displays</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">Vinyl</Badge>
                  <Badge variant="secondary">Mesh</Badge>
                  <Badge variant="secondary">Fabric</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Event Materials */}
            <Card className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900 flex items-center justify-center">
                <Calendar className="w-16 h-16 text-yellow-600 group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Event Materials</CardTitle>
                <CardDescription>Programs, tickets & badges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">Programs</Badge>
                  <Badge variant="secondary">Tickets</Badge>
                  <Badge variant="secondary">Badges</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Specialty Items */}
            <Card className="group hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-900 dark:to-red-900 flex items-center justify-center">
                <Award className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
              </div>
              <CardHeader>
                <CardTitle>Specialty Printing</CardTitle>
                <CardDescription>Custom packaging & labels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">Labels</Badge>
                  <Badge variant="secondary">Stickers</Badge>
                  <Badge variant="secondary">Packaging</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Printing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-orange-600 mb-2">24-48h</div>
                <CardTitle className="text-lg">Quick Turnaround</CardTitle>
                <CardDescription>Fast printing & delivery</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-blue-600 mb-2">HD</div>
                <CardTitle className="text-lg">Premium Quality</CardTitle>
                <CardDescription>Professional grade materials</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
                <CardTitle className="text-lg">Any Quantity</CardTitle>
                <CardDescription>From 1 to 10,000+ prints</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-pink-600 mb-2">✓</div>
                <CardTitle className="text-lg">Free Design</CardTitle>
                <CardDescription>Complimentary design review</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Print?</h2>
          <p className="text-lg opacity-90">
            Get a free quote for your printing project today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
              View Price List
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
