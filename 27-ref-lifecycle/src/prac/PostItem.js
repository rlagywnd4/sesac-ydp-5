import React, { useEffect, useState } from 'react';

export default function PostItem(posts) {
  const [size, setSize] = useState(0);
  useEffect(() => {
    console.log(typeof posts.posts);
    if (posts.posts === undefined) {
      setSize(0);
    } else {
      setSize(posts.posts.length);
    }
  }, [posts]);
  return (
    <div>
      {size > 0 ? (
        <div>
          {posts.forEach((e) => {
            <div>
              <div>id : {e.id}</div>
              <div>title : {e.title}</div>
              <div>body : {e.body}</div>
            </div>;
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
