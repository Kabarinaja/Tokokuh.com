import React, { useEffect, useMemo, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";
import { APP_SCREENSHOTS, ScreenshotItem } from "../data/appData";

interface Orbit3DProps {
  onSelectScreenshot?: (item: ScreenshotItem) => void;
}

export const Orbit3D: React.FC<Orbit3DProps> = ({ onSelectScreenshot }) => {
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState(-7);
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [previewItem, setPreviewItem] = useState<ScreenshotItem | null>(null);
  const [radius, setRadius] = useState(370);
  const pointerRef = useRef<{ id: number; x: number; y: number } | null>(null);
  const reduceMotionRef = useRef(false);
  const angleStep = 360 / APP_SCREENSHOTS.length;

  useEffect(() => {
    const updateRadius = () => setRadius(window.innerWidth < 480 ? 245 : window.innerWidth < 768 ? 305 : 390);
    updateRadius();
    window.addEventListener("resize", updateRadius);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = media.matches;
    const onMotion = () => {
      reduceMotionRef.current = media.matches;
      if (media.matches) setIsPlaying(false);
    };
    media.addEventListener?.("change", onMotion);
    return () => {
      window.removeEventListener("resize", updateRadius);
      media.removeEventListener?.("change", onMotion);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || reduceMotionRef.current) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const delta = Math.min(now - last, 40);
      last = now;
      if (!pointerRef.current) {
        setRotation((value) => (value + delta * 0.0045) % 360);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying]);

  const ordered = useMemo(() => APP_SCREENSHOTS, []);
  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    pointerRef.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsPlaying(false);
  };
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerRef.current || pointerRef.current.id !== event.pointerId) return;
    const deltaX = event.clientX - pointerRef.current.x;
    const deltaY = event.clientY - pointerRef.current.y;
    pointerRef.current.x = event.clientX;
    pointerRef.current.y = event.clientY;
    setRotation((value) => value + deltaX * 0.42);
    setTilt((value) => Math.max(-65, Math.min(65, value - deltaY * 0.38)));
  };
  const onPointerUp = () => {
    if (!pointerRef.current) return;
    pointerRef.current = null;
    setIsDragging(false);
    setRotation(0);
    setTilt(-7);
    setIsPlaying(true);
  };

  return (
    <section className="orbit-shell relative w-full" aria-label="Galeri screenshot aplikasi TOKOKUH.COM">
      <div className="orbit-ambient orbit-ambient-one" />
      <div className="orbit-ambient orbit-ambient-two" />
      <div className="orbit-stage relative mx-auto flex items-center justify-center"
        onPointerDown={onPointerDown} onPointerMove={onPointerMove}
        onPointerUp={onPointerUp} onPointerCancel={onPointerUp}
        onLostPointerCapture={onPointerUp}>
        <div className="orbit-floor" />
        <div className="orbit-ring" />
        <div className="orbit-core" aria-hidden="true">
          <span>TOKOKUH</span><small>ANDROID POS</small>
        </div>
        <div className="orbit-wheel" style={{ transform: `rotateY(${rotation}deg) rotateX(${tilt}deg)`, transition: isDragging ? "none" : "transform 900ms cubic-bezier(.2,.8,.2,1)" }}>
          {ordered.map((item, index) => {
            const angle = index * angleStep;
            const relative = ((angle + rotation) % 360 + 360) % 360;
            const frontness = (1 + Math.cos(relative * Math.PI / 180)) / 2;
            const isFront = frontness > 0.78;
            return (
              <button
                type="button"
                key={item.id}
                className={`orbit-card ${isFront ? "orbit-card-front" : ""}`}
                style={{
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                  opacity: 0.42 + frontness * 0.58,
                  zIndex: Math.round(frontness * 20),
                }}
                onClick={() => {
                  setIsPlaying(false);
                  setPreviewItem(item);
                  onSelectScreenshot?.(item);
                }}
                aria-label={`Perbesar screenshot ${item.title}`}
              >
                <span className="orbit-card-image">
                  <img src={item.path} alt={item.title} loading={index < 4 ? "eager" : "lazy"} />
                  <span className="orbit-card-open"><Maximize2 size={14} /> Perbesar</span>
                </span>
                <span className="orbit-card-meta">
                  <strong>{item.title}</strong>
                  <small>{item.category}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>



      {previewItem && (
        <div className="orbit-lightbox" role="dialog" aria-modal="true" aria-label={previewItem.title} onClick={() => { setPreviewItem(null); setIsPlaying(true); }}>
          <div className="orbit-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="orbit-close" onClick={() => { setPreviewItem(null); setIsPlaying(true); }} aria-label="Tutup preview"><X /></button>
            <div className="orbit-lightbox-copy">
              <span>{previewItem.category}</span>
              <h3>{previewItem.title}</h3>
              <p>{previewItem.description}</p>
            </div>
            <img src={previewItem.path} alt={previewItem.title} />
          </div>
        </div>
      )}
    </section>
  );
};
