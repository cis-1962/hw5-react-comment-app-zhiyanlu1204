import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PostData } from './post-data';

Input.propTypes = {
  onSubmitNewPost: PropTypes.func.isRequired,
};

let postCounter = 0;

export default function Input({ onSubmitNewPost }) {
  const [name, setName] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length === 0 || text.trim().length === 0) {
      return;
    }
    postCounter += 1;
    const newPost: PostData = { name, text, id: postCounter };

    onSubmitNewPost(newPost);
    setName('');
    setText('');
  };

  return (
    <div className="container mx-auto mb-4">
      <header className="text-center text-2xl">New Post</header>
      <form
        onSubmit={(e) => handleSubmit(e)}
        // style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>
          name
          <input
            className="box-border h-10 w-full rounded appearance-none border border-neutral mb-2"
            type="text"
            placeholder="your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          text
          <textarea
            className="box-border p-2 w-full rounded border border-red-900 mb-2"
            placeholder="some text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <input
          className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-2 ml-auto rounded"
          type="submit"
        />
      </form>
    </div>
  );
}
