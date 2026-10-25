// document
// 최상위 객체(window) -> document -> head / body -> div ==> Dom 트리

// document.addEventListener(이벤트종류, 콜백함수(이벤트가 발생되면 실행(호출)되는 함수));
document.addEventListener('DOMContentLoaded', function() {
    console.log('document ready');

    init();

});
// .addEventListener: 문서 내에 존재하는 모든 이벤트를 들을 수 있도록 하는 내장함수
// 이벤트: 클릭, 스크롤, 입력 등의 모든 행위
// DOMContentLoaded: 이벤트의 종류로, 맨위부터 맨아래까지 렌더링되는 것을 끝내고, 
// 문서에게 렌더링의 종료 알림을 인식하는 것(= 문서의 조작가능 상태를 알림)

// function() = 콜백함수
// 이벤트가 종료된 이후에, 바로 실행할 함수를 설정하는 것

// document ready가 프린트된 이후에, 인터페이스 조작할 수 있도록, 렌더링 종료 알림을 확인해야 한다

function init() {
    console.log('init() called');

    // 뷰와 관련된 내용
    initVews();

    // 이벤트와 관련된 내용
    addEvents();

}

function addEvents() {
    console.log('addEvents() called');

    // menu button event start
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn click');

        showSelectedView(SIGN_UP_VIEW);

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn click');

        showSelectedView(SIGN_IN_VIEW);
        
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn click');

        signInedMemberId = '';

        // 메뉴 체인지
        setMenuByStatus(SIGN_OUT_STATUS);

        // 뷰 체인지
        showSelectedView(SIGN_OUT_VIEW);

    });

    let deleteMenuBtn = document.querySelector('div.menu_wrap a.delete');
    deleteMenuBtn.addEventListener('click', function() {
        console.log('deleteMenuBtn click');

        removeMemberBySignedMemberId();
        alert('remove success');

        signInedMemberId = '';

        setMenuByStatus(SIGN_OUT_STATUS);

        showSelectedView(HOME_VIEW);

    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn click');

        if (signInedMemberId === '') {
            alert('please sign_in');
            showSelectedView(SIGN_IN_VIEW);
            return;
        } 
        
        showSelectedView(WRITE_VIEW);

        
    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn click');

        if (signInedMemberId === '') {
            alert('please sign_in');
            showSelectedView(SIGN_IN_VIEW);
            return;
        } 
        
        listUpDiaries();

        showSelectedView(LIST_VIEW);
        
    });
    // menu button event end

    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function() {
        console.log('signUpBtn clicked');

        let uIdEle = document.querySelector('div.sign_up_wrap input[name="u_id"]');
        let uPwEle = document.querySelector('div.sign_up_wrap input[name="u_pw"]');
        let uMailEle = document.querySelector('div.sign_up_wrap input[name="u_mail"]');

        addMember(uIdEle.value, uPwEle.value, uMailEle.value);

        alert('sign_up success')

        removeValue([uIdEle, uPwEle, uMailEle]);

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function() {
        console.log('signInBtn clicked');

        let uIdEle = document.querySelector('div.sign_in_wrap input[name="u_id"]');
        let uPwEle = document.querySelector('div.sign_in_wrap input[name="u_pw"]');

        let isMember = searchMember(uIdEle.value, uPwEle.value)
        if (isMember) {
            signInedMemberId = uIdEle.value;
            alert('sign_in success');

            setMenuByStatus(SIGN_IN_STATUS);

            showSelectedView(HOME_VIEW);

        } else {
            signInedMemberId = '';
            alert('sign_in fail');

            setMenuByStatus(SIGN_OUT_STATUS);

        }

        removeValue([uIdEle, uPwEle]);

    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function() {
        console.log('writeBtn click');

        let txt = document.querySelector('div.write_wrap input').value;

        addDiary(getCurrentDate() + txt);

        removeValue([document.querySelector('div.write_wrap input')]);

        showSelectedView(LIST_VIEW);

    });

}

function removeValue(eles) {
    console.log('removeValue() called')

    for(let i = 0; i < eles.length; i++) {
        eles[i].value = '';
    }

}

function listUpDiaries() {
    console.log('listUpDiaries() called');

    listWrap.textContent = '';

    let diaryArr = searchDiaries();

    for (let i = 0; i < diaryArr.length; i++) {

        let tpl = document.querySelector('#list_item');
        let clone = document.importNode(tpl.content, true);
        let txt = clone.querySelector('div.txt');
        txt.textContent = diaryArr[i];

        listWrap.prepend(clone);

    }

}