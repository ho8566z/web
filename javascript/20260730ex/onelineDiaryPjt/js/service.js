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