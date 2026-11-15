export const SIGN_UP_VIEW          = 1;
export const SIGN_IN_VIEW          = 2;
export const SIGN_OUT_VIEW         = 3;
export const DIARY_WRITE_VIEW      = 4;
export const DIARY_LIST_VIEW       = 5;

/** 화면별 최상위 div 요소를 보관한다. initViews() 호출 뒤에 채워진다. */
export const views = {
    signUpWrap: '',
    signInWrap: '',
    writeWrap: '',
    listWrap: '',
}

/** 각 화면(회원가입·로그인·일기쓰기·일기목록)의 div 를 찾아 views 에 담는다. */
export const initViews = () => {
    console.log('initViews() CALLED!!');

    views.signUpWrap = document.querySelector('div.sign_up_wrap');
    views.signInWrap = document.querySelector('div.sign_in_wrap');
    views.writeWrap = document.querySelector('div.write_wrap');
    views.listWrap = document.querySelector('div.list_wrap');

}

/** 선택한 화면 번호의 div 만 보이게 하고 나머지는 숨긴다. */
export const showSelectedView = (viewNo) => {
    console.log('showSelectedView() CALLED!!');

    switch(viewNo) {
        case SIGN_UP_VIEW:      // 회원가입화면 보여라!!
            console.log('SIGN_UP_VIEW');

            views.signUpWrap.style.display = 'block';
            views.signInWrap.style.display = 'none';
            views.writeWrap.style.display = 'none';
            views.listWrap.style.display = 'none';

            break;

        case SIGN_IN_VIEW:      // 로그인화면 보여라!!
            console.log('SIGN_IN_VIEW');

            views.signUpWrap.style.display = 'none';
            views.signInWrap.style.display = 'block';
            views.writeWrap.style.display = 'none';
            views.listWrap.style.display = 'none';

            break;

        case SIGN_OUT_VIEW:      // 로그아웃!!
            console.log('SIGN_OUT_VIEW');

            views.signUpWrap.style.display = 'none';
            views.signInWrap.style.display = 'none';
            views.writeWrap.style.display = 'none';
            views.listWrap.style.display = 'none';

            break;

        case DIARY_WRITE_VIEW:      // 일기쓰기화면 보여라!!
            console.log('DIARY_WRITE_VIEW');

            views.signUpWrap.style.display = 'none';
            views.signInWrap.style.display = 'none';
            views.writeWrap.style.display = 'block';
            views.listWrap.style.display = 'none';

            break;

        case DIARY_LIST_VIEW:      // 일기목록화면 보여라!!
            console.log('DIARY_LIST_VIEW');

            views.signUpWrap.style.display = 'none';
            views.signInWrap.style.display = 'none';
            views.writeWrap.style.display = 'none';
            views.listWrap.style.display = 'block';

            break;
    }

}