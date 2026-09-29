# 냥타로 아이스브레이킹 🐾

고양이 타로 카드 한 장을 뽑으면 **오늘의 네트워킹 검사표**가 나오고, 뽑은 카드 주제에 맞춘 **아이스브레이킹 질문 카드 10장**으로 대화를 이어가는 웹앱입니다.

- 22장 메이저 아르카나 고양이 타로 (SVG 일러스트)
- 카드별 검사표: 네트워커 유형, 4가지 지수, 행운의 대화 주제, 오늘의 미션
- 카드별 질문 10개 (몸풀기 → 알아가기 → 한 뼘 더), 꼬리 질문 포함
- 스와이프 / ← → Space 키 / 발표용 전체화면, 공유 링크(`#/card/<id>`)

## 개발

```bash
npm install
npm run dev        # 로컬 개발 서버
npm run build      # 타입체크 + 프로덕션 빌드
npm run validate   # 카드 콘텐츠 규칙 검사
npm run art        # 일러스트를 qa-shots/art/*.png로 렌더링
```

백엔드 없는 정적 사이트(Vite + React + TypeScript)로, `main` 브랜치에 push하면 Vercel에 자동 배포됩니다.
콘텐츠: `src/data/cards/*.ts` · 일러스트: `src/art/**` · 스펙: `docs/SPEC.md`
