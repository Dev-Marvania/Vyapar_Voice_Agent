import React from 'react';

export const Hub: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <span className={`material-symbols-outlined ${className}`}>hub</span>
);

export const Gavel: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <span className={`material-symbols-outlined ${className}`}>gavel</span>
);

export const Speed: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <span className={`material-symbols-outlined ${className}`}>speed</span>
);

export const Scale: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <span className={`material-symbols-outlined ${className}`}>scale</span>
);

export const Forum: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <span className={`material-symbols-outlined ${className}`}>forum</span>
);

export const Verified: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <span className={`material-symbols-outlined ${className}`}>verified</span>
);
