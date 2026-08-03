export const clearEles = (...eles) => {
    console.log('clearEles() CALLED!!');

    for (let i = 0; i < eles.length; i++)
        eles[i].value = '';

}