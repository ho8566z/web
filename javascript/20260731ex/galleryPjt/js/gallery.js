// 갤러리에 순서대로 보여줄 이미지 파일명 목록 (./imgs/pics/ 폴더 기준)
let pics = ['pic_01.jpg', 'pic_02.jpg', 'pic_03.jpg',
            'pic_04.jpg', 'pic_05.jpg', 'pic_06.jpg'];

// 현재 화면에 표시 중인 이미지의 pics 인덱스
let currentIdx = 0;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!')

    addEvents();

});

// tagEle(img 태그)의 src 를 picArr[idx] 이미지 경로로 바꾼다
const changeImg = (tagEle, picArr, idx) => {
    console.log('changImg() called!');

    tagEle.setAttribute('src', `./imgs/pics/${picArr[idx]}`);

}

// 좌/우 화살표 클릭 시 인덱스를 순환시키며 이미지를 교체하는 이벤트를 등록한다
const addEvents = () => {

    let left_btn = document.querySelector('#wrap li.left_arrow > a');
    left_btn.addEventListener('click', function() {
        console.log('left_btn clicked!');

        currentIdx--;   // 5-> 4-> 3-> 2-> 1-> 0-> 5 ...
        // if (currentIdx >= 0) currentIdx = 5;     // 5: 하드코딩
        if (currentIdx < 0) currentIdx = pics.length - 1;

        changeImg(document.querySelector('#wrap li.pic > img'), pics, currentIdx);

        // imgTag.setAttribute('src', `./imgs/pics/${pics[currentIdx]}`);

    });

    let right_btn = document.querySelector('#wrap li.right_arrow > a');
    right_btn.addEventListener('click', function() {
        console.log('right_btn clicked!');

        currentIdx++;   // 0-> 1-> 2-> 3-> 4-> 5-> 0 ...
        // if (currentIdx >= 6) currentIdx = 0;    // 6: 하드코딩
        if (currentIdx >= pics.length) currentIdx = 0;

        // let imgTag = document.querySelector('#wrap li.pic > img');
        changeImg(document.querySelector('#wrap li.pic > img'), pics, currentIdx);
        
        // imgTag.setAttribute(속성명, 속성값)
        // imgTag.setAttribute('src', './imgs/pics/' + pics[currentIdx]);
        // imgTag.setAttribute('src', `./imgs/pics/${pics[currentIdx]}`);

    });
}