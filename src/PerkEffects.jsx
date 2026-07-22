// s05 赞助福利动效：Nano Banana 2 批量出图 + Veo 3.1 胶片滚动
// 滚动模式 IntersectionObserver / 演讲模式 .active class 双触发，离开视野即复位重播
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

function CountUp({ to, active, duration = 1400 }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) {
      setVal(0);
      return undefined;
    }
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);
  return <>{val}</>;
}

const TILE_EMOJIS = ['🍌', '🖼️', '✨', '🍌', '🎨', '🍌', '🖼️', '✨', '🍌', '🎨'];
const FILM_FRAMES = ['🎬', '🌆', '🏎️', '🌊', '🚀', '🎞️', '🌋', '🎥'];

export function PerkImageLine() {
  const [ref, shown] = useSlideShown();
  return (
    <div className={`perk-line${shown ? ' on' : ''}`} ref={ref}>
      <div className="perk-line-text">
        🎨 <strong>2. Nano Banana 2 图像模型：</strong>
        <br />
        约可生成 <span className="perk-big"><CountUp to={2976} active={shown} /></span> 张 Nano
        Banana 2 2K 级别超清生图！
      </div>
      <div className="perk-tiles" aria-hidden="true">
        {TILE_EMOJIS.map((e, i) => (
          <span key={i} className="perk-tile" style={{ animationDelay: `${i * 0.32}s` }}>
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PerkVideoLine() {
  const [ref, shown] = useSlideShown();
  return (
    <div className={`perk-line${shown ? ' on' : ''}`} ref={ref}>
      <div className="perk-line-text">
        🎬 <strong>3. Veo 3.1 视频模型：</strong>
        <br />
        约可生成高达 <span className="perk-big"><CountUp to={800} active={shown} /></span> 秒 的
        720p 电影级生成视频！
      </div>
      <div className="perk-film" aria-hidden="true">
        <div className="perk-film-track">
          {[...FILM_FRAMES, ...FILM_FRAMES].map((f, i) => (
            <span key={i} className="perk-frame">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
