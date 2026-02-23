"use client";

import { useState, useRef, useCallback, useEffect } from "react";

interface FaceData {
  id: number;
  label: string;
  icon: string;
  titleLine1: string;
  titleLine2: string;
  heading: string;
  description: string;
  highlights: string[];
  colorClass: string;
  iconClass: string;
  titleClass: string;
}

const FACES: FaceData[] = [
  {
    id: 0,
    label: "Face 01",
    icon: "smartphone",
    titleLine1: "Desenvolvimento",
    titleLine2: "Web",
    heading: "Desenvolvimento Web",
    description:
      "Aplicações web modernas, rápidas e escaláveis. Do sistema interno ao SaaS completo, construímos plataformas que sustentam o crescimento do seu negócio com tecnologia de ponta.",
    highlights: ["React & Next.js", "Plataformas SaaS", "Dashboards & Painéis"],
    colorClass: "cube__face--orange",
    iconClass: "cube__icon--on-orange",
    titleClass: "cube__title--on-orange",
  },
  {
    id: 1,
    label: "Face 02",
    icon: "phone_iphone",
    titleLine1: "Desenvolvimento",
    titleLine2: "Mobile",
    heading: "Desenvolvimento Mobile",
    description:
      "Apps nativos e multiplataforma que seus usuários vão amar. Performance, usabilidade e experiência pensadas para converter downloads em clientes fiéis.",
    highlights: ["React Native & Flutter", "Apps iOS & Android", "Push Notifications & Offline"],
    colorClass: "cube__face--dark",
    iconClass: "cube__icon--on-dark",
    titleClass: "cube__title--on-dark",
  },
  {
    id: 2,
    label: "Face 03",
    icon: "dns",
    titleLine1: "Infraestrutura",
    titleLine2: "& Cloud",
    heading: "Infraestrutura & Cloud",
    description:
      "A fundação invisível que mantém tudo de pé. APIs robustas, servidores que escalam sozinhos e uma arquitetura que não te deixa na mão quando o tráfego explode.",
    highlights: ["AWS, GCP & Azure", "Arquitetura Serverless", "CI/CD & DevOps"],
    colorClass: "cube__face--orange",
    iconClass: "cube__icon--on-orange",
    titleClass: "cube__title--on-orange",
  },
  {
    id: 3,
    label: "Face 04",
    icon: "support_agent",
    titleLine1: "Suporte",
    titleLine2: "Tecnológico",
    heading: "Suporte Tecnológico",
    description:
      "Somos a equipe de tecnologia que sua empresa precisa, sem o custo de um time interno completo. Atuamos como seu CTO e time de dev sob demanda, resolvendo problemas e tomando decisões estratégicas.",
    highlights: ["CTO as a Service", "Squad sob Demanda", "Consultoria Técnica"],
    colorClass: "cube__face--gray",
    iconClass: "cube__icon--on-gray",
    titleClass: "cube__title--on-gray",
  },
  {
    id: 4,
    label: "Face 05",
    icon: "design_services",
    titleLine1: "Design de",
    titleLine2: "Produto",
    heading: "Design de Produto",
    description:
      "Antes de gastar um centavo com código, validamos sua ideia com protótipos navegáveis. Pensamento de produto focado no MVP — só construímos o que realmente importa para o usuário e para o negócio.",
    highlights: ["UX Research & Discovery", "Prototipagem de Alta Fidelidade", "Design System"],
    colorClass: "cube__face--dark",
    iconClass: "cube__icon--on-dark",
    titleClass: "cube__title--on-dark",
  },
  {
    id: 5,
    label: "Face 06",
    icon: "web",
    titleLine1: "Landing",
    titleLine2: "Pages",
    heading: "Landing Pages",
    description:
      "Páginas que convertem visitantes em clientes. Design estratégico, copy persuasiva e performance otimizada para que cada clique conte e cada visita gere resultado.",
    highlights: ["Alta Conversão", "SEO Otimizado", "A/B Testing Ready"],
    colorClass: "cube__face--orange-light",
    iconClass: "cube__icon--on-orange",
    titleClass: "cube__title--on-orange",
  },
];

// Isometric tilt so it always looks 3D (never flat/collapsing)
const TILT_X = 25;
const TILT_Y = 30;

// Target rotations per face (base angles, without tilt)
// Tilt is applied separately so navigation math stays clean
const FACE_BASE: { x: number; y: number }[] = [
  { x: 0,    y: 0 },     // 0: front
  { x: 0,    y: -90 },   // 1: right
  { x: 0,    y: -180 },  // 2: back
  { x: 0,    y: -270 },  // 3: left
  { x: 90,   y: 0 },     // 4: top
  { x: -90,  y: 0 },     // 5: bottom
];

// Given base rotation, figure out which face is showing
function detectFace(baseX: number, baseY: number): number {
  const nx = (((baseX % 360) + 360) % 360);
  const ny = (((baseY % 360) + 360) % 360);

  // Top/bottom by X rotation
  if (nx >= 60 && nx <= 120) return 4;   // top (baseX ~90)
  if (nx >= 240 && nx <= 300) return 5;  // bottom (baseX ~-90 => 270)

  // Y rotation faces (when X is ~0 or ~360)
  const y = ny;
  if (y < 45 || y >= 315) return 0;       // front
  if (y >= 45 && y < 135) return 3;       // left (y=90 means we rotated -270 or +90)
  if (y >= 135 && y < 225) return 2;      // back
  if (y >= 225 && y < 315) return 1;      // right

  return 0;
}

// Adjacency: from each face, which face do you reach going up/down/left/right
const ADJACENCY: Record<number, { up: number; down: number; left: number; right: number }> = {
  0: { up: 4, down: 5, left: 3, right: 1 },
  1: { up: 4, down: 5, left: 0, right: 2 },
  2: { up: 4, down: 5, left: 1, right: 3 },
  3: { up: 4, down: 5, left: 2, right: 0 },
  4: { up: 2, down: 0, left: 3, right: 1 },
  5: { up: 0, down: 2, left: 3, right: 1 },
};

export default function CuboInterativo() {
  // We store "base" rotation (without tilt). Tilt is added in render only.
  const [baseX, setBaseX] = useState(0);
  const [baseY, setBaseY] = useState(0);
  const [activeFace, setActiveFace] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const animFrame = useRef<number>(0);
  const baseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    baseRef.current = { x: baseX, y: baseY };
  }, [baseX, baseY]);

  // Snap to the nearest face from current base rotation
  const snapToFace = useCallback((bx: number, by: number) => {
    const faceIdx = detectFace(bx, by);
    const target = FACE_BASE[faceIdx];

    // Find nearest equivalent
    const snapY = Math.round((by - target.y) / 360) * 360 + target.y;
    const snapX = Math.round((bx - target.x) / 360) * 360 + target.x;

    setIsAnimating(true);
    setBaseX(snapX);
    setBaseY(snapY);
    setActiveFace(faceIdx);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  // Go to a specific face directly
  const goToFace = useCallback((idx: number) => {
    const target = FACE_BASE[idx];
    const bx = baseRef.current.x;
    const by = baseRef.current.y;

    const snapY = Math.round((by - target.y) / 360) * 360 + target.y;
    const snapX = Math.round((bx - target.x) / 360) * 360 + target.x;

    setIsAnimating(true);
    setBaseX(snapX);
    setBaseY(snapY);
    setActiveFace(idx);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  // Navigate by direction using adjacency table
  const navigate = useCallback((dir: "up" | "down" | "left" | "right") => {
    if (isAnimating) return;
    const nextFace = ADJACENCY[activeFace][dir];
    goToFace(nextFace);
  }, [activeFace, isAnimating, goToFace]);

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    velocity.current = { x: -dy * 0.3, y: dx * 0.3 };

    setBaseX((prev) => prev - dy * 0.4);
    setBaseY((prev) => prev + dx * 0.4);

    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const vx = velocity.current.x;
    const vy = velocity.current.y;
    let cvx = vx;
    let cvy = vy;
    let cx = baseRef.current.x;
    let cy = baseRef.current.y;

    const decelerate = () => {
      cvx *= 0.9;
      cvy *= 0.9;

      if (Math.abs(cvx) < 0.4 && Math.abs(cvy) < 0.4) {
        snapToFace(cx, cy);
        return;
      }

      cx += cvx;
      cy += cvy;
      setBaseX(cx);
      setBaseY(cy);
      animFrame.current = requestAnimationFrame(decelerate);
    };

    if (Math.abs(vx) > 1 || Math.abs(vy) > 1) {
      animFrame.current = requestAnimationFrame(decelerate);
    } else {
      snapToFace(baseRef.current.x, baseRef.current.y);
    }
  }, [isDragging, snapToFace]);

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") navigate("left");
      if (e.key === "ArrowRight") navigate("right");
      if (e.key === "ArrowUp") navigate("up");
      if (e.key === "ArrowDown") navigate("down");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  useEffect(() => {
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
    };
  }, []);

  // Final transform: base rotation + isometric tilt
  const finalX = baseX - TILT_X;
  const finalY = baseY + TILT_Y;

  const face = FACES[activeFace];
  const facePositions = ["front", "right", "back", "left", "top", "bottom"];

  return (
    <section
      id="cubos"
      className="py-16 sm:py-24 relative z-20 overflow-hidden bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="text-primary">Cubos</span> de Soluções
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Gire o cubo para explorar todos os serviços que oferecemos.
            Arraste ou use as setas para descobrir cada face.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-20">
          {/* Cube area */}
          <div className="relative flex flex-col items-center justify-center py-8 order-1 w-full lg:w-auto">
            <div className="relative mx-auto" style={{ width: "fit-content" }}>
              {/* Arrow: up */}
              <button
                onClick={() => navigate("up")}
                className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white hover:bg-primary hover:text-white rounded-full shadow-md transition-colors cursor-pointer border border-gray-200"
                aria-label="Girar para cima"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">expand_less</span>
              </button>

              {/* Arrow: down */}
              <button
                onClick={() => navigate("down")}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white hover:bg-primary hover:text-white rounded-full shadow-md transition-colors cursor-pointer border border-gray-200"
                aria-label="Girar para baixo"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">expand_more</span>
              </button>

              {/* Arrow: left */}
              <button
                onClick={() => navigate("left")}
                className="absolute top-1/2 -left-12 sm:-left-14 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white hover:bg-primary hover:text-white rounded-full shadow-md transition-colors cursor-pointer border border-gray-200"
                aria-label="Girar para esquerda"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">chevron_left</span>
              </button>

              {/* Arrow: right */}
              <button
                onClick={() => navigate("right")}
                className="absolute top-1/2 -right-12 sm:-right-14 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-white hover:bg-primary hover:text-white rounded-full shadow-md transition-colors cursor-pointer border border-gray-200"
                aria-label="Girar para direita"
              >
                <span className="material-symbols-outlined text-lg sm:text-xl">chevron_right</span>
              </button>

              {/* 3D Scene */}
              <div
                className="scene touch-none select-none cursor-grab active:cursor-grabbing"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              >
                <div
                  className="cube-3d"
                  style={{
                    transform: `rotateX(${finalX}deg) rotateY(${finalY}deg)`,
                    transition: isAnimating
                      ? "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                      : isDragging
                      ? "none"
                      : "transform 0.08s linear",
                  }}
                >
                  {FACES.map((f, i) => (
                    <div
                      key={f.id}
                      className={`cube__face cube__face--${facePositions[i]} ${f.colorClass}`}
                    >
                      <span className={`material-symbols-outlined cube__icon ${f.iconClass}`}>
                        {f.icon}
                      </span>
                      <div className={`cube__title ${f.titleClass}`}>
                        {f.titleLine1}<br />{f.titleLine2}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shadow */}
            <div className="mt-6 w-36 sm:w-44 h-6 bg-black/10 blur-xl rounded-[100%]" />

            {/* Hint - always visible */}
            <div className="mt-3 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200 text-xs text-gray-500 font-medium">
              <span className="material-symbols-outlined text-base text-primary">swipe</span>
              Arraste para girar o cubo
            </div>
          </div>

          {/* Description panel */}
          <div className="lg:w-1/2 order-2 min-h-95 flex flex-col justify-center relative px-4 sm:px-6 lg:pl-10 lg:pr-0">
            <div
              key={face.id}
              className="border-l-4 border-primary pl-5 sm:pl-8 animate-fade-in"
            >
              <div className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                {face.label}
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
                {face.heading}
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                {face.description}
              </p>
              <ul className="space-y-2 mb-8">
                {face.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <span className="material-symbols-outlined text-green-500 text-sm">
                      check_circle
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Face tags */}
            <div className="flex flex-wrap gap-2 pl-5 sm:pl-8">
              {FACES.map((f) => (
                <button
                  key={f.id}
                  onClick={() => goToFace(f.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    f.id === activeFace
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-gray-200 text-gray-500 hover:bg-gray-300"
                  }`}
                >
                  {f.titleLine1} {f.titleLine2}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
