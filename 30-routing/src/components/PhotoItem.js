import React from 'react';

export default function PhotoItem({ photo }) {
  return (
    <div>
      <ul>
        <li>사진 제목: {photo.title}</li>
        <li>
          <img src={photo.url} />
        </li>
      </ul>
    </div>
  );
}
