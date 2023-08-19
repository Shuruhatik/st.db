"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XML = exports.pathResolve = exports.formatErrorMessage = void 0;
const path = __importStar(require("node:path"));
const XML = {
    stringify: (obj) => {
        let xml = '';
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                xml += `<${key}>${JSON.stringify(obj[key])}</${key}>`;
            }
        }
        return xml;
    },
    parse: (xml) => {
        const result = {};
        const regex = /<(\w+)>([^<]*)<\/\1>/g;
        let match;
        while ((match = regex.exec(xml))) {
            result[match[1]] = JSON.parse(match[2]);
        }
        return result;
    }
};
exports.XML = XML;
function pathResolve(filePath, fileExtension, pathOutsideTheProject) {
    if (filePath.startsWith("./"))
        filePath = filePath.slice(2);
    if (filePath.startsWith("." + path.sep))
        filePath = filePath.slice(1);
    if (!filePath.endsWith("." + fileExtension))
        filePath += `.${fileExtension}`;
    return pathOutsideTheProject != true ? path.resolve(`./${filePath}`) : filePath;
}
exports.pathResolve = pathResolve;
function formatErrorMessage(reason, class_name, var1, var2) {
    console.log(`\x1b[36m`);
    return `\u001b[38;5;251m> \u001b[38;5;2mST.DB\n    \u001b[38;5;160m${reason}\n\n    \u001b[38;5;160mClass:\n    \u001b[38;5;243m|  \u001b[38;5;34m'${class_name}' \x1b[4m\u001b[38;5;243m->\x1b[0m \u001b[38;5;243m\u001b[38;5;34m'${var1}'\u001b[38;5;243m\u001b[38;5;243m\x1b[4m->\x1b[0m \u001b[38;5;34m'${var2}'\x1b[0m`;
}
exports.formatErrorMessage = formatErrorMessage;
//# sourceMappingURL=index.js.map