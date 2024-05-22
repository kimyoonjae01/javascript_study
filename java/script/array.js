//배열
let yoil = []//빈 배열
console.log(yoil)
yoil = ['월','화','수','목','금','토','일']
console.log(yoil)
console.log (`오늘은 ${yoil[0]}`)//오늘은 월요일입니다. 
//배열 작성법 2.
let yoil_v2= new Array(2); //빈배열
console.log(yoil_v2)
console.log(yoil_v2[1]) //undefined
yoil_v2[1]= '월'
console.log(yoil_v2)
yoil_v2[0] ='일'
console.log(yoil_v2[0]+'요일')
console.log(yoil_v2)
// 배열 기초 문제
// 1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
// 콘솔 결과 ex) 내가 좋아하는 색상은 0, 0 입니다.
let color = new Array(2)
color = ['빨강','노랑','파랑','핑크','연두','보라']
console.log(color)
console.log(`좋아하는 색상은 ${color[1]}색, ${color[2]}색 입니다.`)
//2. 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
let tree = new Array(5)
tree =['사과','수박','토마토','자두','복숭아']
console.log(tree)
console.log(`좋아하는 과일은 ${tree[4]},${tree[3]},${tree[2]},${tree[1]},${tree[0]} 입니다.`)
//날씨 카드 (맑음,흐림,비,눈) 을 배열로 생성하고 이번주 기상예보를 출력하세요.
//결과 예)
// 월요일 : 맑음
// 화료일 : 눈
// 수요일 : 비
// 목요일 : 흐림
// 금요일 : 맑음
// 토요일 : 맑음
// 일요일 : 눈
let card = new Array(4)
card = ['맑음','흐림','비','눈']
console.log(card)
console.log(`${yoil[0]}요일 : ${card[0]}`)
console.log(`${yoil[1]}요일 : ${card[3]}`)
console.log(`${yoil[2]}요일 : ${card[2]}`)
console.log(`${yoil[3]}요일 : ${card[1]}`)
console.log(`${yoil[4]}요일 : ${card[0]}`)
console.log(`${yoil[5]}요일 : ${card[0]}`)
console.log(`${yoil[6]}요일 : ${card[3]}`)
let cgv = new Array(8)
console.log(cgv)
console.log(cgv.length)
cgv[0] = 'A1'
console.log(cgv)
cgv[1] = 'C3'
console.log(cgv)
cgv.push('F5')
//배열 속성 활용
let megabox = []
console.log(megabox)
console.log(megabox.length)
megabox.push('A2')
console.log(megabox)
megabox.push('B1')
console.log(megabox)
megabox.unshift('A1')
console.log(megabox)
megabox.pop()
console.log(megabox)
megabox.shift()
console.log(megabox)
megabox.push('F5','F6')
console.log(megabox)
console.log('````````````````')
let lottecinema = []
let price = 10000
//ex 좌석 배열에 3개의 좌석 정보가 들어있을 때
// 예매하신 좌석은 총 3좌석이며 성인 1명당 10000원 기준으로 총결제금액은 30000원 입니다.
lottecinema.push('A1','A2','A3')
console.log(lottecinema)
console.log(`${lottecinema[0]} : ${price}`)
console.log(`${lottecinema[0]},${lottecinema[1]} : ${price*2}`)
console.log(`${lottecinema[0]},${lottecinema[1]},${lottecinema[2]} : ${price*3}`)
console.log(`예매하신 좌석은 총 ${lottecinema.length} 좌석이며 성인 1명당 ${price}원 기준으로 총 결제 금액은 ${lottecinema.length * price} 원 입니다.`)
// 뒤로가기 인원 수정
lottecinema.pop() //a3 제거됌
//결제하기 클릭 후 메세지 출력
console.log(`예매하신 좌석은 총 ${lottecinema.length} 좌석이며 성인 1명당 ${price}원 기준으로 총 결제 금액은 ${lottecinema.length * price} 원 입니다.`)
//뒤로가기 인원 수정
lottecinema.push('A4','A5')
console.log(`예매하신 좌석은 총 ${lottecinema.length} 좌석이며 성인 1명당 ${price}원 기준으로 총 결제 금액은 ${lottecinema.length * price} 원 입니다.`)