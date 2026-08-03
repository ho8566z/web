import { memberDB } from './db.js';

export const isMember = (id) => {
    console.log('isMember() CALLED!!');

    return memberDB.get(id);

}

export const insertNewMember = (id, newMemberObj) => {
    console.log('insertNewMember() CALLED!!');
    memberDB.set(id, newMemberObj);

    console.log('memberDB: ', memberDB);

}

export const searchMember = (id) => {
    console.log('searMember() called');

    let memberObj = memberDB.get(key);  // { ... } or undefined

    return memberObj;
    
}

export const updateMember = () => {
    
}

export const deleteMember = () => {
    
}