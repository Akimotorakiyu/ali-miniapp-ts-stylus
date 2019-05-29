// 使用mini-types
/// <reference types="mini-types" />


// /**
//  * write by 银子·湫曗
//  * write by silvery
//  */

// /**
//  * 分享返回值
//  */
// declare interface shareInfo {
//   title: string;
//   path: string;
//   desc?: string;
//   imageUrl?: string;
// }

// declare interface appOption {
//   onLaunch?: (option: {query:any,path:string}) => void;
//   onShow?: (option: {query:any,path:string}) => void;
//   onError?: () => void;
//   onHide?: () => void;
//   state?:any;
//   [propName: string]: any;
// }

// // declare function App(params: appOption);
// declare class App {
//   constructor(params: appOption);
// }

// declare function getApp():appOption;

// declare interface pageOption {
//     onLaunch?: (option: any) => void;
//     onShow?: (option: any) => void;
//     onLoad?: (option: any) => void;
//     onReady?: () => void;
//     onHide?: () => void;
//     onUnload?: () => void;
//     onTitleClick?: () => void;
//     onPullDownRefresh?: () => void;
//     onReachBottom?: () => void;
//     onShareAppMessage?: () => shareInfo;
//     [propName: string]: any;
//   }
// // declare function Page(params: pageOption);
// declare class Page{
//   constructor(params: pageOption);
//   setData(data:any);
// }


// declare enum httpMethods {
//   post = "POST",
//   get = "GET"
// }
// declare enum httpDataType {
//   json = "json",
//   text = "text",
//   base64 = "base64"
// }
// declare interface requestOption {
//   url: string;
//   headers?: any;
//   method?: httpMethods;
//   data?: any;
//   timeout?: number;
//   dataType?: httpDataType;
//   success?: (res: any) => void;
//   fail?: (res: any) => void;
//   complete?: (res: any) => void;
// }

// declare interface alertOption {
//   title: string;
//   content: string;
//   buttonText?: string;
//   success?: (res: any) => void;
//   fail?: (res: any) => void;
//   complete?: (res: any) => void;
// }

// declare interface navOption {
//   url: string;
//   success?: (res: any) => void;
//   fail?: (res: any) => void;
//   complete?: (res: any) => void;
// }

// declare namespace my {
//   function httpRequest(option: requestOption): void;
//   function alert(option: alertOption): void;
//   function navigateTo(option:navOption):void;
//   function SDKVersion():string;
//   function getSystemInfoSync():any;
// }

// declare interface eventThing{
//   type:string;
//   timeStamp:number;
//   target:{
//     id?:string;
//     tagName:string,
//     dataset:{
//       [props:string]:any
//     }
//   };
//   detail:{
//     value?:any
//   };
//   currentTarget:{
//     id?:string;
//     tagName:string,
//     dataset:{
//       [props:string]:any
//     }
//   };
// }
