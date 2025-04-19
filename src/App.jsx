import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const domains = [
  { name: "BrandLoop.com", price: "$4,999" },
  { name: "LaunchNest.io", price: "$2,999" },
  { name: "PixelDrift.com", price: "$3,499" },
  { name: "CloudForge.net", price: "$1,999" },
  // Add more as needed
];

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">DomainTrolley.com</h1>
        <p className="text-lg mb-6">Buy premium domain names curated for brands, startups, and creators.</p>
        <Button className="text-white">Browse Portfolio</Button>
      </section>

      {/* Search Bar */}
      <section className="max-w-xl mx-auto mb-10">
        <Input placeholder="Search domains..." />
      </section>

      {/* Domain Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {domains.map((domain, i) => (
          <Card key={i} className="p-4">
            <CardContent>
              <h2 className="text-xl font-semibold">{domain.name}</h2>
              <p className="text-gray-600">{domain.price}</p>
              <Button variant="outline" className="mt-4 w-full">Inquire</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* About / Contact */}
      <footer className="text-center text-sm text-gray-500">
        <p>© 2025 DomainTrolley.com • Premium Domain Marketplace</p>
        <p>Contact: hello@domaintrolley.com</p>
      </footer>
    </main>
  );
}
