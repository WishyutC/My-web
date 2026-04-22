import { Briefcase, Calendar } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ImageLightbox } from '../ImageLightbox';
import img_arit1  from '../../picture/arit/658873746_1555264993271262_6763747804658423681_n.jpg';
import img_arit2  from '../../picture/arit/658140033_1555265023271259_1005484179344322545_n.jpg';
import img_arit3  from '../../picture/arit/657405233_1555265099937918_266585135841603852_n.jpg';
import img_arit4  from '../../picture/arit/656852633_1555265039937924_3825715037224764565_n.jpg';
import img_vpn1   from '../../picture/vpn_client/image.png';
import img_vpn2   from '../../picture/vpn_client/Screenshot_20260413-163634.jpg';
import img_vpn3   from '../../picture/vpn_client/Screenshot_20260413-163641.jpg';
import img_vpn4   from '../../picture/vpn_client/Screenshot_20260413-163644.jpg';
import img_ku1    from '../../picture/kushiro/DSC02313.JPG';
import img_ku2    from '../../picture/kushiro/DSC02319.JPG';
import img_ku3    from '../../picture/kushiro/DSC02325.JPG';
import img_ku4    from '../../picture/kushiro/image1.png';
import img_hack1  from '../../picture/airaifu/image.png';
import img_hack2  from '../../picture/airaifu/image1.png';
import img_arit5  from '../../picture/arit/Cert7619444647-1.png';



interface TimelineProps {
  t: (key: string) => any;
}

// Timeline images for each entry - now with multiple images per event
const timelineImages = [
  // 2026 - Microsoft Office Specialist – Word (Associate) (4 images)
  [
    img_arit1,
    img_arit2,
    img_arit3,
    img_arit4,
    img_arit5,

  ],
  // 2025 - Frontend Flutter Developer (4 images)
  [
    img_vpn1,
    img_vpn2,
    img_vpn3,
    img_vpn4,
  ],
  // 2025 - JASSO Scholarship Student (4 images)
  [
    img_ku1,
    img_ku2,
    img_ku3, 
    img_ku4,
  ],
  // 2025 -AI + IoT Hackathon (Top 10) (2 images)
  [
    img_hack1,
    img_hack2,
  ],
 

];

export function Timeline({ t }: TimelineProps) {
  const items = t('timeline.items');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Guard against items not being an array
  if (!Array.isArray(items)) {
    return null;
  }

  const openLightbox = (images: string[], index: number) => {
    setSelectedImages(images);
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const renderImageGrid = (images: string[], itemIndex: number) => {
    const imageCount = images.length;

    if (imageCount === 1) {
  return (
    <div className="relative h-48 w-full overflow-hidden cursor-pointer">
      <ImageWithFallback
        src={images[0]}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

return (
  <div className="grid grid-cols-2 gap-1 h-48">
    {images.slice(0, 2).map((image, idx) => (
      <div
        key={idx}
        className="relative overflow-hidden cursor-pointer"
        onClick={() => openLightbox(images, idx)}
      >
        <ImageWithFallback
          src={image}
          className="w-full h-full object-cover"
        />

        {/* +X overlay on second image */}
        {idx === 1 && imageCount > 2 && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white text-2xl font-semibold">
              +{imageCount - 2}
            </span>
          </div>
        )}
      </div>
    ))}
  </div>
);
}

  return (
    <section
      id="timeline"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      style={{ scrollMarginTop: '4rem' }}
    >
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('timeline.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('timeline.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-8">
            {items.map((item: any, index: number) => (
              <div
                key={index}
                className="relative flex items-start space-x-6 group"
              >
                {/* Timeline Dot */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground flex-shrink-0 z-10 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-primary/50 group-hover:translate-x-2">
                  {/* Image */}
                  {renderImageGrid(timelineImages[index], index)}
                  
                  {/* Year Badge Overlay */}
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-lg shadow-lg">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        <span>{item.company}</span>
                        
                      </div>
                      {item.title === "Frontend Flutter Developer" && (
                      <div className="mt-4">
                        <a
                        href='apk_demo/VPNclient-app-orange.apk'
                        download
                        >
                        <button 

                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
                          >   
                        Download Demo(.apk)
                        </button>
                    </a>
                      </div>
                    )}
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageLightbox
        images={selectedImages}
        initialIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}