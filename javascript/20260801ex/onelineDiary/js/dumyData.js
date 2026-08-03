import { DEV_OR_PROD } from './config.js';

import {
    insertNewMember,
    createMyDiaryArr,
    addMyDiary
} from './dao.js';

let userIds = ['gildong', 'chanho'];
let userPws = ['1234', '9999'];
let userMails = ['gildong@gmail.com', 'chanho@naver.com'];
let userDiaries = ['Hello, World', 'GoodBye World', 'FUXKING MENTALITY']

export const setDumyData = () => {
    console.log('setDumyData() CALLED!!');

    if (!DEV_OR_PROD.IS_PRODUCT) {
        for(let i = 0; i < userIds.length; i++) {
            insertNewMember(userIds[i], {
                u_id: userIds[i],
                u_pw: userPws[i],
                u_mail: userMails[i]
            });

            createMyDiaryArr(userIds[i]);
        }

        for (let j = 0; j < userDiaries.length; j++) {
            addMyDiary(userIds[0], userDiaries[j]);
        }
    }

}
