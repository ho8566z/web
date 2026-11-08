import {
    isMember,
    insertNewMember,
    searchMember,
    updateMember,
    deleteMember,
    createMyDiaryArr,
    addMyDiary,
    selectDiaryArr
} from './dao.js';

import { SESSION } from './session.js';

import {
    SIGN_IN_STATUS,
    SIGN_OUT_STATUS,
    setMenuStatus
} from './menuChange.js';

export const addMember = (id, pw, mail) => {
    console.log('addMember() CALLED!!');

    /*
    1. 사용자가 입력한 정보에서 ID값이 기존 회원 ID와 중복되는지 확인!
    2. 만약 기존 회원 ID와 중복 되지 않는다면 회원가입 진행(insertNewMember())
    3. 만약 기존 회원 ID가 존재한다면 회원가입 진행 안함.
    */

    if(isMember(id) === undefined) {
        insertNewMember(id, {
                u_id: id,
                u_pw: pw,
                u_mail: mail
            });
        
        createMyDiaryArr(id);

        return true;

    } else {
        console.log(`${id} 아이디는 사용할 수 없습니다.`);
        return false;
    };

}

// id 와 pw 가 일치하는 회원이 있으면 true, 아니면 false 를 반환한다
export const getMember = (id, pw) => {
    console.log('getMember() CALLED!!');

    let searchedMemberObj = searchMember(id);   // { ... } or undefined

    if (searchedMemberObj === undefined || searchedMemberObj.u_pw !== pw) {
        console.log('로그인 실패!!');
        return false;

    } else {
        console.log('로그인 성공!!');
        return true;
    }

}

// 로그인한 회원의 일기장에 일기 한 건을 추가한다
export const addDiary = (diary) => {
    console.log('addDiary() CALLED!!');

    addMyDiary(SESSION.signInedMemberId, diary);

}

export const getMyDiaryArr = () => {
    console.log('getMyDiaryArr() called!!');

    let myDiaryArr = selectDiaryArr(SESSION.signInedMemberId);
    console.log('myDiaryArr: ', myDiaryArr);

    return myDiaryArr;

}