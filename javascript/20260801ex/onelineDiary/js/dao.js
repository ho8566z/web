import { memberDB, diaryDB } from './db.js';

export const isMember = (id) => {
    console.log('isMember() CALLED!!');

    return memberDB.get(id);

}

export const insertNewMember = (id, newMemberObj) => {
    console.log('insertNewMember() CALLED!!');
    memberDB.set(id, newMemberObj);

    console.log('memberDB: ', memberDB);

}

// id 로 회원 정보를 조회한다. 없으면 undefined 를 반환한다
export const searchMember = (id) => {
    console.log('searchMember() CALLED!!');

    let memberObj = memberDB.get(id);   // { .... } or undefined

    return memberObj;

}

export const updateMember = () => {
    
}

export const deleteMember = () => {
    
}

// 다이어리 데이터가 들어갈 방 생성
export const createMyDiaryArr = (id) => {          // gildong
    console.log('createMyDiaryArr() CALLED!!');

    diaryDB.set(id, []);

    console.log('diaryDB ---> ', diaryDB);

}

export const addMyDiary = (id, diary) => {
    console.log('addMyDiary() CALLED!!');

    let myDiaryArr = diaryDB.get(id);
    myDiaryArr.push(diary);

    console.log('diaryDB: ', diaryDB);

}

export const selectDiaryArr = (id) => {
    console.log('selectDiaryArr() called!!');

    let myDiaryArr = diaryDB.get(id);
    return myDiaryArr;
    
}