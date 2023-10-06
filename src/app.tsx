import React, { useState } from 'react';
import Input from './input';
import Post from './post';
import { PostData } from './post-data';
import 'tailwindcss/tailwind.css';

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
    <main className="container max-w-lg mx-auto mt-10">
      <h1 className="text-lg text-center mb-4 font-extrabold text-4xl">
        CIS1962 Community
      </h1>
      <Input onSubmitNewPost={onSubmitNewPost} />
      {posts.map((post) => (
        <Post key={post.id} name={post.name} text={post.text} />
      ))}
    </main>
  );
}
