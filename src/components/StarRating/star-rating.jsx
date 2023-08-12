import { filledStar, emptyStar, halfStar } from '@/assets';
import { Star } from './star-rating.styles';
import { useState } from 'react';

export const StarRating = () => {
  const [filledStars, setFilledStars] = useState(-1);
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div>
      {[...Array(10)].map((star, index) => {
        return (
          <Star
            key={index}
            src={index < filledStars ? filledStar : emptyStar}
            onClick={() => setSelectedStars(filledStars)}
            onMouseOver={() => setFilledStars(index+1)}
            onMouseOut={() =>
              !selectedStars ? setFilledStars(0) : setFilledStars(selectedStars) 
            }
          />
        );
      })}
    </div>
  );
};
