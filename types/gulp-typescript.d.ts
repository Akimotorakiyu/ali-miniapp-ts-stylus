export = main;
declare function main(param: any, theReporter: any, ...args: any[]): any;
declare namespace main {
    function createProject(fileNameOrSettings: any, settings?: any): any;
    function filter(args: any): void;
    namespace reporter {
        function countErrors(results: any): any;
        function defaultReporter(): any;
        function emptyCompilationResult(noEmit: any): any;
        function fullReporter(fullFilename: any): any;
        function longReporter(): any;
        function nullReporter(): any;
    }
}
