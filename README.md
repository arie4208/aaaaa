# reward_bridge

## 필수설치

node.js: [공식사이트 바로가기](https://nodejs.org/ko/)

## 프로젝트 셋업

1. npm install
2. npm install -g @vue/cli
3. npm install -g cordova

## cordova 추가

vue add cordova

## NPM 명렁어

- 개발모드: npm run serve
- 프로덕션 빌드: npm run build
- 단위테스트: npm run test:unit
- 린트: npm run lint
- 코르도바 명령어: 코르도바 플러그인 참조 [바로가기](https://www.npmjs.com/package/vue-cli-plugin-cordova)

## Component 설명

### UserInfoHeader

로그인한 유저의 이미지와 보유 포인트, 오늘 획득한 포인트를 보여준다.
![UserInfoHeader 컴포넌트](https://github.com/arie4208/reward_bridge/blob/_vue%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%9C%EB%B0%9C/src/readme/UserInfoHeader.jpg?raw=true)

```vue
<user-info-header />
```

### Carousel

이미지갤러리<br>
![Carousel 컴포넌트](https://github.com/arie4208/reward_bridge/blob/_vue%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%9C%EB%B0%9C/src/readme/Carousel.jpg?raw=true)

```vue
<carousel :image-list="imageList" />
```

```
imageList: [
	{
		id: "0",			      	// 아이디
		type:"default",				// 링크타입 default: 웹뷰 내 이동, _blank: 새창으로 이동
		image: "이미지 URL",			// 이미지 URL
		title: "이미지 설명",		// 표시되는 이미지 설명
		urlInfo:{					// 클릭시 이동할 URL. 링크 타입에 따라 달라진다.
			router:{				// default 때의 이동 url
				name:"MainPage",	// 라우터 name
				params:{			// 해당 페이지 이동시 넘길 파라메터 정보
					"key": "value"
				}
			},
			url: "이동할 URL 정보"	// _blank 때의 이동 url
		}
	}
]
```

### SubTitle

서브 타이틀<br>
![SubTitle 컴포넌트](https://github.com/arie4208/reward_bridge/blob/_vue%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%9C%EB%B0%9C/src/readme/SubTitle.jpg?raw=true)

```vue
<sub-title title="추천상품" :url="router" />
```

```
router: {
	name:  "MainPage", 	// 라우터 name
	params: {			// 해당 페이지 이동시 넘길 파라메터 정보
		key:  "value"
	}
}
```

### MainIcon

게임/상품 아이콘<br>
![MainIcon 컴포넌트](https://github.com/arie4208/reward_bridge/blob/_vue%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%9C%EB%B0%9C/src/readme/MainIcon.jpg?raw=true)

```vue
<main-icon
  game-name="게임명"
  :get-value="100"
  :max-value="1000"
  :bullet="true"
  image-url="https://image.winudf.com/v2/image1/Y29tLm5ldG1hcmJsZS5uMmJhZHVrX2ljb25fMTU2NDQ2NDA0MF8wMDM/icon.png?w=170&fakeurl=1"
>
	<template  slot="title">배틀그라운드</template>
	<template  slot="text">서브타이틀</template>
</main-icon>
```

```
gameName: 게임명.
imageUrl: 아이콘 이미지 URL
getValue: 현재 획득한 RB.
		  default:0
maxValue: 목표 RB. (목표 RB가 0일 경우 게이지는 표시되지 않는다.)
          default:0
bullet: H 표시 여부
        default: false
imageUrl: 아이콘 이미지 URL
```

### PremiumIcon

프리미엄 게임/상품 아이콘<br>
![MainIcon 컴포넌트](https://github.com/arie4208/reward_bridge/blob/_vue%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%9C%EB%B0%9C/src/readme/PremiumIcon.jpg?raw=true)

```vue
<premium-icon
  game-name="게임명"
  :get-value="100"
  :max-value="1000"
  :bullet="true"
  image-url="https://image.winudf.com/v2/image1/Y29tLm5ldG1hcmJsZS5uMmJhZHVrX2ljb25fMTU2NDQ2NDA0MF8wMDM/icon.png?w=170&fakeurl=1"
/>
```

```
gameName: 게임명.
imageUrl: 아이콘 이미지 URL
getValue: 현재 획득한 RB.
		  default:0
maxValue: 목표 RB. (목표 RB가 0일 경우 게이지는 표시되지 않는다.)
          default:0
bullet: H 표시 여부
        default: false
imageUrl: 아이콘 이미지 URL
```

### SearchForm

상품 검색폼<br>
![SearchFrom 컴포넌트](https://github.com/arie4208/reward_bridge/blob/_vue%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EA%B0%9C%EB%B0%9C/src/readme/SearchForm.jpg?raw=true)

```vue
<search-form />
```
