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
  const [firstReplies, setFirstReplies] = useState<PostData[]>([]);
  const [secondReplies, setSecondReplies] = useState<PostData[]>([]);
  const [showFirstInputBox, setShowFirstInputBox] = useState(false);
  const [showSecondInputBox, setShowSecondInputBox] = useState(false);

  const handleShowFirstReply = () => {
    setShowFirstInputBox(true);
  };

  const handleShowSecondReply = () => {
    setShowSecondInputBox(true);
  };

  const onSubmitNewFirstReply = (newPost: PostData) => {
    setShowFirstInputBox(false);
    setFirstReplies((prevReplies) => [...prevReplies, newPost]);
  };

  const onSubmitNewSecondReply = (newPost: PostData) => {
    setShowSecondInputBox(false);
    setSecondReplies((prevReplies) => [...prevReplies, newPost]);
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
        <button
          type="button"
          className="text-white bg-rose-500 hover:bg-green-700 px-2 py-2 ml-auto rounded"
          onClick={() => handleShowFirstReply()}
        >
          reply
        </button>
      </div>
      {showFirstInputBox ? (
        <Input onSubmitNewPost={onSubmitNewFirstReply} />
      ) : null}
      {firstReplies.map((reply) => (
        <div
          key={reply.id}
          className="flex flex-col place-items-start justify-between indent-10"
        >
          <div className="text-sky-600 font-semibold break-words mt-2">
            {reply.name}
          </div>
          <div className="text-black break-words mt-2">{reply.text}</div>
          <Vote />
          <button
            type="button"
            className="text-white bg-rose-500 hover:bg-green-700 px-2 py-2 ml-auto rounded"
            onClick={() => handleShowSecondReply()}
          >
            reply
          </button>
        </div>
      ))}
      {showSecondInputBox ? (
        <Input onSubmitNewPost={onSubmitNewSecondReply} />
      ) : null}
      {secondReplies.map((reply) => (
        <div
          key={reply.id}
          className="flex flex-col place-items-start justify-between indent-20"
        >
          <div className="text-sky-600 font-semibold break-words mt-2">
            {reply.name}
          </div>
          <div className="text-black break-words mt-2">{reply.text}</div>
          <Vote />
        </div>
      ))}
    </div>
  );
}
