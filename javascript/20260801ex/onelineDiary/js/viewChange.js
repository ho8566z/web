export const SIGN_UP_VIEW          = 1;
export const SIGN_IN_VIEW          = 2;
export const SIGN_OUT_VIEW         = 3;
export const DIARY_WRITE_VIEW      = 4;
export const DIARY_LIST_VIEW       = 5;
export const HOME_VIEW             = 6;

export const views = {
    signUpWrap: '',
    signInWrap: '',
    writeWrap: '',
    listWrap: '',
}

export const initViews = () => {
    console.log('initViews() CALLED!!');

    views.signUpWrap = document.querySelector('div.sign_up_wrap');
    views.signInWrap = document.querySelector('div.sign_in_wrap');
    views.writeWrap = document.querySelector('div.write_wrap');
    views.listWrap = document.querySelector('div.list_wrap');

}

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
        case HOME_VIEW:          // 홈 보여라!!
            console.log('SIGN_OUT_VIEW or HOME_VIEW');

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