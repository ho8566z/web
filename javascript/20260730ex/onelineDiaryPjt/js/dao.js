import { memberDB } from './db.js';

/** 아이디로 가입된 회원 객체를 찾는다. 없으면 undefined 를 반환한다. */
export const isMember = (id) => {
    console.log('isMember() CALLED!!');

    return memberDB.get(id);

}

/** 새 회원 객체를 아이디를 키로 memberDB 에 저장한다. */
export const insertNewMember = (id, newMemberObj) => {
    console.log('insertNewMember() CALLED!!');
    memberDB.set(id, newMemberObj);

    console.log('memberDB: ', memberDB);

}

/** 아이디로 회원 객체를 조회한다. 없으면 undefined 를 반환한다. */
export const searchMember = (id) => {
    console.log('searchMember() called');

    let memberObj = memberDB.get(id);  // { ... } or undefined

    return memberObj;
    
}

/** 회원 정보 수정 (아직 구현 전). */
export const updateMember = () => {
    
}

/** 회원 삭제 (아직 구현 전). */
export const deleteMember = () => {
    
}