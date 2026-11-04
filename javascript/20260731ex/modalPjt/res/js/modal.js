document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!');

    addEvents()

});

// 버튼 클릭 시 모달을 열고, 모달 배경 클릭 시 닫는 이벤트를 등록한다
const addEvents = () => {
    console.log('addEvents() called!');

    // 1. 엘리먼트 찾기
    // 2. 찾은 엘리먼트에 리스너 달기
    // 3. 할일 명시하기-> 핸들러 작업

    let btn = document.querySelector('#wrap > div.btn > a');
    btn.addEventListener('click', function() {
        console.log('btn clicked!');

        // let modal = document.querySelector('#modal_bg');
        // modal.style.display = 'block';
        // showHideEle(document.querySelector('#modal_bg'), 'block');
        showHideEleForModal();

    });

    let modal = document.querySelector('#modal_bg');
    modal.addEventListener('click', function() {
        console.log('modal clicked!');

        // modal.style.display = 'none';
        // showHideEle(document.querySelector('#modal_bg'), 'none');
        showHideEleForModal();
    
    });

}

// 모달(#modal_bg)이 숨겨져 있으면 보이게, 보이면 숨기게 토글한다
const showHideEleForModal = () => {
    console.log('showHideEle() called!');

    let ele = document.querySelector('#modal_bg');

    // ele.style.display = status;
    // if (ele.style.display === '' || ele.style.display === 'none') {
    //     ele.style.display = 'block';
    // } else {
    //     ele.style.display = 'none';
    // }
    if (!ele.style.display || ele.style.display === 'none') {
        ele.style.display = 'block';
    } else {
        ele.style.display = 'none';
    }

}