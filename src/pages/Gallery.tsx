import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'All',
    'Brand Shoots',
    'Photography',
    'Videography',
    'Campaigns',
    'Behind the Scenes',
  ];

  const galleryItems = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    category:
      categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    placeholder: `Image ${i + 1}`,
  }));

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category.toLowerCase() === selectedCategory
        );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    if (direction === 'prev') {
      setSelectedImage(
        selectedImage > 0 ? selectedImage - 1 : filteredItems.length - 1
      );
    } else {
      setSelectedImage(
        selectedImage < filteredItems.length - 1 ? selectedImage + 1 : 0
      );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A curated collection of our finest work. Every frame tells a story
              of creativity, excellence, and brand transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setSelectedCategory(category.toLowerCase())
                }
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-gray-900 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-6xl font-bold text-gray-300 group-hover:text-gray-400 transition-colors mb-2">
                    {item.id}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                    {item.placeholder}
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    {item.category}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No items in this category yet.
              </p>
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm italic">
              Premium images and videos will be uploaded here
            </p>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="max-w-5xl w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center text-white">
              <div className="text-8xl font-bold mb-4">
                {filteredItems[selectedImage].id}
              </div>
              <div className="text-xl">
                {filteredItems[selectedImage].placeholder}
              </div>
              <div className="text-sm text-gray-400 mt-2">
                {filteredItems[selectedImage].category}
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedImage + 1} / {filteredItems.length}
          </div>
        </div>
      )}

      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Want Visuals Like This for Your Brand?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's create stunning visual content that captures your brand's
            essence and drives engagement.
          </p>
          <Button href="#contact" variant="secondary" size="lg">
            Let's Create Together
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
