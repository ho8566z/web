// 메뉴 상태 번호
const SIGN_OUT_STATUS   = 1;    // 로그아웃 상태: Sign-up, Sign-in 메뉴를 보여준다
const SIGN_IN_STATUS    = 2;    // 로그인 상태: Sign-out, Delete 메뉴를 보여준다

/**
 * 로그인 상태에 맞게 상단 메뉴의 링크를 보이거나 숨긴다.
 *
 * @param {number} menuStatusNo SIGN_OUT_STATUS 또는 SIGN_IN_STATUS
 */
function setMenuByStatus(menuStatusNo) {
    console.log('setMenuByStatus() called');

    // menuStatusNo의 입력값에 따라 메뉴를 변경한다
    switch(menuStatusNo) {
        case SIGN_OUT_STATUS:   //로그아웃 상태

            document.querySelector('div.menu_wrap a.sign_up').style.display = 'inline-block';
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'inline-block';
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'none';
            document.querySelector('div.menu_wrap a.delete').style.display = 'none';

            break;

        case SIGN_IN_STATUS:    //로그인 상태

            document.querySelector('div.menu_wrap a.sign_up').style.display = 'none';
            document.querySelector('div.menu_wrap a.sign_in').style.display = 'none';
            document.querySelector('div.menu_wrap a.sign_out').style.display = 'inline-block';
            document.querySelector('div.menu_wrap a.delete').style.display = 'inline-block';

            break;
    }
}