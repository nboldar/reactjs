/**
 * Решение задачи №1
 */
let foo = () => {
    console.log('hello world!');
};
let loop = (times, callback = null) => {
    if (callback !== null) {
        for (let i = 0; i < times; i++) {
            callback();
        }
    } else {
        return;
    }
};
loop(3, foo);
loop(4);
/**
 *
 * Решение задачи №2
 */
let calculateArea = (figure, height, width = null) => {
    const obj = {};
    obj.figure = figure;
    obj.input = {};
    obj.input.height = height;
    obj.input.width = width;
    if (width !== null || figure === 'circle') {
        switch (figure) {
            case ('triangle' || 'rhombus'):
                obj.area = (height * width) / 2;
                break;
            case 'circle':
                width = 3.1415;
                obj.area = Math.pow(height, 2) * width;
                break;
            case ('square' || 'rectangle'):
                obj.area = height * width;
                break;
            default:
                obj.area = undefined;
                break;
        }
    }else {
        obj.area = undefined;
    }
    return obj;
};
console.log(calculateArea('triangle',5,6));