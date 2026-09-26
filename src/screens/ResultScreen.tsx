import { useMemo } from 'react'
import { CARD_BY_ID, type TarotCardContent } from '../data/index.ts'
import { TarotCardFace } from '../components/TarotCardFace.tsx'
import { StatGauge } from '../components/StatGauge.tsx'
import { MissionChecklist } from '../components/MissionChecklist.tsx'
import { CatSays } from '../components/CatSays.tsx'
import { Stamp } from '../components/Stamp.tsx'
import { ShareButton } from '../components/ShareButton.tsx'
import { Icon } from '../components/Icon.tsx'
import { routeToHash } from '../lib/router.ts'
import { useDocumentTitle } from '../lib/hooks.ts'
import { cardTitle, formatKoreanDate, objectParticle } from '../lib/format.ts'
import '../styles/result.css'

interface ResultScreenProps {
  card: TarotCardContent
}

export function ResultScreen({ card }: ResultScreenProps) {
  useDocumentTitle(`${card.nameKo} 카드 검사표 · 냥타로`)
  const { reading, theme } = card
  const match = CARD_BY_ID[reading.bestMatch]
  const today = useMemo(() => formatKoreanDate(new Date()), [])

  return (
    <main className="screen result">
      <nav className="topbar" aria-label="검사표 메뉴">
        <a className="pill-link" href={routeToHash({ name: 'draw' })}>
          <Icon name="redo" />
          다시 뽑기
        </a>
        <span className="topbar__brand">
          <Icon name="paw" />
          냥타로
        </span>
        <ShareButton card={card} variant="icon" />
      </nav>

      <article className="sheet" aria-labelledby="sheet-title">
        <div className="sheet__ears" aria-hidden="true" />

        <header className="sheet__head">
          <p className="sheet__kicker">NYANG CLINIC · No.{String(card.number).padStart(2, '0')}</p>
          <h1 id="sheet-title" className="sheet__title">
            <span>오늘의 네트워킹</span> <span>검사표</span>
          </h1>
          <p className="sheet__date">검사일 · {today}</p>
          <Stamp />
        </header>

        <section className="sheet__profile" aria-label="뽑은 카드">
          <TarotCardFace card={card} variant="mini" className="sheet__card" />
          <div className="sheet__who">
            <p className="sheet__field">뽑은 카드</p>
            <h2 className="sheet__card-name">{cardTitle(card)}</h2>
            <p className="sheet__cat-name">{card.catName}</p>
            <ul className="sheet__chips" aria-label="키워드">
              {card.keywords.map((k) => (
                <li key={k} className="chip">
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p className="sheet__type">
          <span>오늘의 네트워커 유형</span>
          <strong>{reading.networkerType}</strong>
        </p>

        <section className="sheet__reading">
          <h2 className="sheet__headline">{reading.headline}</h2>
          <p className="sheet__summary">{reading.summary}</p>
        </section>

        <section className="sheet__section">
          <h3 className="sheet__label">
            <span>01</span> 네트워킹 컨디션
          </h3>
          <ul className="gauges">
            {reading.stats.map((stat, i) => (
              <StatGauge key={stat.label} stat={stat} index={i} />
            ))}
          </ul>
        </section>

        <section className="sheet__section">
          <h3 className="sheet__label">
            <span>02</span> 처방 내역
          </h3>
          <dl className="rx">
            <div className="rx__row">
              <dt>
                <span aria-hidden="true">💬</span> 행운의 대화 주제
              </dt>
              <dd>{reading.luckyTopic}</dd>
            </div>
            <div className="rx__row">
              <dt>
                <span aria-hidden="true">🍀</span> 행운의 아이템
              </dt>
              <dd>{reading.luckyItem}</dd>
            </div>
            <div className="rx__row rx__row--caution">
              <dt>
                <span aria-hidden="true">⚠️</span> 주의할 점
              </dt>
              <dd>{reading.caution}</dd>
            </div>
          </dl>
        </section>

        <section className="sheet__section">
          <h3 className="sheet__label">
            <span>03</span> 오늘의 미션
          </h3>
          <MissionChecklist cardId={card.id} items={reading.checklist} />
        </section>

        <section className="sheet__section">
          <h3 className="sheet__label">
            <span>04</span> 고양이의 한마디
          </h3>
          <CatSays>{reading.catAdvice}</CatSays>
        </section>

        <section className="sheet__section sheet__match">
          <TarotCardFace card={match} variant="mini" className="sheet__match-card" />
          <div>
            <h3 className="sheet__label sheet__label--plain">궁합 좋은 카드</h3>
            <p className="sheet__match-text">
              오늘은 <strong>{cardTitle(match)}</strong> 카드를 뽑은 사람과 잘 맞아요
            </p>
            <p className="sheet__match-cat">{match.catName}{objectParticle(match.catName)} 찾아보세요!</p>
          </div>
        </section>

        <section className="theme-callout" aria-labelledby="theme-title">
          <p className="theme-callout__kicker">오늘의 대화 주제</p>
          <h2 id="theme-title" className="theme-callout__title">
            <span className="theme-callout__emoji" aria-hidden="true">
              {theme.emoji}
            </span>
            {theme.title}
          </h2>
          <p className="theme-callout__sub">{theme.subtitle}</p>
          <p className="theme-callout__note">
            <Icon name="cards" /> 이 주제로 질문 카드 10장이 준비됐어요
          </p>
        </section>

        <p className="sheet__disclaimer">※ 본 검사표는 고양이의 직감에 근거하며, 재미로만 봐주세요 🐾</p>
      </article>

      <div className="action-bar">
        <a className="btn btn--primary btn--block" href={routeToHash({ name: 'deck', id: card.id, n: 1 })}>
          질문 카드 펼치기
          <Icon name="arrow-right" />
        </a>
      </div>
    </main>
  )
}
