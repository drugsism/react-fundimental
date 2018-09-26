
<br /><br />

<p align="center">
<img src="https://www.import.io/wp-content/uploads/2017/10/React-logo-300x140.png"  />
</p>

<br /><br />

## 1. Javascript의 변화와 React


>최근 몇년 동안 웹개발 관련 기술은 수많은 변화를 격고있다.

어느 산업과 마찬가지로 기술을 이끌어가는 큰 벤더들이 서비스 하는 웹서비스에 발마추어 브라우져 버전 또한 과거에 비해 큰 규모의 업데이트가 적용 되고 있으며, 서버, 디바이스등 하드웨어의 발전과 맞물려 웹기술은 환경에 따른 한계에서 어느정도 자유로워진 부분도 큰 이유 중 하나이다. 

그 변화의 중심에는 `Javascript`가 있다고 해도 과언이 아닐것이다.

Javascript는 과거 HTML문서의 vaildation처리 정도의 수준에서 활용되었지만, 브라우져 없이 서버에서 작동하고 코드가 간결하며, 상대적으로 빠른 도입과 적용이 가능하게 되면서 많은 사이트가 자바스크립트 프레임 워크, 라이브러리를 사용하여 개발 되고 프레임워크가 변경되고 새로운 라이브러리가 나오고 있다.

프론트엔드에서  템플릿, 모델, 이벤트를 분리하여 Client side MVC패턴으로 개발을 할 수있는 [Backbone.js](https://backbonejs.org)라이브러리가 인기를 얻으면서 본격적인 프론트엔드 프레임워크들이 발표된다. 대표적으로 [Ember](https://emberjs.com), [Knockout](https://knockoutjs.com/) 그리고 [Angular JS](https://Angularjs.org)가 발표되어 끝판왕으로 군림한다.

AngularJS는 개발속도, Javascript의 코드량 축소, MVC패턴으로 얻는 장점(코드 컨벤션등) 그밖에 많은 장점을 갖고 있으며, 모바일에서 속도 문제, 러닝커브, 페이지 깜빡임, 뒤로가기시 새로로딩, 외부 서비스 콜백처리의 모호함 - 새로운 버전에서 많은 부분이 개선됨 - 등의 단점이 있다. 하지만 몇번의 업데이트 이슈와 여전히 존재하는 단점에도 불구하고 인기가 있고 여전히 많은 웹 서비스에서 사용되고 있다.

그리고 2013년 Facebook에서 `React`를 발표한다.

React는 MVC프레임워크는 아니고 User Interface(View)를 만드는 라이브러리다. AngularJS처럼 MVC를 표방하는 것이 아니라 V(iew)에 집중하였고 훨씬 가볍다.

<br/>

>React의 장점
```
- 쉽다(시작하기). 자바스크립트다. 당신이 ES6에 익숙하다면.(반대한다 이유는 React의 단점에서 기술)
- 빠르다. DOM대신 Virtual DOM이라는 걸 이용하여 리플로우를 최소화한다.
- 단순하다. 단방향 플로우로 프로젝트의 복잡성을 해소하고 Component를 구성하기 쉬움.
- ES6지원 좋음
- 일부페이지에 큰 수정없이 바로 적용할 수 있음 
```
위 항목 중 무었보다 큰 장점을 꼽자면 단언 `Virtual DOM` 이다.

<br/>

>Virtual DOM 

```
Facebook에서는 DOM을 직접 변경하지 않고 내부적으로 빠르게 diff를 계산하는 알고리즘을 고안한다. 
마치 git을 사용하듯이 변경된 부분만 찾아서 빠르게 화면을 렌더링 할 수 있게 해준다.
```

브라우져는 보통 다음과 같은 과정을 통해 화면을 그려낸다.

<br />
<p align="center">
<img src="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png"  />
</p>
<br />

외부에서 DOM의 변경이 일어나면 DOM Tree를 재구성하고 Attachment하여 Render Tree를 재구성한다. 이때 브라우져가 판단하여 리플로(Layout), 리페인트(Painting)이 일어난다.

<br/>

Virtual DOM을 사용한 React에서는 같은 간단한 예시로 어떻게 최적화하는지 볼 수있다.
```
class Hello extends Component {
    constructor(props) {
        super(props);
        ....
    };
    render() {
        return(
            // JSX
            <react.fragment>
                <div>Hello {this.props.personName} </div>
                <div>My name is {this.state.name}</div>
            </react.fragment>
        );
    }
}
```

이 Hello 클래스는 만약 this.props.personName이 'James'이고 this.state.name이 'Jessie' 라면 "Hello James" "My name is Jessie"라는 문자를 리턴하여 보여주는 컴포넌트 라고 하자.
만약 **this.state.name**이 "Tom"으로 바뀐다면 당연히 "Hello James" "My name is Tom" 이렇게 출력 될 것이다. 

이때 React에서는 일반 브라우져의 리렌더링 과정과 다른 과정이 일어나는데 바로 Virtual DOM이 사용된다.
기존 Component Tree의 DOM과 현재 변경된 Componenet를 비교하여 변경된 Component만 변경하고 DOM자체를 갱신한다.(심지어 알고리즘을 통해 비교하여 컴포넌트는 사라지지않고 속성값만 변경한다)

이로 인해 브라우져의 리플로를 최소화되고 성능을 최대화 할수있다.

프레임워크에 비해 상대적으로 가벼운 라이브러리이며, 함께 사용하는 라이브러리와 독립적으로 서비스되어 이를 사용하는 개발자가 선택적으로 사용하거나 그렇지 않을 수있다. 

<br />

>서버사이드 렌더링을 고려한 설계
<p align="center">
<img src="https://subicura.com/assets/article_images/2016-06-20-server-side-rendering-with-react/client-side-vs-server-side.png" width="600" height="450" />
</p>


서버 사이드 렌더링의 장점

+ 유저가 처음으로 컨텐츠를 보는 속도가 빨라짐
+ 서버따로 클라이언트따로 작성하던 코드가 하나로 합쳐짐
+ SEO: SPA-API 방식의 애플리케이션의 단점을 보완

>그리고 이 모든 것을 `Javascript`로 개발 할 수있다.


<br />

---





## 2. 왜 React인가?
<br />
<p align="center">
<img src="https://rhostem.github.io/static/6-react-rising-ccef8a80b6799036efdacba0ea3b3dba-9056e.png" width="600" height="350" />
</p>


>2017 javascript 라이브러리와 프레임워크 관련 채용정보 통계(출처: [indeed.com](https://kr.indeed.com/?r=us))

<br />

`'Programming JavaScript Applications'`의 저자  Eric Elliott은 왜 이렇게 React가 관심을 받고있는가에 대해 [다음](https://medium.com/javascript-scene/top-javascript-libraries-tech-to-learn-in-2018-c38028e028e6)과 같이 얘기하고 있다.


```
React 직업 목록을 살펴보면서 나는 흥미로운 트렌드를 발견했다. 많은 직업들이 우리가 프론트엔드 웹 개발과 관련없다고 생각했던 것이었다.

 - React Native(Vue.js와 관련된 직업의 수보다 React Native와 관련된 직업이 더 많을 것이다)
 - React for IOT
 - React for AR/VR (Oculus Rift가 채용을 주도하고 있다)
 - 들어본 적이 없는 모호한 컴퓨팅 작업을 위한 React


React는 웹이라는 기본 틀에서 벗어났다.

다양한 쓰임새는 React의 큰 강점 중의 하나다. 다른 많은 프레임워크와는 달리 React에 투자하는 것은 단순히 데이터 모델이나,
브라우저나 DOM에 한정되지 않는다. 

사실 나는 자바스크립트를 언급조차 하지 않는 꽤 많은 수의 직업을 찾아냈다.

또 React는 사실상의 표준이 되어 다양하고 풍부한 개발 생태계를 제공한다. 
이는 jQuery 플러그인이 웹을 지배한 이후로 없었던 일이다.

문제는 더 이상 “어떤 프레임워크를 쓸 것인가?”가 아니라 “어떤 기술이 React와 가장 잘 맞는가”이다.

어떤 프레임워크도 2018년에는 React의 위치를 넘어설 수 없을 것으로 보인다 (아마도 2019년에도). 
당신은 안전하다. 자바스크립트 피로감은 이제 진정될 것처럼 보인다. 
우리는 앱 개발에 필요한 멋진 프레임워크를 가지고 있으며 React를 중심으로 훌륭한 개발 생태계가 자리잡고 있다.

```

웹 개발의 동향을 살펴보면, 최근 몇년간 SPA(단일 페이지 애플리케이션: [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application))이 각광받고 있으며 이로인한 Agular, Backbone, Ember등 javascript프레임 워크가 많은 인기를 누리고 있다.

리액트는 페이스북이 만든 라이브러리로 2013년 공개되었다. 리액트는 SPA 프레임워크가 아닌, 뷰 라이브러리(View Library)이다. 

그렇다면 왜 인기가 많은 프레임워크를 사용하지 않고 리액트를 선택하고 있을까?

많은 문서를 분석해본 결과 다음과 같은 결론을 낼 수 있었다.


1. 프레임워크를 사용할 경우 자유롭게 다른 라이브러리와 기술을 도입하는데 제한적이다.
2. 좀 더 효율적인 프론트 개발을 원한다.
3. 기술 도입 시 러닝커브
4. 충분한 레퍼런스

앞서 말한것 처럼, React는 MVC 패턴의 개발패턴 에서 view에 해당하는 `라이브러리` 이다.

React는 view를 컴포넌트 단위로 개발하며 각각의 컴포넌트는 계층구조로 연결되어 있다. 
블럭을 조립하는것 처럼 각 컴포넌트를 결합하여 사용하고 이 컴포넌트는 그대로 다른곳에 재사용될 수있다.


<br />
<p align="center">
<img src="https://cdn-images-1.medium.com/max/800/1*IWIeZaJGBd82ZnIk4vYtnw.png" width="600" height="250" />
</p>
<p align="center">view.js월별 다운로드 수</p>

<br /><br />

<p align="center">
<img src="https://cdn-images-1.medium.com/max/800/1*AOyTSi4Fs5uKNHZoyFcfHQ.png" width="600" height="250" />
</p>
<p align="center">Angular.js월별 다운로드 수</p>
<br /><br />

<p align="center">
<img src="https://cdn-images-1.medium.com/max/800/1*XKJokKyWBzwqNgG2Nzckiw.png" width="600" height="250" />
</p>
<p align="center">react.js월별 다운로드 수</p>
<br /><br />



```
Vue.js의 성장 속도는 React보다 빠르다. 왜 2017년의 React vs Angular의 구도와는 다른 것일까?
2016년 말, 자바스크립트 세계는 새로운 프레임워크를 받아들일 준비가 되어 있었다. Angular 유저는 무척 불만족스러운 상황이었고, 
React의 유저들은 무척 만족스러운 상태였다. 많은 사람들이 React를 공부하려고 했고 소수의 사람들만이 Angular를 배우길 원했다. 
2017년 말 시점에 Angular 2+에 대한 만족도는 여전히 절반 이하인 49%다.
```

우선 Angular는 버전을 업데이트 해가며 개발하는 개발자들이 대형 프로젝트를 개발하는데 이렇게 느낀 한계(프레임워크에 묶여있는 개발의 한계)
가 view에 집중해서 개발하는 라이브러리로 해소 되어가는 느낌이다.

React와 마찬가지로 vue 또한 `Virtual DOM` 이를 채택하고 있다.

같은 알고리즘을 채택하고 있지 않지만, 속도는 React보다 빠르고 CDN방식으로 다른 설치를 할 필요가 없다. 

하지만 템플릿과 같은 형식의 러닝커브(DSL, Domain-Specific Language)가 존재하며, 릴리즈가 상대적으로 느리다.

자세한 내용은 [React를 Vue.js보다 선호하는 이유](http://ahnheejong.name/articles/why-i-prefer-react-over-vuejs/)를 확인.

React또한 마찬가지의 단점을 가지고있다. 

우선 Nodejs에 익숙해야하며, ECMA2015 문법을 잘 사용할 수있어야한다.(시작하는것은 어렵지 않지만...)
JSX에 대한 거부감이 들고 적응이 안된다면 vue의 템플릿이 상대적인 단점이 될 수없다. Vue와 React 모두 거의 대부분의 일반적인 애플리케이션에서 속도가 빠른것이 장점이나, 높은 프레임 속도의 데이터 시각화 또는 애니메이션을 프로토 타이핑 할 때 Vue는 개발시 초당 10 프레임을 처리하는 반면 React는 초당 약 1 프레임으로 떨어지는 경우가 있다고 한다.

<br/><br/>
> 결론

최고의 기술을 도입하는것이 목적이어서는 안된다. 모두 장점, 단점을 가지고 있기 때문이다.
사실 프레임워크나 라이브러리들은 필요에 따라, 팀의 개발 효율성을 고려한 선택에 따라 사용하는 대상이지, 특정한 대세에 따라 도입되어야 할 부분은 아니다. 


반대로 어떠한 필요로 인해서, 구축해야 하는 서비스에 따라서, GitHub, Stack over flow등 레퍼런스가 충분하다면 고려 해볼 수있을 것이다.

이러한 이유에서 Facebook을 비롯하여 Airbnb, Netflix, Dropbox, Twitter, Evernote, Uber 등 선도적인 서비스들이 React를 사용하고있다. 그들 모두가 리액트와 그 생태계에 만족하며 리액트의 발전을 위해 적극적으로 투자하고 기술을 발전 시켜나가고 있다.

<br/>

> 사족 

[토끼와 거북이: 토끼는 왜 멈춰 섰을까?](https://youtu.be/u5QpfAUUxGc)

개발자를 위한 개발을 해야한다.

이말을 듣고 혹자는 '아니야!! 고객을 위한 개발을 해야한다'고 하더라.

부정하지 않았다. 하지만 '요구사항을 만족시키는것이 고객을 위한것이라면 그건 **`기본`** 이고 확장, 운영, 유지보수까지 고려해야한다는건 생각을 하지 못하고있다'
라는 생각이 들더라.

현재 자바스크립트를 포함한 프로그래밍 언어들은 **개발자를 위한 생산성 향상** 에 촛점을 두고 지속적인 변화 중 이며, 
거기엔 분명히 이유가 있고 그 변화를 받아드릴 준비를 항상 해야할 것이다.
 




<br/><br/>



## 3. React를 도입하기 위한 기초지식

react

nodejs

webpack

ECMA2015 Script

flux(redux)

Etc(Mocha, Jasmine, QUnit)

## 4. Getting Started
....









<br/><br/>
> 참고문서:


+ [react.org](https://reactjs.org/)
+ [Top JavaScript Libraries & Tech to Learn in 2018](https://medium.com/javascript-scene/top-javascript-libraries-tech-to-learn-in-2018-c38028e028e6)
+ [2018년과 이후 JavaScript의 동향 - 라이브러리와 프레임워크](https://d2.naver.com/helloworld/3259111)
+ [frank chimero: everything-easy-is-hard-again](https://frankchimero.com/writing/everything-easy-is-hard-again/)
+ [Front-end Frameworks – Results 2017](https://2017.stateofjs.com/2017/front-end/results/)
+ [왜 React와 서버 사이드 렌더링인가?](https://subicura.com/2016/06/20/server-side-rendering-with-react.html)
+ [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)