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

  const handleShowReply = (e: React.MouseEvent) => {
    if (replies.length === 1) {
      setShowReply(false);
    }
    setShowInputBox(true);
  };

  const onSubmitNewReply = (newPost: PostData) => {
    setShowInputBox(false);
    setReplies((prevReplies) => [...prevReplies, newPost]);
  };

  return (
    <div>
      <div>{name}</div>
      <div>{text}</div>
      {showReply ? (
        <button type="button" onClick={(e) => handleShowReply(e)}>
          reply
        </button>
      ) : null}
      {replies.map((reply) => (
        <div key={reply.id}>
          <div>{reply.name}</div>
          <div>{reply.text}</div>
          {showReply ? (
            <button type="button" onClick={(e) => handleShowReply(e)}>
              reply
            </button>
          ) : null}
        </div>
      ))}
      {showInputBox ? <Input onSubmitNewPost={onSubmitNewReply} /> : null}
    </div>
  );
}
