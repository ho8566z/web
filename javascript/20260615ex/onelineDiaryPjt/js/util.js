let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function getCurrentDate() {
    console.log('getCurrentDate() called');

    // 날짜, 시간정보
    let today = new Date();
    console.log('today: ', today);
    
    let year = today.getFullYear();     // 년도 (2026)
    let month = today.getMonth();       // 월 (5, 0 ~ 11)
    let date = today.getDate();         // 일 (16)
    let day = today.getDay();           // 요일 (2, 0: SUN / 1: MON / ... / 6: SAT)

    // str += '[' + year + '/' (month +1) + '/' + date + '/' + days[day] + ']';
    // [2026/6/16/TUE]
    str = `[${year}/${month +1}/${date}/${days[day]}] `;
    // ``: python의 f문자열 같은
    
    return str;

}