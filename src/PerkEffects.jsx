// 幻灯片可见性 hook：滚动模式 IntersectionObserver / 演讲模式 .active class 双触发
import { useEffect, useRef, useState } from 'react';

export function useSlideShown() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    const slide = el && el.closest('.slide');
    if (!slide) return undefined;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (document.body.classList.contains('present')) return;
          setShown(e.intersectionRatio > 0.5);
        }),
      { threshold: [0.5] }
    );
    io.observe(slide);
    const mo = new MutationObserver(() => setShown(slide.classList.contains('active')));
    mo.observe(slide, { attributes: true, attributeFilter: ['class'] });
    setShown(slide.classList.contains('active'));
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return [ref, shown];
}
