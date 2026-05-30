import { FC, ReactNode } from 'react';

interface CardProps {
  emoji: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ emoji, title, subtitle, children }) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden hover:bg-white/8 transition-colors">
      {/* Header with traffic lights */}
      <div className="flex items-center gap-3 p-3 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400 text-xs flex-1 ml-2">{title}</span>
        <span className="text-lg">{emoji}</span>
      </div>

      {/* Subtitle */}
      <div className="px-3 pt-2 pb-3 border-b border-white/5">
        <p className="text-gray-500 text-xs">{subtitle}</p>
      </div>

      {/* Content */}
      <div className="p-3">{children}</div>
    </div>
  );
};
