import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PostData } from './post-data';
import Input from './input';

Post.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Post({ name, text }) {
  const [replies, setReplies] = useState<PostData[]>([]);
  const [showReply, setShowReply] = useState(true);
  const [showInputBox, setShowInputBox] = useState(false);

  const handleReply = (e: React.MouseEvent) => {
    // onClickedReply();
    if (replies.length === 2) {
      setShowInputBox(false);
      setShowReply(false);
      console.log('line21\n');
      console.log(replies);
      return;
    }
    setShowInputBox(true);
  };

  const onSubmitNewReply = (newPost: PostData) => {
    console.log('line 29\n');
    console.log(newPost);
    console.log(replies);
    setShowInputBox(false);
    setReplies((prevReplies) => [...prevReplies, newPost]);
    if (replies.length === 2) {
      setShowReply(false);
    }
    console.log('line 36\n');
    console.log(replies);
  };

  return (
    <div>
      <div>{name}</div>
      <div>{text}</div>
      {showReply ? (
        <button type="button" onClick={(e) => handleReply(e)}>
          reply
        </button>
      ) : null}
      {showInputBox ? <Input onSubmitNewPost={onSubmitNewReply} /> : null}
      {replies.map((reply) => (
        <div>
          <div>{reply.name}</div>
          <div>{reply.text}</div>
        </div>
      ))}
    </div>
  );
}
