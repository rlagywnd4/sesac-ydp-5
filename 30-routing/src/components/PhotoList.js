import React, { useEffect, useState } from 'react';
import PhotoItem from './PhotoItem';
import axios from 'axios';

export default function PhotoList() {
  const [photos, setPhotos] = useState();
  const getPhotos = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: 10,
      },
    });
    setPhotos(res.data);
    // console.log(res.data);
  };
  useEffect(() => {
    // console.log(getPhotos());
    getPhotos();
    console.log('photoooo', photos);
  }, []);

  return (
    <div>
      {/* {photos.map((photo) => {
        <PhotoItem key={photo.id} photo={photo} />;
      })} */}
    </div>
  );
}
