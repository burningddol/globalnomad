# .github 폴더가 없다면 생성

if (!(Test-Path ".github")) { New-Item -ItemType Directory -Path ".github" }

# pull_request_template.md 파일 생성

@'

## ✏️ 작업 내용

## 📍 변경 범위

## ✅ 체크리스트

- [ ]
- [ ]
- [ ] 코드 오류가 없고 정상 작동하는지 확인했습니다.
- [ ] 팀 컨벤션을 준수했습니다.
- [ ] 화면(UI)과 데이터 로직을 적절히 나누었습니다.
- [ ] 예외 상황을 고려했으며, 복잡/핵심 로직에 주석을 추가했습니다.
- [ ] 자체 코드 리뷰를 완료했습니다.

## 🗨️ 논의 사항 (참고 사항)

'@ | Out-File -FilePath .github/pull_request_template.md -Encoding utf8
