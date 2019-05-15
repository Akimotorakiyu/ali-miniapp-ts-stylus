"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandle(error, desc, method) {
    if (desc === void 0) { desc = ""; }
    if (method === void 0) { method = ""; }
    console.error("\u672A\u80FD-" + method + desc, error);
    my.alert({
        title: method + "\u5931\u8D25",
        content: "\u672A\u80FD-" + method + desc,
        buttonText: '确认',
    });
}
exports.errorHandle = errorHandle;
