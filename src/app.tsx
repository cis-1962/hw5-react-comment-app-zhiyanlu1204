import React, { useState } from 'react';
import Input from './input';
import Post from './post';
import { PostData } from './post-data';

export default function App() {
  const [posts, setPosts] = useState<PostData[]>([]);

  const onSubmitNewPost = (newPost: PostData) => {
    console.log('submitted');
    console.log(newPost);
    /* use setPosts instead of pushing to array */
    setPosts((prevPosts) => [...prevPosts, newPost]);
    console.log('after submit');
    console.log(posts);
  };

  return (
    <main>
      <Input onSubmitNewPost={onSubmitNewPost} />
      {posts.map((post) => (
        <Post key={post.id} name={post.name} text={post.text} />
      ))}
    </main>
  );
}
