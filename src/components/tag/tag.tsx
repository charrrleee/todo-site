import React, { useState } from 'react';

const Tag: React.FC<TagProps> = ({ tags, onAddTag }) => {
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTag, setNewTag] = useState('');

  const handleButtonClick = () => {
    setIsAddingTag(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(e.target.value);
  };

  const handleInputBlur = () => {
    setIsAddingTag(false);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsAddingTag(false);
      if (newTag.trim() !== '') {
        onAddTag(newTag);
        setNewTag('');
      }
    }
  };

  return (
    <div>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      {isAddingTag ? (
        <input
          type="text"
          value={newTag}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
          autoFocus
        />
      ) : (
        <button onClick={handleButtonClick}>+ Add Tag</button>
      )}
    </div>
  );
};

export default Tag;