import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

export default function GalleryPage() {
  const galleryPath = path.join(process.cwd(), 'public', 'Gallery');
  const images = fs.readdirSync(galleryPath);

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const filteredImages = images.filter((image) =>
    imageExtensions.includes(path.extname(image).toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050A1C] text-white flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 px-4 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e3a8a_0.1,transparent_2px)] bg-[length:24px_24px]"></div>
          
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-blue-400">Gallery</span>
            </h1>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Explore moments from our events, workshops, and community gatherings
            </p>
          </div>
        </section>
        
        {/* Gallery Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {filteredImages.map((image, index) => {
                const src = `/Gallery/${image}`;
                return (
                  <div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden border border-blue-900/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group"
                  >
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* No Images Fallback */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-blue-200">No images found in the gallery.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
