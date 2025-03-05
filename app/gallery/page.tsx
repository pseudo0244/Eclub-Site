import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Header from '@/components/ui/header';

export default function GalleryPage() {
  const galleryPath = path.join(process.cwd(), 'public', 'Gallery');
  const images = fs.readdirSync(galleryPath);

  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const filteredImages = images.filter((image) =>
    imageExtensions.includes(path.extname(image).toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-15">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-center" style={{ marginTop: '5rem' }}>
          Our Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredImages.map((image, index) => {
            const src = `/Gallery/${image}`;
            return (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
