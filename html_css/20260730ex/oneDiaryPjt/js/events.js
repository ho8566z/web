import {    // 변수import
    SIGN_UP_VIEW,
    SIGN_IN_VIEW,
    SIGN_OUT_VIEW,
    WRITE_VIEW,
    LIST_VIEW,
 } from './viewChaange.js';

import {    // 함수import
    showSelectedView,
 } from './viewChaange.js';
// 변수와 함수를 import하는 것은 구분해서 정리할 것

import { addMember } from './service.js';

export const addEvents = () => {
    console.log('addEvents() called');

    // MENU CLICK EVENT
    let signUpMenuBtn = document.querySelector('div.menu_wrap a.Sign-up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICKED!');

        signUpWrap.style.display = 'block';
        signInWrap.style.display = 'none';
        writeWrap.style.display = 'none';
        listWrap.style.display = 'none';

    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.Sign-in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICKED!');

        signUpWrap.style.display = 'none';
        signInWrap.style.display = 'block';
        writeWrap.style.display = 'none';
        listWrap.style.display = 'none';

    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.Sign-out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICKED!');
    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.Write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED!');

        signUpWrap.style.display = 'none';
        signInWrap.style.display = 'none';
        writeWrap.style.display = 'block';
        listWrap.style.display = 'none';

    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.List');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED!');

        signUpWrap.style.display = 'none';
        signInWrap.style.display = 'none';
        writeWrap.style.display = 'none';
        listWrap.style.display = 'block';

    });


    // FUNCTION CLICK EVENT
    let signUpBtn = document.querySelector('div.sign_up_wrap input[type="button"]');
    signUpBtn.addEventListener('click', function() {
        console.log('signUpBtn CLICKED!');

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]')
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]')
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]')

        console.log('u_id: ', u_id);
        console.log('u_pw: ', u_pw);
        console.log('u_mail: ', u_mail);

        addMember(u_id, u_pw, u_mail);

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function() {
        console.log('signInBtn CLICKED!');
    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function() {
        console.log('writeBtn CLICKED!');
    });

}