# 초기 설치 및 실행

# Getting Started with Create React App

- npx create-react-app workingdays --template typescript

# 이슈

1. tscofig.json 오류 관련 수정

- "jsx": "react-jsx"을 "react"로 변경
- npm i typescript@4.0.5 -S
- npm i --save @types/react @types/react-dom

# eslint, prettier, vscode setting

- eslint: 코딩 컨벤션 외에도 스타일, 안티 패턴, 변수 범위등을 정적 분석을 통해 런타임 에러 사전에 발견 합니다.

  - npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
  - npm i -D eslint-plugin-no-loops
  - npm i -D eslint-plugin-prettier
  - npm i -D eslint-config-prettier

- prettier: 공통된 코딩 스타일 가이드에 초점을 맞추고 코드 품질을 위해 사용 합니다.
  - npm i -D eslint-config-prettier
  - npm i -D prettier

# MATERIAL-UI 설치 - 디자인 framework
  - Material-UI은 리액트 개발에서 쉽게 사용할 수 있는 UI Framework 입니다.
  - https://material-ui.com/
  - https://material-ui.com/components/material-icons/ (icon 리스트 검색용)
  - npm i @material-ui/core
  - npm i @material-ui/icons
