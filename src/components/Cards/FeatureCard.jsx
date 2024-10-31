import React from 'react';

function FeatureCard({ imageSrc, title, description }) {
  return (
    <div>
      <div>
        {imageSrc && (
          <img src={imageSrc} alt={title || "Feature Image"} />
        )}
      </div>
      <div>
        {title && title}
      </div>
      <div>
        {description && description}
      </div>
    </div>
  );
}

export default FeatureCard;
