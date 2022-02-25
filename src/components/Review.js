import React from 'react';
import { Link } from './Link';

function Review({ reviewTotal, reviewAverage }) {
  return (
    <div>
      <p>{reviewTotal}</p>
      <Link text="Write a review" url="www.sportdirect.com" />
    </div>
  );
}

export default Review;
