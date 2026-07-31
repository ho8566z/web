let pics = ['pic_01.jpg', 'pic_02.jpg', 'pic_03.jpg',
            'pic_04.jpg', 'pic_05.jpg', 'pic_06.jpg'];

let currentIdx = 0;

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!')

    addEvents();

});

const changeImg = (tagEle, picArr, idx) => {
    console.log('changImg() called!');

    tagEle.setAttribute('src', `./imgs/pics/${picArr[idx]}`);

}

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