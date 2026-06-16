const memberDB = new Map();
const diaryDB = new Map();

function addMember(id, pw, mail) {
    console.log('addMember() called');

    memberDB.set(id, {
        'u_id': id,
        'u_pw': pw,
        'u_mail': mail
    });

    diaryDB.set(id, []);

}

function searchMember(id, pw) {
    console.log('searchMember() called');

    let memObj = memberDB.get(id);      //-> 데이터 타입: Object

    if (memObj !== undefined && memObj.u_pw === pw) {
        return true;
    }
    
    return false;

}

function remoneMemberBySignedMemberId() {
    console.log('remoneMemberBySignedMemberId() called');

    // memberDB에서 signInedMemberId를 지운다
    memberDB.delete(signInedMemberId);
    
    console.log('memberDB: ', memberDB);

}

function addDiary(txt) {
    console.log('addDiary() called');

    let diaryArray = diaryDB.get(signInedMemberId);
    diaryArray.push(txt);

    console.log('diaryDB: ', diaryDB);

}

function searchDiaries() {
    console.log('searchDiaries() called');

    let diaryArr = diaryDB.get(signInedMemberId);  // Array
    return diaryArr;

}
