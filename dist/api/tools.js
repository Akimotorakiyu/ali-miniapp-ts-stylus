export function errorHandle(error, desc = "", method = "") {
    console.error(`未能-${method}${desc}`, error);
    my.alert({
        title: `${method}失败`,
        content: `未能-${method}${desc}`,
        buttonText: '确认',
    });
}
