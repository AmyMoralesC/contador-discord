import { FC, ReactNode, useEffect, useRef } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const stars = Array.from({ length: 130 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      baseOpacity: Math.random() * 0.25 + 0.05,
      opacity: 0,
      twinkleSpeed: Math.random() * 0.008 + 0.003,
      twinkleOffset: Math.random() * Math.PI * 2,
      bright: Math.random() < 0.08,
    }));
    stars.forEach((s) => (s.opacity = s.baseOpacity));

    const shootingStars: {
      x: number; y: number; len: number;
      speed: number; opacity: number;
      angle: number; progress: number;
    }[] = [];

    const spawnShooting = () => {
      if (shootingStars.length < 2 && Math.random() < 0.004) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.6,
          y: Math.random() * canvas.height * 0.4,
          len: Math.random() * 80 + 60,
          speed: Math.random() * 4 + 3,
          opacity: 1,
          angle: Math.PI / 5 + (Math.random() - 0.5) * 0.3,
          progress: 0,
        });
      }
    };

    let t = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      // Stars
      stars.forEach((s) => {
        const wave = Math.sin(t * s.twinkleSpeed * 60 + s.twinkleOffset);
        s.opacity = s.bright
          ? s.baseOpacity + wave * 0.55
          : s.baseOpacity + wave * 0.1;
        s.opacity = Math.max(0.02, Math.min(0.9, s.opacity));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(251,194,8,${s.opacity})`;
        ctx.fill();

        if (s.bright && s.opacity > 0.6) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251,194,8,${s.opacity * 0.12})`;
          ctx.fill();
        }
      });

      // Shooting stars
      spawnShooting();
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.progress += s.speed;
        const px = s.x + Math.cos(s.angle) * s.progress;
        const py = s.y + Math.sin(s.angle) * s.progress;
        const tailX = px - Math.cos(s.angle) * s.len;
        const tailY = py - Math.sin(s.angle) * s.len;
        const fade = 1 - s.progress / 300;
        s.opacity = fade;

        const grad = ctx.createLinearGradient(tailX, tailY, px, py);
        grad.addColorStop(0, 'rgba(251,194,8,0)');
        grad.addColorStop(0.6, `rgba(251,194,8,${fade * 0.4})`);
        grad.addColorStop(1, `rgba(255,240,180,${fade * 0.9})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(px, py);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,240,180,${fade})`;
        ctx.fill();

        if (s.progress > 300) shootingStars.splice(i, 1);
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] relative overflow-hidden font-mono">

      {/* Grid background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251,194,8,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251,194,8,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
        }}
      />

      {/* Stars canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Orbs */}
      <div className="absolute -top-20 left-10 w-125 h-125 rounded-full pointer-events-none animate-orb-float"
        style={{ background: 'radial-gradient(circle, rgba(251,194,8,0.07) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-10 w-100 h-100p rounded-full pointer-events-none animate-orb-float-reverse"
        style={{ background: 'radial-gradient(circle, rgba(251,194,8,0.05) 0%, transparent 70%)' }} />

      {/* Scanline */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute left-0 right-0 h-32 animate-scanline"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(251,194,8,0.015), transparent)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-350 mx-auto px-10 py-12">
        {children}
      </div>
    </div>
  );
};
