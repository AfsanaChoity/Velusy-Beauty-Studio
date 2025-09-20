
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import beginnerIcon from '@/assets/images/leaf.png'
import risingIcon from '@/assets/images/star.png'
import proIcon from '@/assets/images/crown.png'
import master_proIcon from '@/assets/images/daimond.png'

const VIEWBOX_WIDTH = 1200
const VIEWBOX_HEIGHT = 160

// Trim control: fraction of the path to keep visible (1.0 = full, 0.9 = remove last 10%)
const END_TRIM = 0.92

const PATH_D = `M140 50
  C270 10 290 180 490 70
  S775 185 980 70
  S1180 160 2720 50`

const LEVELS = [
  { id: 0, name: 'Beginner', pct: 0 },
  { id: 1, name: 'Rising Star', pct: 25 },
  { id: 2, name: 'Pro', pct: 50 },
  { id: 3, name: 'Pro Master', pct: 75 },
]

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
  const svgRef = useRef(null)
  const beginnerRef = useRef(null)

  const [pathLen, setPathLen] = useState(0)
  const [progress, setProgress] = useState(15)

  // coordinates in pixels for positioning beginner card
  const [beginnerPos, setBeginnerPos] = useState({ left: null, top: null })
  // clip rect width in px (computed from path)
  const [clipWidthPx, setClipWidthPx] = useState(null)

  // lengths mapping for breakpoints [0,25,50,75,100]
  const levelLenRef = useRef(null)

  // compute total length once the SVG path is rendered
  useLayoutEffect(() => {
    if (!progressPathRef.current) return
    try {
      const len = progressPathRef.current.getTotalLength()
      setPathLen(len)

      // initialize dash settings so the path is hidden initially
      progressPathRef.current.style.strokeDasharray = `${len} ${len}`
      progressPathRef.current.style.strokeDashoffset = `${len}`

      if (dashPathRef.current) {
        dashPathRef.current.style.strokeDasharray = `${len} ${len}`
        dashPathRef.current.style.strokeDashoffset = `${len}`
      }
    } catch (err) {
      // ignore if not ready
      // console.warn(err)
    }
  }, [])

  // ---------- New: mapping progress% -> path length that matches card X positions ----------
  useEffect(() => {
    if (!progressPathRef.current || !pathLen || !svgRef.current) return

    // These are the left positions you used in CSS for non-beginner cards (keep design unchanged)
    const CARD_LEFT_PCTS = [0, 26, 45, 70] // beginner is dynamic (we'll treat 0 as start), others are percentages

    // helper: convert view % to viewBox X coordinate
    const viewXForPct = (pct) => (pct / 100) * VIEWBOX_WIDTH

    // binary search length where path.x ~= targetX (search in viewBox units)
    function findLenForViewX(targetX) {
      const path = progressPathRef.current
      let lo = 0
      let hi = pathLen
      let best = 0
      let bestDiff = Infinity
      // iterate fixed number to avoid infinite loops
      for (let i = 0; i < 40; i++) {
        const mid = (lo + hi) / 2
        const pt = path.getPointAtLength(mid)
        const dx = pt.x - targetX
        const adx = Math.abs(dx)
        if (adx < bestDiff) {
          bestDiff = adx
          best = mid
        }
        // if pt.x is smaller than target, move right
        if (pt.x < targetX) {
          lo = mid
        } else {
          hi = mid
        }
      }
      return best
    }

    // Compute breakpoints:
    // pctBreaks = [0, 25, 50, 75, 100]
    // lenBreaks = [lenAt0, lenAt25, lenAt50, lenAt75, trimmedEndLen]
    const lenAt0 = 0
    const trimmedEndLen = pathLen * END_TRIM

    // For lvl 1..3 (25/50/75) find corresponding lengths by their CARD_LEFT_PCTS
    const len25 = findLenForViewX(viewXForPct(CARD_LEFT_PCTS[1]))
    const len50 = findLenForViewX(viewXForPct(CARD_LEFT_PCTS[2]))
    const len75 = findLenForViewX(viewXForPct(CARD_LEFT_PCTS[3]))

    // store them in ref for use by progress effect
    levelLenRef.current = {
      pctBreaks: [0, 25, 50, 75, 100],
      lenBreaks: [lenAt0, len25, len50, len75, trimmedEndLen],
    }
  }, [pathLen])

  // ---------- Update stroke-dashoffset based on mapped lengths ----------
  useEffect(() => {
    if (!progressPathRef.current || !pathLen || !levelLenRef.current) return

    const { pctBreaks, lenBreaks } = levelLenRef.current
    // clamp progress to [0,100]
    const p = Math.max(0, Math.min(100, progress))

    // find segment index
    let seg = 0
    for (let i = 0; i < pctBreaks.length - 1; i++) {
      if (p >= pctBreaks[i] && p <= pctBreaks[i + 1]) {
        seg = i
        break
      }
    }
    const leftPct = pctBreaks[seg]
    const rightPct = pctBreaks[seg + 1]
    const leftLen = lenBreaks[seg]
    const rightLen = lenBreaks[seg + 1]
    // avoid division by zero
    const t = rightPct === leftPct ? 0 : (p - leftPct) / (rightPct - leftPct)
    const desiredLen = leftLen + t * (rightLen - leftLen)

    // strokeDashoffset is pathLen - desiredLen
    const offset = pathLen - desiredLen
    progressPathRef.current.style.transition = 'stroke-dashoffset 700ms ease'
    progressPathRef.current.style.strokeDashoffset = `${offset}`
    if (dashPathRef.current) {
      dashPathRef.current.style.transition = 'stroke-dashoffset 700ms ease'
      dashPathRef.current.style.strokeDashoffset = `${offset}`
    }
  }, [progress, pathLen, levelLenRef.current])

  // compute beginner card position so its RIGHT-MIDDLE sits at the start of the path
  const computeBeginnerPosition = () => {
    const svgEl = svgRef.current
    const pathEl = progressPathRef.current
    const cardEl = beginnerRef.current
    if (!svgEl || !pathEl || !cardEl || !pathLen) return

    // get SVG point at path start (user units / viewBox units)
    const pt = pathEl.getPointAtLength(0) // { x, y } in viewBox units

    // convert to pixel coords relative to the svg element's rendered size
    const svgRect = svgEl.getBoundingClientRect()
    const scaleX = svgRect.width / VIEWBOX_WIDTH
    const scaleY = svgRect.height / VIEWBOX_HEIGHT

    const px = pt.x * scaleX
    const py = pt.y * scaleY

    // card dimensions
    const cardRect = cardEl.getBoundingClientRect()
    const cardWidth = cardRect.width
    const cardHeight = cardRect.height

    // We want the card's RIGHT MIDDLE to be exactly at (px, py)
    const left = px - cardWidth // right edge aligns with px
    const top = py - cardHeight / 2

    setBeginnerPos({ left: Math.round(left), top: Math.round(top) })

    // --- compute clip width px using END_TRIM (kept as in original)
    const visibleLen = pathLen * END_TRIM
    const endPt = pathEl.getPointAtLength(visibleLen)
    const endPx = endPt.x * scaleX
    setClipWidthPx(Math.round(endPx))
  }

  useEffect(() => {
    // compute once path is ready and on resize
    if (!progressPathRef.current) return
    computeBeginnerPosition()
    const ro = new ResizeObserver(() => computeBeginnerPosition())
    if (svgRef.current) ro.observe(svgRef.current)
    window.addEventListener('resize', computeBeginnerPosition)
    return () => {
      window.removeEventListener('resize', computeBeginnerPosition)
      ro.disconnect()
    }
  }, [pathLen])

  // allow snapping to levels (unchanged)
  const setToLevel = (levelIdx) => {
    const pct = Math.max(0, Math.min(100, levelIdx * 25))
    setProgress(pct)
  }

  const currentLevelIndex = Math.min(3, Math.floor(progress / 25))

  // compute gradient stops (kept from your original)
  const baseBrown = '#9b6d12'
  const orange = '#e7a23a'
  const darkOrange = '#b26a12'
  const green = '#2ea44f'
  const isRisingStarMode = progress >= 25 && progress < 50
  const t = Math.min(1, progress / 100)
  let stop1 = orange
  let stop2 = darkOrange
  if (isRisingStarMode) {
    stop1 = lerpColor('#6fda98', green, 0.15)
    stop2 = lerpColor(green, '#1f7f36', 0.2)
  } else {
    stop1 = lerpColor(orange, darkOrange, t * 0.6)
    stop2 = lerpColor(orange, darkOrange, Math.min(1, 0.5 + t * 0.5))
  }

  return (
    <section className="w-full bg-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 overflow-auto overflow-y-hidden">
        {/* <div className="mb-6">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full"
          />
        </div> */}

        <div className="relative bg-white overflow-visible">
          <svg
            ref={svgRef}
            className="w-full h-44 md:h-56 lg:h-72"
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="clipVisible" clipPathUnits="userSpaceOnUse">
                <rect x="0" y="0" width={clipWidthPx ?? VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} />
              </clipPath>
            </defs>

            {/* Group everything that should be trimmed inside the clip */}
            <g clipPath="url(#clipVisible)">
              {/* Base path */}
              <path
                d={PATH_D}
                fill="none"
                stroke="#df951e"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Progress path */}
              <path
                ref={progressPathRef}
                d={PATH_D}
                fill="none"
                stroke="#a56c11"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: pathLen ? `${pathLen} ${pathLen}` : undefined,
                  strokeDashoffset: pathLen ? pathLen * (1 - progress / 100) : undefined,
                }}
              />

              {/* Dashed white line overlay */}
              <path
                d={PATH_D}
                fill="none"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="60,30"
              />
            </g>
          </svg>

          {/* overlay wrapper sized to SVG for pixel positioning */}
          <div
            className="absolute left-0 top-0 pointer-events-none  "
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {/* Beginner card positioned dynamically */}
            <div
              ref={beginnerRef}
              className="absolute pointer-events-auto"
              style={{
                left: beginnerPos.left !== null ? `${beginnerPos.left}px` : '2%',
                top: beginnerPos.top !== null ? `${beginnerPos.top}px` : undefined,
                zIndex: 10,
              }}
            >
              <Card
                label="Beginner"
                image={beginnerIcon}
                active={progress >= 0}
                highlightColor={ '#0D8D01' }
              />
            </div>

            {/* Other cards (kept percent-based for now — design unchanged) */}
            <div className="absolute pointer-events-auto" style={{ left: '26%', top: '140px' }}>
              <Card label="Rising Star" image={risingIcon} active={progress >= 25} highlightColor={progress >= 25 ? '#0D8D01' : "#7C8C7B"} />
            </div>

            <div className="absolute pointer-events-auto" style={{ left: '46%', top: '18px' }}>
              <Card label="Pro" image={proIcon} active={progress >= 50} highlightColor={progress >= 50 ? '#0D8D01' : "#7C8C7B"}  />   
            </div>

            <div className="absolute pointer-events-auto" style={{ left: '70%', top: '130px' }}>
              <Card label="Pro Master" image={master_proIcon} active={progress >= 75} highlightColor={progress >= 75 ? '#0D8D01' : "#7C8C7B"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ label, emoji, image, active = false, highlightColor, size = 'md',  }) {
  const sizes = {
    md: 'w-20 h-20 md:w-24 md:h-24',
    lg: 'w-24 h-24 md:w-28 md:h-28',
  }
  const textColor = highlightColor ? 'text-white font-semibold' : (active ? 'text-gray-900' : 'text-gray-600')
  const style = highlightColor ? { backgroundColor: highlightColor } : undefined

  return (
    <div className={`flex items-center justify-center ${sizes[size]} rounded-lg shadow-lg  `} style={style}>
      <div className={`text-center ${textColor}`}>
        {image ? (
          <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-1">
            <img src={image.src} alt={label} className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className={`text-2xl md:text-3xl`}>{emoji}</div>
        )}
        <div className="mt-1 text-sm md:text-sm font-medium">{label}</div>
      </div>
    </div>
  )
}


