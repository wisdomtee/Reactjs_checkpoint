// src/components/Image.js
import React from 'react';

const Image = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} style={{ width: '200px', height: '200px' }} />;
};

export default Image;
