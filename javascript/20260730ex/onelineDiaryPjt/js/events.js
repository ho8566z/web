import {
    SIGN_UP_VIEW,
    SIGN_IN_VIEW,
    SIGN_OUT_VIEW,
    DIARY_WRITE_VIEW,
    DIARY_LIST_VIEW
} from './viewChange.js';

import { showSelectedView } from './viewChange.js';

import {
    addMember,
    getMember
} from './service.js';

import {
    clearEles
} from './utils.js'

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

    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function(){
        console.log('writeMenuBtn CLICKED!!');
        
        showSelectedView(DIARY_WRITE_VIEW);

    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function(){
        console.log('listMenuBtn CLICKED!!');
        
        showSelectedView(DIARY_LIST_VIEW);

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

        addMember(u_id, u_pw, u_mail);

        clearEles();
        u_id_ele.value = '';
        u_pw_ele.value = '';
        u_mail_ele.value = '';

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function(){
        console.log('signInBtn CLICKED!!');

        let u_id_ele = document.querySelector('div.sign_in_wrap input[name="u_id"]');
        let u_pw_ele = document.querySelector('div.sign_in_wrap input[name="u_pw"]');

        let u_id = u_id_ele.value;
        let u_pw = u_pw_ele.value;
        
        getMember(u_id, u_pw)

        clearEles();
        u_id_ele.value = '';
        u_pw_ele.value = '';

    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function(){
        console.log('writeBtn CLICKED!!');
        
    });

}