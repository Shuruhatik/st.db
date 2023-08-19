import * as path from "node:path";
import { existsSync } from "node:fs";
const XML = {
  stringify: (obj: any) => {
    let xml = '';

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        xml += `<${key}>${JSON.stringify(obj[key])}</${key}>`;
      }
    }

    return xml;
  },
  parse: (xml: any) => {
    const result: any = {};

    const regex = /<(\w+)>([^<]*)<\/\1>/g;
    let match;

    while ((match = regex.exec(xml))) {
      result[match[1]] = JSON.parse(match[2]);
    }

    return result;
  }
}


function pathResolve(filePath: string, fileExtension: string, pathOutsideTheProject?: boolean): string {
  if (filePath.startsWith("./")) filePath = filePath.slice(2);
  if (filePath.startsWith("." + path.sep)) filePath = filePath.slice(1);
  if (!filePath.endsWith("." + fileExtension)) filePath += `.${fileExtension}`;
  return pathOutsideTheProject != true ? path.resolve(`./${filePath}`) : filePath;
}

function formatErrorMessage(reason: string, class_name: string, var1?: string, var2?: string): string {
  console.log(`\x1b[36m`)
  return `\u001b[38;5;251m> \u001b[38;5;2mST.DB\n    \u001b[38;5;160m${reason}\n\n    \u001b[38;5;160mClass:\n    \u001b[38;5;243m|  \u001b[38;5;34m'${class_name}' \x1b[4m\u001b[38;5;243m->\x1b[0m \u001b[38;5;243m\u001b[38;5;34m'${var1}'\u001b[38;5;243m\u001b[38;5;243m\x1b[4m->\x1b[0m \u001b[38;5;34m'${var2}'\x1b[0m`
}
export { formatErrorMessage, pathResolve, XML }