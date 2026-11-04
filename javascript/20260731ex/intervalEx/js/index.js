// 1초마다 하나씩 화면에 추가할 대화 메시지 목록
let msgs = [
    '안녕하세요.',
    '네. 안녕하세요.',
    '어디세요?',
    '부산입니다.',
    '모하세요.',
    '부산 국제 영화제 왔습니다.',
    '오~ 즐 시간 보내시네요.',
    '어떻게 지내셔요?',
    '저는 제주도에서 캠핑하고 있습니다.',
    '제주도 날씨는 어떤가요?',
    '아주 화창합니다.'
]

// 다음에 출력할 msgs 의 인덱스
let currentIdx = 0;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY');

    init();

});

// setInterval 이 돌려주는 타이머 ID (모든 메시지를 출력하면 clearInterval 로 멈춘다)
let intervalID = '';

const init = () => {
    console.log('init() called!');

    intervalID = setInterval(addMsg, 1000);
    console.log('intervalID ', intervalID);

}

const addMsg = () => {
    console.log('addMsg() called');

    let ul = document.querySelector('ul.msg_wrap');
    let li = '<li>' + msgs[currentIdx] + '</li>';

    ul.insertAdjacentHTML('beforeend', li);
    currentIdx++;
    if (currentIdx >= msgs.length) {
        clearInterval(intervalID);
    }

}