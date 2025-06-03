import React, { useMemo } from 'react';

interface AvatarLetterProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
}

const COLORS = [
  'bg-blue-500',
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-orange-500',
  'bg-teal-500',
];

export function AvatarLetter({ name, className = '', ...props }: AvatarLetterProps) {
  const firstLetter = name?.charAt(0).toUpperCase();

  const randomColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);

    return COLORS[randomIndex];
  }, []);

  return (
    <div
      className={`flex items-center justify-center rounded-full text-white font-bold text-base ${randomColor} ${className}`}
      {...props}
    >
      {firstLetter}
    </div>
  );
}
