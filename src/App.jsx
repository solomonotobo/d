import React from "react";

const domains = [
  { name: "BrandLoop.com", price: "$4,999" },
  { name: "LaunchNest.io", price: "$2,999" },
  { name: "PixelDrift.com", price: "$3,499" },
  { name: "CloudForge.net", price: "$1,999" },
];

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
      <section className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">DomainTrolley.com</h1>
        <p className="text-lg mb-6">Buy premium domain names curated for brands, startups, and creators.</p>
        <button className="bg-black text-white px-4 py-2 rounded">Browse Portfolio</button>
      </section>

      <section className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search domains..."
          className="w-full border border-gray-300 p-2 rounded"
        />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {domains.map((domain, i) => (
          <div key={i} className="p-4 border rounded">
            <h2 className="text-xl font-semibold">{domain.name}</h2>
            <p className="text-gray-600">{domain.price}</p>
            <button className="mt-4 w-full border border-black py-1">Inquire</button>
          </div>
        ))}
      </section>

      <footer className="text-center text-sm text-gray-500">
        <p>© 2025 DomainTrolley.com • Premium Domain Marketplace</p>
        <p>Contact: hello@domaintrolley.com</p>
      </footer>
    </main>
  );
}

export default App;
