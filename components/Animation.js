const extractElement = (element) => {
    return document.querySelector(element);
}

export const fadeIn = async (_element) => {
    var element = extractElement(_element);
    var op = 0.1;  // initial opacity
    if (element.style.opacity <= 0.1) {
        var pro = new Promise((resolve, reject) => {
            var timer = setInterval(function () {
                if (op >= 1){
                    clearInterval(timer);
                    resolve("ok");
                }
                element.style.opacity = op;
                op += 0.025;
            }, 10);
        });
        return await pro;
    }
    else {
        return;
    }
}

export const fadeOut = async (_element) => {
    var element = extractElement(_element);
    var op = 1;  // initial opacity
    if (element.style.opacity >= 1) {
        var pro = new Promise((resolve, reject) => {
            var timer = setInterval(function () {
                if (op <= 0.1){
                    clearInterval(timer);
                    resolve("ok");
                }
                element.style.opacity = op;
                op -= 0.1;
            }, 10);
        })
        return await pro;
    }
    else {
        return;
    }
}
