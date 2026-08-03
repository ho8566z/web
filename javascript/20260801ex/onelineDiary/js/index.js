import { initViews } from './viewChange.js';
import { addEvents } from './events.js';
import { setDumyData } from './dumyData.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY!!');

    // set dumy data
    setDumyData();

    // 화면 초기화
    initViews();

    // 이벤트 정의
    addEvents();

});