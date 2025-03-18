import React, { useState } from 'react';

const CommentForm: React.FC = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<string[]>([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.length === 0) {
      alert('Comment cannot be empty');
      return;
    }

    setComments((comments) => [...comments, comment]);
    setComment('');
  };

  return (
    <div>
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          placeholder="Write your comment here..."
        />
        <button type="submit">Post Comment</button>
      </form>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentForm;
