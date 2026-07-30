import { memberDB } from './db,js';

export const isMember = (id) => {
    console.log('isMember() called!');

    return memberDB.get(id);

}

export const insertNewMember = (id, newMemberObj) => {
    console.log('insertNewMember() called!');
    memberDB.set(id, newMemberObj)

}

export const searchNewMember = () => {
    
}

export const updateNewMember = () => {
    
}

export const deleteNewMember = () => {
    
}

/* 
Create  : insert
Read    : search
Update  : update
Delete  : delete
*/