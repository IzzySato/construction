import { urlFor } from "../sanity";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Image = ({images}) => {
   const handleDragStart = (e) => e.preventDefault();
  const imageItems = images.map((image) =>
    <img key="{item}" className='img' src={urlFor(image)} onDragStart={handleDragStart}/>)

  return (
    <>
      <AliceCarousel mouseTracking items={imageItems} />
    </>
  )
};

export default Image;