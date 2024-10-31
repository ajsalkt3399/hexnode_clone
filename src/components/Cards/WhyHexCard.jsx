import React from 'react';

function WhyHexCard({ imageSrc, title, description , footerText = "Try Hexanodes on your endpoints" }) {
  return (
    <div>
      <div>
        <div>
          {imageSrc && (
            <img src={imageSrc} alt={title} />
          )}
        </div>
        <div>
          {title ? title : ""}
        </div>
      </div>
      <div>
        {description ? description : ""}
      </div>
      <div>
        {footerText}
      </div>
    </div>
  );
}

export default WhyHexCard;
