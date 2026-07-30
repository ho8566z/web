import { initViews } from './viewChaange.js';
import { addEvents } from './events.js';

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOCUMENT READ!');

    // 화면 초기화
    initViews();

    // 이벤트 정의
    addEvents();

});