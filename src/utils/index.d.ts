declare const XML: {
    stringify: (obj: any) => string;
    parse: (xml: any) => any;
};
declare function pathResolve(filePath: string, fileExtension: string, pathOutsideTheProject?: boolean): string;
declare function formatErrorMessage(reason: string, class_name: string, var1?: string, var2?: string): string;
export { formatErrorMessage, pathResolve, XML };
