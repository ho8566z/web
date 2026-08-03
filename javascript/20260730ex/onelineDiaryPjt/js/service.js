import {
    isMember,
    insertNewMember,
    searchMember,
    updateMember,
    deleteMember
} from './dao.js';

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
            
    } else {
        console.log(`${id} 아이디는 사용할 수 없습니다.`);

    };

}

export const getMember = (id, pw) => {
    console.log('getMember() called!');

    let seachedMemberObj = searchMember(id);    // { ... } or undefined

    /*
    if (searchMemberObj === undefined) {
        console.log('그런회원 없다, 회원가입 해라');

    } else {
        console.log('그런회원 있다, 내가 인증할테니 비밀번호?');

        // 인증(authentication) 절차
        if (searchMemberObj.u_pw === pw) {
            console.log('로그인 성공');

        } else {
            console.log('로그인 실패');

        }

    }
        */

    if (searchMemberObj === undefined || searchMemberObj.u_pw !==pw) {
        console.log('로그인 실패');

    } else {
        console.log('로그인 성공');

    }

}