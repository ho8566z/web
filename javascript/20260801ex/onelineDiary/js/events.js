import {
    SIGN_UP_VIEW,
    SIGN_IN_VIEW,
    SIGN_OUT_VIEW,
    DIARY_WRITE_VIEW,
    DIARY_LIST_VIEW,
    HOME_VIEW
} from './viewChange.js';

import { showSelectedView } from './viewChange.js';

import { 
    addMember, 
    getMember,
    addDiary,
    getMyDiaryArr
} from './service.js';

import { clearEles } from './util.js';

import {
    SIGN_OUT_STATUS,
    SIGN_IN_STATUS,
    setMenuStatus
} from './menuChange.js';

import { SESSION } from './session.js';

export const addEvents = () => {
    console.log('addEvents() CALLED!!');
    
    // MENU CLICK EVENT  
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign_up');
    signUpMenuBtn.addEventListener('click', function(){
        console.log('signUpMenuBtn CLICKED!!');

        showSelectedView(SIGN_UP_VIEW);

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign_in');
    signInMenuBtn.addEventListener('click', function(){
        console.log('signInMenuBtn CLICKED!!');
        
        showSelectedView(SIGN_IN_VIEW); 

    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign_out');
    signOutMenuBtn.addEventListener('click', function(){
        console.log('signOutMenuBtn CLICKED!!');
        
        showSelectedView(SIGN_OUT_VIEW);

        setMenuStatus(SIGN_OUT_STATUS);

        SESSION.signInedMemberId = '';

    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function(){
        console.log('writeMenuBtn CLICKED!!');
        
        if(SESSION.signInedMemberId === '') {
            alert('Please, sign-in!!');
            showSelectedView(SIGN_IN_VIEW);

        } else {
            showSelectedView(DIARY_WRITE_VIEW);

        }
        
    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function(){
        console.log('listMenuBtn CLICKED!!');
        
        showSelectedView(DIARY_LIST_VIEW);

        let myDiaryArr = getMyDiaryArr();
        // 화면에 렌더링하면 된다!!

        let list_wrap = document.querySelector('div.list_wrap');
        list_wrap.textContent = '';

        for (let i = 0; i < myDiaryArr.length; i++) {
            let tpl = document.querySelector('#list_item');
            let clone = document.importNode(tpl.content, true); // <div class="txt"></div>
            let txt = clone.querySelector('div.txt');
            txt.textContent = myDiaryArr[i];

            list_wrap.append(clone);
        }

    });

    // FUNCTION CLICK EVENT
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function(){
        console.log('signUpBtn CLICKED!!');

        let u_id_ele = document.querySelector('div.sign_up_wrap input[name="u_id"]');
        let u_pw_ele = document.querySelector('div.sign_up_wrap input[name="u_pw"]');
        let u_mail_ele = document.querySelector('div.sign_up_wrap input[name="u_mail"]');

        let u_id = u_id_ele.value;
        let u_pw = u_pw_ele.value;
        let u_mail = u_mail_ele.value;

        if (addMember(u_id, u_pw, u_mail))
            showSelectedView(SIGN_IN_VIEW);

        clearEles(u_id_ele, u_pw_ele, u_mail_ele);

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function(){
        console.log('signInBtn CLICKED!!');
        
        let u_id_ele = document.querySelector('div.sign_in_wrap input[name="u_id"]');
        let u_pw_ele = document.querySelector('div.sign_in_wrap input[name="u_pw"]');

        let u_id = u_id_ele.value;
        let u_pw = u_pw_ele.value;

        SESSION.signInedMemberId = '';
        setMenuStatus(SIGN_OUT_STATUS);

        if (getMember(u_id, u_pw)) {
            SESSION.signInedMemberId = u_id;
            setMenuStatus(SIGN_IN_STATUS);
            showSelectedView(HOME_VIEW);
        }

        clearEles(u_id_ele, u_pw_ele);

    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function(){
        console.log('writeBtn CLICKED!!');
        
        let mydiary = document.querySelector('div.write_wrap input[type="text"]').value;
        addDiary(mydiary);

        clearEles(document.querySelector('div.write_wrap input[type="text"]'));

    });

}