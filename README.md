# senior_longform

React + Vite로 만든 페이지 프로젝트입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속하세요.

## 스크립트

- `npm run dev` - 개발 서버 실행 (접속 시 index.html로 바로 표시, 브라우저 자동 열림)
- `npm run build` - 프로덕션 빌드
- `npm run start` - 빌드 후 웹서버 실행 (접속하면 index.html로 바로 웹서비스)
- `npm run serve` - 이미 빌드된 dist 폴더를 웹서버로 서비스 (빌드 후 사용)
- `npm run stop` - 백그라운드에서 돌아가는 dev/preview 서버(7798 포트) 종료

---

## 리눅스 서버에서 Node로 사이트 구동하기

다른 리눅스 서버에서 이 프로젝트를 웹서비스로 돌리는 방법입니다.

### 1. 프로젝트를 서버로 가져오기

```bash
# Git으로 클론하는 경우
git clone <저장소주소> senior_longform
cd senior_longform

# 또는 Windows에서 파일을 복사한 경우, 해당 폴더로 이동
cd senior_longform
```

### 2. Node.js 설치 확인

```bash
node -v   # v18 이상 권장
npm -v
```

없다면 예: `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -` 후 `sudo apt install -y nodejs`

### 3. 의존성 설치 및 빌드

```bash
npm install
npm run build
```

`dist` 폴더가 생기면 빌드 완료입니다.

### 4. 서버 실행

**방법 A – 포그라운드 (테스트용)**

```bash
node server.js
# 또는
npm run serve
```

접속: `http://서버IP:7798`  
종료: `Ctrl + C`

**방법 B – 백그라운드 (실서비스)**

```bash
# nohup으로 백그라운드 실행
nohup node server.js > server.log 2>&1 &
```

**방법 C – PM2로 실행 (재시작·로그 관리)**

```bash
# PM2 설치 (한 번만)
npm install -g pm2

# 실행 (포트는 server.js 기본값 7798, 변경 시 아래 참고)
pm2 start server.js --name senior_longform

# 상태 확인
pm2 status

# 로그
pm2 logs senior_longform
```

### 5. 포트 변경

서버에서 다른 포트를 쓰려면 환경 변수로 지정합니다.

```bash
PORT=3000 node server.js
# 또는
PORT=3000 npm run serve
```

PM2 사용 시:

```bash
PORT=3000 pm2 start server.js --name senior_longform
```

### 6. 방화벽에서 포트 열기 (필요 시)

```bash
# Ubuntu/Debian (ufw)
sudo ufw allow 7798
sudo ufw reload
```
