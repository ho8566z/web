import {
    SIGN_UP_VIEW,
    SIGN_IN_VIEW,
    SIGN_OUT_VIEW,
    DIARY_WRITE_VIEW,
    DIARY_LIST_VIEW
} from './viewChange.js';

import { showSelectedView } from './viewChange.js';

import { addMember } from './service.js';

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

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;

        addMember(u_id, u_pw, u_mail);

    });

    let signInBtn = document.querySelector('div.sign_in_wrap input[type="button"]');
    signInBtn.addEventListener('click', function(){
        console.log('signInBtn CLICKED!!');
        
    });

    let writeBtn = document.querySelector('div.write_wrap button');
    writeBtn.addEventListener('click', function(){
        console.log('writeBtn CLICKED!!');
        
    });

}