

import React, { useEffect, useRef, useState } from 'react'

const PATH_D = `M0 90
  C160 10, 280 170, 440 90
  C600 10, 720 170, 880 90
  C1040 10, 1160 170, 1200 90`

const LEVELS = [
  { id: 0, name: 'Beginner', pct: 0 },
  { id: 1, name: 'Rising Star', pct: 25 },
  { id: 2, name: 'Pro', pct: 50 },
  { id: 3, name: 'Pro Master', pct: 75 },
]

// helper: interpolate two hex colors (#rrggbb) by t in [0,1]
function lerpColor(a, b, t) {
  const ah = a.replace('#', '')
  const bh = b.replace('#', '')
  const ar = parseInt(ah.substring(0, 2), 16)
  const ag = parseInt(ah.substring(2, 4), 16)
  const ab = parseInt(ah.substring(4, 6), 16)
  const br = parseInt(bh.substring(0, 2), 16)
  const bg = parseInt(bh.substring(2, 4), 16)
  const bb = parseInt(bh.substring(4, 6), 16)
  const rr = Math.round(ar + (br - ar) * t)
  const rg = Math.round(ag + (bg - ag) * t)
  const rb = Math.round(ab + (bb - ab) * t)
  const toHex = (v) => v.toString(16).padStart(2, '0')
  return `#${toHex(rr)}${toHex(rg)}${toHex(rb)}`
}

export default function ProgressWaveComponent() {
  const progressPathRef = useRef(null)
  const dashPathRef = useRef(null)
  const [pathLen, setPathLen] = useState(0)
  const [progress, setProgress] = useState(10) // default progress percent (0-100)

  useEffect(() => {
    if (progressPathRef.current) {
      const len = progressPathRef.current.getTotalLength()
      setPathLen(len)
      // ensure initial dash styles
      progressPathRef.current.style.strokeDasharray = `${len} ${len}`
      progressPathRef.current.style.strokeDashoffset = `${len * (1 - progress / 100)}`
      if (dashPathRef.current) {
        dashPathRef.current.style.strokeDasharray = `${len} ${len}`
        dashPathRef.current.style.strokeDashoffset = `${len * (1 - progress / 100)}`
      }
    }
  }, [])

  useEffect(() => {
    if (progressPathRef.current) {
      const offset = pathLen * (1 - progress / 100)
      progressPathRef.current.style.transition = 'stroke-dashoffset 700ms ease'
      progressPathRef.current.style.strokeDashoffset = `${offset}`
      if (dashPathRef.current) {
        dashPathRef.current.style.transition = 'stroke-dashoffset 700ms ease'
        dashPathRef.current.style.strokeDashoffset = `${offset}`
      }
    }
  }, [progress, pathLen])

  // Determine current level name from progress
  const currentLevelIndex = Math.min(3, Math.floor(progress / 25))
  const currentLevel = LEVELS[currentLevelIndex].name

  // Colors
  const baseBrown = '#9b6d12' // behind stroke
  const orange = '#e7a23a' // default main
  const darkOrange = '#b26a12'
  const green = '#2ea44f'

  // If user reached Rising Star (>=25 && <50) OR progress >=25 we interpret as green progress
  const isRisingStarMode = progress >= 25 && progress < 50
  const isBeyondRising = progress >= 50

  // compute two-stop gradient for the progress stroke
  // if in rising star range, use green gradient, otherwise interpolate orange->dark by progress
  let stop1 = orange
  let stop2 = darkOrange
  if (isRisingStarMode) {
    // lighter green -> darker green
    stop1 = lerpColor('#6fda98', green, 0.15)
    stop2 = lerpColor(green, '#1f7f36', 0.2)
  } else {
    const t = Math.min(1, progress / 100)
    stop1 = lerpColor(orange, darkOrange, t * 0.6) // subtle darkening
    stop2 = lerpColor(orange, darkOrange, Math.min(1, 0.5 + t * 0.5))
  }

  const setToLevel = (levelIdx) => {
    const pct = Math.max(0, Math.min(100, levelIdx * 25))
    // when setting to a level, snap to its threshold
    setProgress(pct)
  }

  return (
    <section className="w-full bg-white py-8 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* <div>
            <h2 className="text-xl md:text-2xl font-semibold">Progress Path</h2>
            <p className="text-sm text-gray-500">Move the slider or click a level to simulate leveling up.</p>
          </div> */}

          {/* <div className="flex items-center gap-3">
            <div className="text-sm text-gray-600">{Math.round(progress)}%</div>
            <div className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-700">{currentLevel}</div>
            <div className="flex gap-2">
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setToLevel(l.id)}
                  className={`px-3 py-1 text-sm rounded-md border ${currentLevelIndex >= l.id ? 'bg-amber-50 border-amber-300' : 'bg-white border-gray-200'}`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div> */}
        </div>

        {/* Slider */}
        <div className="mb-6">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="relative bg-white overflow-visible">
          {/* SVG */}
          <svg
            className="w-full h-44 md:h-56 lg:h-72"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="progressGrad" x1="0%" x2="100%">
                <stop offset="0%" stopColor={stop1} />
                <stop offset="100%" stopColor={stop2} />
              </linearGradient>
            </defs>

            {/* darker base stroke (behind) */}
            <path
              d={PATH_D}
              fill="none"
              stroke={baseBrown}
              strokeWidth="30"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* progress stroke (painted on top of base) */}
            <path
              ref={progressPathRef}
              d={PATH_D}
              fill="none"
              stroke="url(#progressGrad)"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: pathLen ? `${pathLen} ${pathLen}` : undefined, strokeDashoffset: pathLen ? pathLen * (1 - progress / 100) : undefined }}
            />

            {/* white dashed highlights — clipped to progress via same dashoffset */}
            <path
              ref={dashPathRef}
              d={PATH_D}
              fill="none"
              stroke="#ffffff"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="42 56"
              style={{ strokeDasharray: pathLen ? `${pathLen} ${pathLen}` : undefined, strokeDashoffset: pathLen ? pathLen * (1 - progress / 100) : undefined }}
            />
          </svg>

          {/* Cards positioned along the curve */}
          <div className="relative -mt-32 md:-mt-40 lg:-mt-48">
            {/* Beginner (2%) */}
            <div className="absolute" style={{ left: '2%' }}>
              <Card label="Beginner" emoji="🌱" active={progress >= 0} highlightColor={(currentLevelIndex >= 0 && currentLevelIndex < 1) ? '#6ee7b7' : undefined} />
            </div>

            {/* Rising Star (28%) */}
            <div className="absolute" style={{ left: '28%' }}>
              <Card label="Rising Star" emoji="✨" active={progress >= 25} highlightColor={progress >= 25 ? '#2ea44f' : undefined} />
            </div>

            {/* Pro (51%) */}
            <div className="absolute" style={{ left: '51%' }}>
              <Card label="Pro" emoji="👑" active={progress >= 50} highlightColor={progress >= 50 ? '#b26a12' : undefined} size="lg" />
            </div>

            {/* Pro Master (80%) */}
            <div className="absolute" style={{ left: '80%' }}>
              <Card label="Pro Master" emoji="💎" active={progress >= 75} highlightColor={progress >= 75 ? '#8b5e34' : undefined} />
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-500">Tip: Click level buttons to snap progress. When you reach <strong>Rising Star</strong>, the progress ridge turns green.</div>
      </div>

      {/* helper card component — inline for simplicity */}
      <style jsx>{`
        /* position tweaks for responsive look */
        @media (min-width: 768px) {
          div[style*='left: 2%'] { top: 40px; }
          div[style*='left: 28%'] { top: 86px; }
          div[style*='left: 51%'] { top: 26px; }
          div[style*='left: 80%'] { top: 86px; }
        }
        @media (max-width: 767px) {
          div[style*='left: 2%'] { top: 18px; }
          div[style*='left: 28%'] { top: 46px; }
          div[style*='left: 51%'] { top: 18px; }
          div[style*='left: 80%'] { top: 46px; }
        }
      `}</style>
    </section>
  )
}

function Card({ label, emoji, active = false, highlightColor, size = 'md' }) {
  const sizes = {
    md: 'w-20 h-20 md:w-24 md:h-24',
    lg: 'w-24 h-24 md:w-28 md:h-28',
  }
  const bg = active ? 'bg-white' : 'bg-gray-100'
  const text = active ? 'text-gray-900' : 'text-gray-600'

  const style = highlightColor ? { backgroundColor: highlightColor, color: '#fff' } : undefined

  return (
    <div className={`flex items-center justify-center ${sizes[size]} rounded-lg shadow-lg ring-1 ring-gray-200 `} style={style}>
      <div className={`text-center ${text}`}>
        <div className={`text-2xl md:text-3xl`}>{emoji}</div>
        <div className="mt-1 text-xs md:text-sm font-medium">{label}</div>
      </div>
    </div>
  )
}
