//엔터사용하고싶으면 백틱기호

// let str = `
// 010-1234-5678.
// thewldbsl416@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

//1. 생성자
//RegExp() ; 생성자함수, JS 전역객체
//const regexp = new RegExp('the', 'gi')
//g 플래그X : 맨처음 나오는 the만 나옴!
//g 플래그 : the 단어 모두 찾음 (대문자T로 시작하는 The는X)
//i 플래스 : 대소문자 구분안하겠다!
//console.log(str.match(regexp))

//2. 리터럴
// const regexp = /the/gi
// console.log(str.match(regexp))
// 포함된 문자열 array를 반환


// const regexp = /fox/gi
// //console.log(regexp.test(str)) //true
// console.log(str.replace(regexp, 'AAA'))
// //변경내용을 반영(할당)
// str = str.replace(regexp, 'AAA')
// console.log(str)

//---------플래그
// const regexp = /the/gi
// console.log(str.match(regexp)) //3개의 배열

// // 마침표(.)를 찾고싶은것인데 정규표현식에서는 하나의 명령어로 동작하는것
// // 마침표 외에도 특정한 기능으로 동작하는 특수기호들은 escape 시켜줘야한다! 
// // 따라서 escape 시켜줘야한다 : \ , 백슬래쉬를 앞에 붙여준다! 
// console.log(str.match(/\.$/gi))
// // null
// // $ : 달러사인 앞에 있는 단어로 해당하는줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킴
// // 끝나는 부분은 백틱기호 바로앞...
// // null : 끝나는 부분(백틱기호바로앞)에 .마침표을 찾지 못했기 때문에! 

// 전체영역 : g
// m : 각각의 줄을 시작과 끝으로 보겠다 (백틱이 시작하고 끝나는것으로 가주하겠다~)


//=============표현(패턴)================
// let str = `
// 010-1234-5678
// thewldbsl416@gmail.com http
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// d`
console.log(
  // str.match(/d$/g)  // ; 만약 백틱과 d 사이에 엔터가 없으면 d를 찾아냄
  // str.match(/^t/gm) //1개 (소문자만)
  // str.match(/^t/gim) //2개
  
  // . : 임의의 한글자
  // str.match(/./g) //모~든 글자 1개씩 모두 배열로
  // str.match(/h..p/g) //http http

  // | : 또는
  // str.match(/fox|dog/) //fox ;str에 fox가 앞에 있기때문에 먼저 찾아져서 fox찾고 종료
  // str.match(/dog|fox/) // fox  ;str에 fox가 먼저 있는건 변하지 않기때문에
  // str.match(/dog|fox/g) //(2) ['fox', 'dog']

  // ? : 물음표 바로앞에 한글자가 있을수도있고 없을수도 있음
  // str.match(/https?/g) // ['http', 'https']
  
  // {}
  // str.match(/t{2}/g) //2개
  // str.match(/d{2}/g) //2개 ['dd', 'dd']
  // str.match(/d{2,}/g) //1개 ['dddd']
  // str.match(/d{2,3}/g) //1개 ['ddd']

  //숫자를포함한 영어알파벳
  // str.match(/\w{2,3}/g) //모든 2개 혹은 3개의 글자
  // \b로 감싸면 숫자나알파벳이 아닌 것을 기준으로 앞뒤로 잘라서
  //str.match(/\b\w{2,3}\b/g)
)

//============= 표현(패턴) (2)==============
// let str = `
// 010-1234-5678
// thewldbsl416@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `
// console.log(
//   //1.  []
//   // f 또는 o 또는 x
//   // str.match(/[fox]/g) 
//   // str.match(/[가-힣]/g)  // 한글 1글자씩 배열
  
//   // str.match(/[a-z]{1,}/g) 
//   // 연속적인영어를 출력 => 영어아닌것을 기준으로잘라서 출력
  
//   //[] 뒤에 {1,} : 1개이상 반복하는것을 일치 추가할시! 
//   //[어떤문자] 에서 어떤문자가 아닌것을 기준으로 잘라내서 모두 출력

//   // \, 백슬래쉬
  
//   // str.match(/\w/g) // 모든문자(언더바포함)

//   // str.match(/\b/g) 
//   // _(언더바)를 제외하곤 모두 문자가 아님
//   // 따라서 언더바를 제외한나머지 것(@, . ,: , 공백 등..)들을 경계라고함
//   // 경계의 갯수만큼 반환 (경계들이 연속적으로 있을때 앞뒤로만)
//   // http(경계)://(경계)localhost(경계):(경계)1234(경계)

  
//   // 63개의 문자가아닌 경계에서 시작해서
//   // f 라는 알파벳 단어라고 시작하고
//   // 그외 63개의 문자가 1개 이상연속일치 되는것 찾고
//   // 다시 63개의 문자가아닌 경계에서 끝낸다
//   // str.match(/\bf\w{1,}\b/g) 
  
//   // str.match(/\d/g)  //숫자만 검색
//   // str.match(/\d{1,}/g)  //숫자덩어리들만
//   // str.match(/\s/g) //줄바꿈, 띄워쓰기
// )

//\s 활용
// const h = `  the hello   !

// `
// console.log(
//   str.replace(/\s/g, '') //모든공백을 사라지게함
// )


//===== 표현(패턴) (2)계속~~ 앞뒤 일치========

const str = `
010-1234-5678
thewldbsl416@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`
console.log(
  // str.match(/.{1,}(?=@)/g) //@기호의 앞쪽에 일치하는 -> thewldbsl416
  // str.match(/(?=@).{1,}/g) //@포함에서 출력 => @gmail.com
  //str.match(/(?<=@).{1,}/g) //@기호의 앞쪽에 일치하는 => gmail.com
)






