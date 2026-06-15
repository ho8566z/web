const SIGN_UP_VIEW      = 1;
const SIGN_IN_VIEW      = 2;
const SIGN_OUT_VIEW     = 3;
const DIARY_WRITE_VIEW  = 4;
const DIARY_LIST_VIEW   = 5;

signUpWrap = '';
signInWrap = '';
writeWrap = '';
listWrap = '';

function initViews() {
    console.log('initViews() called');

    signUpWrap = document.querySelector('div.sign_up_wrap');
    signInWrap = document.querySelector('div.sign_in_wrap');
    writeWrap = document.querySelector('div.write_wrap');
    listWrap = document.querySelector('div.list_wrap');    

}

// 사용자가 원하는 뷰를 보이도록
function showSelectedView(viewNo) {
    console.log('showSelectedView() called');

    switch(viewNo) {
        case SIGN_UP_VIEW:
            // 회원 가입 화면을 보이도록
            signUpWrap.style.display = 'block';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case SIGN_IN_VIEW:
            // 로그인 화면을 보이도록
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'none';
            break;

        case SIGN_OUT_VIEW:

            break;

        case DIARY_WRITE_VIEW:
            // 일기 작성 화면을 보이도록
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'block';
            listWrap.style.display = 'none';
            break;

        case DIARY_LIST_VIEW:
            // 일기 리스트 화면을 보이도록
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            writeWrap.style.display = 'none';
            listWrap.style.display = 'block';
            break;
    }

}