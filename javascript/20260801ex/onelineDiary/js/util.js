// 전달받은 입력 요소들의 value 를 모두 빈 문자열로 비운다
export const clearEles = (...eles) => {
    console.log('clearEles() CALLED!!');

    for (let i = 0; i < eles.length; i++)
        eles[i].value = '';

}