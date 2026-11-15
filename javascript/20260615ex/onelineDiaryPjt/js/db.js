const memberDB = new Map();
const diaryDB = new Map();

/** 아이디·비밀번호·메일로 회원을 등록하고, 그 회원의 빈 일기 목록을 만든다. */
function addMember(id, pw, mail) {
    console.log('addMember() called');

    memberDB.set(id, {
        'u_id': id,
        'u_pw': pw,
        'u_mail': mail
    });

    diaryDB.set(id, []);

}

/** 아이디가 있고 비밀번호가 같으면 true, 아니면 false 를 반환한다. */
function searchMember(id, pw) {
    console.log('searchMember() called');

    let memObj = memberDB.get(id);      //-> 데이터 타입: Object

    if (memObj !== undefined && memObj.u_pw === pw) {
        return true;
    }
    
    return false;

}

/** 로그인한 회원을 memberDB 에서 삭제한다. 일기 목록(diaryDB)은 지우지 않는다. */
function removeMemberBySignedMemberId() {
    console.log('removeMemberBySignedMemberId() called');

    // memberDB에서 signInedMemberId를 지운다
    memberDB.delete(signInedMemberId);
    
    console.log('memberDB: ', memberDB);

}

/** 로그인한 회원의 일기 목록 맨 뒤에 새 일기 내용을 추가한다. */
function addDiary(txt) {
    console.log('addDiary() called');

    let diaryArray = diaryDB.get(signInedMemberId);
    diaryArray.push(txt);

    console.log('diaryDB: ', diaryDB);

}

/** 로그인한 회원의 일기 목록(배열)을 반환한다. */
function searchDiaries() {
    console.log('searchDiaries() called');

    let diaryArr = diaryDB.get(signInedMemberId);  // Array
    return diaryArr;

}
