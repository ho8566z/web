import { 
    openingNewAccount,
    doDeposit,
    doWithDraw,
    printDepositWithdrawHistory
 }from './service.js';

import { config } from './config.js'

while (config.systemFlag) {
    
    let userSelectedNumber = parseInt(prompt('1.계좌개설,    2.입금,    3.출금,    4.입/출금내역,   99.시스템종료'));

    switch (userSelectedNumber) {
        case config.OPENING_NEW_ACCOUNT:
            console.log('OPENING_NEW_ACCOUNT');

            openingNewAccount();

            break;

        case config.DO_DEPOSIT:
            console.log('DO_DEPOSIT');
            
            doDeposit();

            break;
        
        case config.DO_WITHDRAW:
            console.log('DO_WITHDRAW');
            
            doWithDraw();

            break;

        case config.PRINT_DEPOSIT_WITHDRAW_HISTORY:
            console.log('PRINT_DEPOSIT_WITHDRAW_HISTORY');
            
            printDepositWithdrawHistory();
            
            break;

        case config.SYSTEM_OUT:
            console.log('SYSTEM_OUT');
            systemFlag = false;
            break;

    }

}