import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PostData } from './post-data';
import Input from './input';
import Vote from './vote';

Post.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Post({ name, text }) {
  const [replies, setReplies] = useState<PostData[]>([]);
  const [showReply, setShowReply] = useState(true);
  const [showInputBox, setShowInputBox] = useState(false);

  const handleShowReply = () => {
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
    <div className="shadow-md p-4">
      <div className="flex flex-col place-items-start justify-between">
        <div>
          <div className="text-sky-600 font-semibold break-words mt-2">
            {name}
          </div>
          <div className="text-black break-words mt-2">{text}</div>
        </div>
        <Vote />
        {showReply ? (
          <button
            type="button"
            className="text-white bg-rose-500 hover:bg-green-700 px-2 py-2 ml-auto rounded"
            onClick={() => handleShowReply()}
          >
            reply
          </button>
        ) : null}
      </div>
      {replies.map((reply) => (
        <div
          key={reply.id}
          className="flex flex-col place-items-start justify-between"
        >
          <div className="text-sky-600 font-semibold break-words mt-2">
            {reply.name}
          </div>
          <div className="text-black break-words mt-2">{reply.text}</div>
          <Vote />
          {showReply ? (
            <button
              type="button"
              className="text-white bg-rose-500 hover:bg-green-700 px-2 py-2 ml-auto rounded"
              onClick={() => handleShowReply()}
            >
              reply
            </button>
          ) : null}
        </div>
      ))}
      {showInputBox ? <Input onSubmitNewPost={onSubmitNewReply} /> : null}
    </div>
  );
}
