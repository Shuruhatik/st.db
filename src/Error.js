"use strict";
/*export class DatabaseError extends Error {
    constructor(message: string) {
        super(`${message}\n Information`);
    }
    get name() {
        //  return yellow(`[ NpmDB ] => ${this.constructor.name}`)
        return `\u001b[38;5;251m> \u001b[38;5;2mST.db\n ${this.constructor.name} `
    }
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
const green = (message) => `\x1b[32m${message}\x1b[0m`;
const red = (message) => `\x1b[31m${message}\x1b[0m`;
const yellow = (message) => `\u001b[38;5;251m${message}\x1b[0m`;
const advertisement = `\n${yellow("[ NpmDB ] => Information:")} ${green("Come here for help => https://discord.gg/sBGxGhcFG4")}`;
/*
export class DatabaseError extends Error {
    constructor(message:string) {
        super(`${red(message)}${advertisement}`);
    }

    get name() {
        return yellow(`[ NpmDB ] => ${this.constructor.name}`)
    }
}*/
const formatErrorMessage = (reason, class_name, var1, var2) => {
    console.log(`\x1b[36m`);
    return `\u001b[38;5;251m> \u001b[38;5;2mEnvironment-variables\n    \u001b[38;5;160m${reason}\n\n    \u001b[38;5;160mClass:\n    \u001b[38;5;243m|  \u001b[38;5;34m'${class_name}' \x1b[4m\u001b[38;5;243m->\x1b[0m \u001b[38;5;243m\u001b[38;5;34m'${var1}'\u001b[38;5;243m\u001b[38;5;243m\x1b[4m->\x1b[0m \u001b[38;5;34m'${var2}'\x1b[0m`;
};
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
exports.DatabaseError = DatabaseError;
//# sourceMappingURL=Error.js.map