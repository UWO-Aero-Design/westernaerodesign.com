import plane from "./assets/plane.jpg";
import plane2 from "./assets/plane2.png";
import plane3 from "./assets/plane3.png";
import plane4 from "./assets/plane4.png";
import plane5 from "./assets/plane5.png";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: plane,
  },
  {
    original: plane2,
  },
  {
    original: plane3,
  },
  {
    original: plane4,
  },
  {
    original: plane5,
  },
];

const Gallery = () => {
  return (
    <div>
      <section id="gallery" className='my-16 mx-auto scroll-m-20'>
        <h1 className='text-center pb-5 mb-10 border-b-2 font-bold text-4xl md:mx-28 mx-12 '>Gallery</h1>

        <div className="bg-black">
          <ImageGallery items={images} autoPlay={true} lazyLoad={true} slideInterval={4000} />
        </div>
      </section>
    </div>
  )
}

export default Gallery;