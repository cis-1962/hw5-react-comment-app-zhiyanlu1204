import React, { useState } from 'react';

export default function Vote() {
  const [voteCount, setVoteCount] = useState(0);

  const handleUpvote = () => {
    const newVote = voteCount + 1;
    setVoteCount(newVote);
  };

  const handleDownvote = () => {
    const newVote = voteCount - 1;
    setVoteCount(newVote);
  };

  return (
    <div className="font-semibold">
      <button
        type="button"
        className="text-fuchsia-500 font-bold"
        onClick={() => handleUpvote()}
      >
        +
      </button>
      {voteCount}
      <button
        type="button"
        className="text-fuchsia-500 fond-extrabold"
        onClick={() => handleDownvote()}
      >
        -
      </button>
    </div>
  );
}
