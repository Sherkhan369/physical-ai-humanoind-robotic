import React from 'react';

const DifficultyBadge = ({ level }) => {
  let badgeClass = '';
  let badgeText = '';

  switch (level) {
    case 'easy':
      badgeClass = 'bg-green-200 text-green-800';
      badgeText = 'Easy';
      break;
    case 'medium':
      badgeClass = 'bg-yellow-200 text-yellow-800';
      badgeText = 'Medium';
      break;
    case 'hard':
      badgeClass = 'bg-red-200 text-red-800';
      badgeText = 'Hard';
      break;
    default:
      badgeClass = 'bg-gray-200 text-gray-800';
      badgeText = 'Unknown';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`}>
      {badgeText}
    </span>
  );
};

export default DifficultyBadge;
