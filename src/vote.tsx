import React, { useState } from 'react';

export default function Vote() {
  const [voteCount, setVoteCount] = useState(0);

  const handleUpvote = (e) => {
    const newVote = voteCount + 1;
    setVoteCount(newVote);
  };

  const handleDownvote = (e) => {
    const newVote = voteCount - 1;
    setVoteCount(newVote);
  };

  return (
    <div className="font-semibold">
      <button
        type="button"
        className="text-fuchsia-500 font-bold"
        onClick={(e) => handleUpvote(e)}
      >
        +
      </button>
      {voteCount}
      <button
        type="button"
        className="text-fuchsia-500 fond-extrabold"
        onClick={(e) => handleDownvote(e)}
      >
        -
      </button>
    </div>
  );
}
