import React, { useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<Props> = ({
  src,
  alt,
  className,
  fallbackSrc,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <img
      src={imgError ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
    />
  );
};

export default ImageWithFallback;
