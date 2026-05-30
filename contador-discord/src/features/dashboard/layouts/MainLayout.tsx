import { FC, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 to-slate-900 relative overflow-hidden p-12">
      {/* Animated background orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '5s' }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-400/2 rounded-full blur-3xl animate-float" style={{ animationDelay: '10s' }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">{children}</div>
    </div>
  );
};
