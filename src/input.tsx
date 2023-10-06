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
    <div>
      <header>New Post</header>
      <form
        onSubmit={(e) => handleSubmit(e)}
        // style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label>
          name
          <input
            type="text"
            placeholder="your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          text
          <textarea
            placeholder="some text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
