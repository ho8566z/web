export const SIGN_UP_VIEW = 1;
export const SIGN_IN_VIEW = 2;
export const SIGN_OUT_VIEW = 3;
export const WRITE_VIEW = 4;
export const LIST_VIEW = 5;

const views = {
    signUpWrap: '',
    signInWrap: '',
    writeWrap: '',
    listWrap: '',
}

export const initViews = () => {
    // '=>'는 실제적으로 익명함수, 'initViews'는 변수명에 가깝고, 
    // js는 함수도 데이터 취급이다
    console.log('initViews() called!');

    views.signUpWrap = document.querySelector('div.sign_up_wrap');
    views.signInWrap = document.querySelector('div.sign_in_wrap');
    views.writeWrap = document.querySelector('div.write_wrap');
    views.listWrap = document.querySelector('div.list_wrap');

}

export const showSelectedView = (viewNo) => {
    console.log('showSelectedView() called!');

    switch(viewNo) {
        case SIGN_UP_VIEW:
            console.log('SIGN_UP_VIEW');

            views.signUpWrap.style.display = 'block';
            views.signInWrap.style.display = 'none';
            views.writeWrap.style.display = 'none';
            views.listWrap.style.display = 'none';

            break;

        case SIGN_IN_VIEW:
            console.log('SIGN_IN_VIEW');

            views.signUpWrap.style.display = 'none';
            views.signInWrap.style.display = 'block';
            views.writeWrap.style.display = 'none';
            views.listWrap.style.display = 'none';

            break;

        case SIGN_OUT_VIEW:
            console.log('SIGN_OUT_VIEW');

            views.signUpWrap.style.display = 'none';
            views.signInWrap.style.display = 'none';
            views.writeWrap.style.display = 'none';
            views.listWrap.style.display = 'none';

            break;

        case WRITE_VIEW:
            console.log('WRITE_VIEW');

            views.signUpWrap.style.display = 'none';
            views.signInWrap.style.display = 'none';
            views.writeWrap.style.display = 'block';
            views.listWrap.style.display = 'none';

            break;

        case LIST_VIEW:
            console.log('LIST_VIEW');

            views.signUpWrap.style.display = 'none';
            views.signInWrap.style.display = 'none';
            views.writeWrap.style.display = 'none';
            views.listWrap.style.display = 'block';

            break;

    }
}