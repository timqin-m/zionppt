// Deck 容器：滚动浏览模式 + 演讲模式（1280x720 缩放居中、键盘翻页、全屏、HUD）
// 交互逻辑移植自原 HTML 1242–1330 行
import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES } from './slides.jsx';
import { DemoSlide1 } from './DemoSlides.jsx';
import BuildReplaySlide from './BuildReplaySlide.jsx';

const SLIDE_W = 1280;
const SLIDE_H = 720;

// 在原 s11（核心优势架构图）之后依次插入：AI 自动构建回放 → LIVE DEMO
const DECK = [];
for (const s of SLIDES) {
  DECK.push(s);
  if (s.id === 's11') {
    DECK.push({ id: 'build-replay', Comp: BuildReplaySlide });
    DECK.push({ id: 'demo1', Comp: DemoSlide1 });
  }
}

export default function Deck() {
  const deckRef = useRef(null);
  const [present, setPresent] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scrollScale, setScrollScale] = useState(1);

  // 滚动模式下的自适应缩放（针对移动端和窄屏，计算出完美比例）
  useEffect(() => {
    if (present) return;
    const handleResize = () => {
      const width = window.innerWidth;
      const targetWidth = 1312; // 1280px + 32px 左右边距
      if (width < targetWidth) {
        setScrollScale(width / targetWidth);
      } else {
        setScrollScale(1);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [present]);

  const currentIdxRef = useRef(0);
  const presentRef = useRef(false);
  currentIdxRef.current = currentIdx;
  presentRef.current = present;

  const getSlides = useCallback(
    () => Array.from(deckRef.current?.querySelectorAll('.slide') || []),
    []
  );

  const fitPresentSlide = useCallback(() => {
    if (!presentRef.current) return;
    const scale = Math.min(window.innerWidth / SLIDE_W, window.innerHeight / SLIDE_H);
    getSlides().forEach((s) => {
      s.style.transform = `translate(-50%,-50%) scale(${scale})`;
      s.style.width = `${SLIDE_W}px`;
      s.style.height = `${SLIDE_H}px`;
    });
  }, [getSlides]);

  const activatePresent = useCallback(
    (idx) => {
      getSlides().forEach((s, i) => s.classList.toggle('active', i === idx));
    },
    [getSlides]
  );

  const enterPresent = useCallback(() => {
    setPresent(true);
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  }, []);

  const exitPresent = useCallback(() => {
    setPresent(false);
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  const scrollToSlide = useCallback(
    (idx) => {
      const slides = getSlides();
      if (idx < 0 || idx >= slides.length) return;
      setCurrentIdx(idx);
      if (presentRef.current) {
        activatePresent(idx);
      } else {
        slides[idx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    },
    [getSlides, activatePresent]
  );

  // present 状态挂载到 body class + 布局
  useEffect(() => {
    if (present) {
      document.body.classList.add('present');
      fitPresentSlide();
      activatePresent(currentIdxRef.current);
    } else {
      document.body.classList.remove('present');
      const slides = getSlides();
      slides.forEach((s) => {
        s.classList.remove('active');
        s.style.transform = '';
        s.style.width = '';
        s.style.height = '';
      });
      setTimeout(() => slides[currentIdxRef.current]?.scrollIntoView({ block: 'center' }), 50);
    }
  }, [present, fitPresentSlide, activatePresent, getSlides]);

  // 滚动浏览模式：IntersectionObserver 追踪当前页
  useEffect(() => {
    const slides = getSlides();
    const io = new IntersectionObserver(
      (entries) => {
        if (presentRef.current) return;
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.5) {
            setCurrentIdx(slides.indexOf(e.target));
          }
        });
      },
      { threshold: [0.5] }
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [getSlides]);

  // 键盘：F 演讲 / Esc 退出 / 方向键·空格·Home·End 翻页
  useEffect(() => {
    const onKeydown = (e) => {
      const tag = e.target && e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key === 'Escape') {
        if (presentRef.current) {
          e.preventDefault();
          exitPresent();
        }
        return;
      }
      if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        enterPresent();
      } else if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        scrollToSlide(currentIdxRef.current + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToSlide(currentIdxRef.current - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSlide(getSlides().length - 1);
      }
    };
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, [enterPresent, exitPresent, scrollToSlide, getSlides]);

  // 窗口缩放时重新适配；系统层面退出全屏时同步退出演讲模式
  useEffect(() => {
    const onResize = () => fitPresentSlide();
    const onFullscreenChange = () => {
      if (!document.fullscreenElement && presentRef.current) exitPresent();
    };
    window.addEventListener('resize', onResize);
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => {
      window.removeEventListener('resize', onResize);
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, [fitPresentSlide, exitPresent]);

  // 演讲模式下翻页时同步 active class
  useEffect(() => {
    if (present) activatePresent(currentIdx);
  }, [present, currentIdx, activatePresent]);

  const total = DECK.length;

  return (
    <>
      <div className="hint">
        <kbd>↓</kbd> next <kbd>↑</kbd> prev <kbd>F</kbd> present · <span className="num">{total}</span> slides
      </div>
      <div className="toolbar">
        <button type="button" onClick={enterPresent}>⛶ 演讲模式</button>
      </div>
      <div 
        className="deck-wrapper"
        style={present ? {} : {
          width: '100%',
          height: `${(total * 752 - 32) * scrollScale}px`,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div 
          className="deck" 
          ref={deckRef}
          style={present ? {} : {
            transform: `scale(${scrollScale})`,
            transformOrigin: 'top center',
            width: '1280px',
            margin: '0 auto'
          }}
        >
          {DECK.map(({ id, Comp }, idx) => (
            <Comp key={id} active={currentIdx === idx} />
          ))}
        </div>
      </div>
      <div className="present-hud">
        <span>SLIDE</span>
        <span className="num">{String(currentIdx + 1).padStart(2, '0')}</span>
        <span style={{ opacity: 0.5 }}>/</span>
        <span className="num">{String(total).padStart(2, '0')}</span>
        <span style={{ marginLeft: '14px', opacity: 0.5 }}>←/→ · F/Esc</span>
      </div>
    </>
  );
}
