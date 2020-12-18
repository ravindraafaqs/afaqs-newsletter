function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <table bgcolor=\"#ffffff\" role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n\t<!-- <tr>\n\t<td align=\"center\" style=\"padding:5px 10px 0 15px; text-align: center; background-color: #fff;\"><img src=\"https://ads.afaqs.com/www/images/40c5bdf7c49441820307bc70efa2375d.jpg\" alt=\"alt_text\" border=\"0\" align=\"center\" style=\"width: 100%; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; margin: auto;\" ></td>\n\t</tr> -->\n <tr>\n <td width=\"100%\" height=\"25\" style=\"font-size: 12px; line-height: 16px; background-color:#212741; text-align: right;\">\n <app-top></app-top>\n</td>\n</tr>\n\n<tr>\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n<app-header></app-header>\n</table>\n</tr>\n\n<tr>\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n<app-footer></app-footer>\n</table>\n</tr>\n\n</table>\n\n\n<!--  <app-bottom></app-bottom>  -->\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBottomBottomComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <tr bgcolor=\"#ffffff\" dir=\"ltr\" align=\"center\" valign=\"top\" *ngFor = \"let data of fNewsData | slice:1:2; let ind=index;\" >\n<td  width=\"100%\" style=\"padding: 10px; background: #fff; width: 100%; \" >\n<table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\" >\n\n<tr bgcolor=\"#ffffff\" style=\"border-bottom: 1px solid #b6b5b5;\">                      \n<td border=\"0\" width=\"30%\" class=\"stack-column-center\">\n\t<table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n\t\t<tr>\n\t\t\t<td dir=\"ltr\" valign=\"top\" style=\"padding: 10px 20px;\"><a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img src=\"{{data.story.myImages}}\" width=\"150\" height=\"99\" alt=\"alt_text\" border=\"0\" class=\"center-on-narrow\" style=\"width: 100%; height: auto; background: #dddddd; border:1px grey solid;\"></a>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</td>\n\n <td width=\"70%\" class=\"stack-column-center\">\n\t<table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n\t\t<tr>\t\t\t\t\t\t\n\t\t\t<td dir=\"ltr\" valign=\"top\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 10px; text-align: left;\" class=\"center-on-narrow\">\n\t\t\t<a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\"margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 21px; color: #333333; font-weight: bold;\">{{data.story.headline}}</h2></a>\n\t\t\t<p style=\"margin: 0 10px 10px 0;\">{{data.story.subheadline}}</p></td>\n\t\t</tr>\n\t</table>\n</td>\n</tr>\n\n</table>\n</td>\n</tr>\n -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDateDateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "{{ myDate | date:'EEEE'}} {{ myDate | date:'dd'}} {{ myDate | date:'MMM'}} {{ myDate | date:'yyyy'}}\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n        <tr>\n\t\t\t<td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\" padding: 5px; margin: 0!important;\">\n                <table role=\"presentation\"  cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n                    <tr>\n                        <td class=\"stack-column-center\" style=\"padding-bottom:10px;\">\n                        <app-people></app-people>\n                        </td>\n\n                        <td class=\"stack-column-center\" style=\"padding-bottom:10px;\">\n                        <app-showcase></app-showcase>\t\t\t\t\n                        </td> \n                    </tr>\n                </table>\n            </td>\n        </tr>\n\n       <!--  <tr>\n            <td class=\"stack-column-center\" style=\"background-color:#212741; padding: 5px;\">\n               <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\">\n                    <tr>\n                        <td>\n                            <p style=\"margin: 5px ; font-size: 18px; line-height: 20px;  color: #fff;  text-align: center;\">Subscribe to our Telegram channel for latest news updates </p>\n                        </td>\n                        <td>\n                            <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_telegram:{{currentDate | date:'yyyy-MM-dd'}}&u=https://t.me/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/tt.png\" class=\"center-on-narrow\" style=\"width: 60px; padding-right:5px;\" /></a>\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr> -->\n\n        <tr>\n            <td width=\"100%\" height=\"20\" style=\"font-size: 13px; line-height: 15px; background-color: #000; text-align: center;\" >\n            <p style=\"margin: 5px ; color: #fff;\">Please add afaqs! newsletter to your Address Book so this newsletter doesn't get filtered into your bulk folder.</p>\n\t\t\t</td>\n        </tr>\n\n        <tr>\n            <td width=\"100%\" height=\"auto\" style=\"font-size: 13px; line-height: 15px; background-color: #ffffff; \" >\n          \t<p width=\"100%\" height=\"auto\"  style=\"margin: 5px ; color: #000; text-align:center;\"><a href=\"https://www.afaqs.com/labs/main/mailer-help.html\" style=\"text-decoration:none;\">click here </a>to know how to add our e-newsletters to your safe sender list<br />\n\t\t\tIf you can't see the mailer, please <a href=\"http://images1.afaqsnewsletter.com/mailers/daily/{{currentDate | date:'yyyy/MM/dd'}}/index.html\" target=\"_blank\" style=\"text-decoration:none;\">click here</a><br />\n\t\t\tIf you do not wish to receive any such special mailers, <a href=\"http://www.jobswitch.in/application/views/employer/afaqs-register/unsubsc-news.php?crypt_password=<%[crypt_password]%>\" target=\"_blank\" style=\"text-decoration:none;\">click here </a>\n\t\t\t</p>\t\n\t\t\t</td> \n        </tr>\n        <tr>\n            <td style=\"border-bottom: 2px grey solid;\">\n                <img src=\"http://images1.afaqsnewsletter.com/cgi-bin/counter/m_count?emailID=<%[email]%>&amp;mailerID=daily_{{currentDate | date:'yyyy-MM-dd'}}\" alt=\"\" width=\"1\" height=\"1\" />\n            </td>\n        </tr>\n            \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " <tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of fNewsData | slice:0:1; let ind=index;\">\n\t<td>\n\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n\t\t\t\t<tr>\t\t\t\n\t\t\t\t\t<td bgcolor=\"#ffffff\" align=\"center\" style=\"padding: 10px; \">\n\t\t\t\t\t\t<a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=600&h=360&dpr=1&mode=fill&fill=solid&fill-color=ffffff'\" width=\"600\" height=\"340\" alt=\"alt_text\" border=\"0\" align=\"center\" style=\"width: 100%; max-width: 620px; height: auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; margin: auto; border:1px #dddddd solid;\" class=\"g-img\"></a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"#ffffff\" style=\"padding: 10px 20px ; text-align: left;\">\n\t\t\t\t\t\t<a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h1 style=\"margin: 0; font-family: sans-serif; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;\">{{data.story.headline}}</h1></a>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t \t\t<td bgcolor=\"#ffffff\" style=\"padding: 0 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: left;\">\n\t\t\t\t\t\t<p style=\"margin: 0;\">{{data.story.subheadline}}</p>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td bgcolor=\"#ffffff\" style=\"padding-top:10px;\">\n\t\t\t\t\t\t<hr width=\"95%\" size=\"1\" noshade=\"noshade\" color=\"#b6b5b5\" >\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t</table>\n\t</td>\n</tr>\n\n<!-- <tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of fNewsData | slice:0:1; let ind=index;\">\n    <td>\n        <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\" margin: auto;\" class=\"email-container\">\n            <tr>\n                <td align=\"center\" valign=\"top\" style=\"padding-top: 10px; \"><a href=\"https://www.vdonxt.com/?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/email/vdo-17-jan.gif\" alt=\"alt_text\" align=\"center\" style=\"width: 98%; max-width:468px; height: auto; background: #dddddd; color: #555555; margin: auto; border:0px grey solid;\"></a>\n                </td>\n            </tr>\n            <tr>\n                <td bgcolor=\"#ffffff\" style=\"padding-top:10px;\">\n                    <hr width=\"95%\" size=\"1\" noshade=\"noshade\" color=\"#b6b5b5\" >\n                </td>\n            </tr>\n        </table>\n    </td>\n</tr> -->\n\n <tr bgcolor=\"#ffffff\" dir=\"ltr\" align=\"center\" valign=\"top\" *ngFor=\"let data of fNewsData | slice:1:7; let ind=index;\">\n    <td width=\"100%\" style=\"padding: 10px; background: #fff; width: 100%; \">\n        <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n\n            <tr bgcolor=\"#ffffff\" style=\"border-radius: 10px; border-bottom: 1px solid #b6b5b5;\">\n                <td border=\"0\" width=\"30%\" class=\"stack-column-center\">\n                    <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                        <tr>\n                            <td dir=\"ltr\" valign=\"top\" style=\"padding: 2px 2px 20px;\">\n                                <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=200&h=112&format=jpg&dpr=1&mode=fill&fill=solid&fill-color=585858'\" width=\"180\" alt=\"alt_text\" border=\"0\" class=\"center-on-narrow\" style=\"width: 100%; height: auto; background: #dddddd; border:1px #dddddd solid;\"></a>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n\n                <td width=\"70%\" class=\"stack-column-center\">\n                    <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"100%\">\n                        <tr>\n                            <td dir=\"ltr\" valign=\"top\" style=\"font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; padding: 5px 10px 5px ; text-align: left;\" class=\"center-on-narrow\">\n                                <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\"margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 21px; color: #333333; font-weight: bold;\">{{data.story.headline}}</h2></a>\n                                <p style=\"margin: 0 0 10px 0;\">{{data.story.subheadline}}</p>\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </table>\n    </td>\n</tr> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPeoplePeopleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n<tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of peopleNewsData | slice:0:1; let ind=index;\">\n<td>\n<table role=\"presentation\" cellspacing=\"0\"  width=\"300\" cellpadding=\"0\" border=\"0\" style=\"padding: 5px; text-align: left; border:0px red solid; border-radius: 15px; background: #e1a21c; \">\n    <tr>\n        <td style=\" text-align: center; padding: 5px 0 5px 0;\">\n          <h2 style=\"margin:5px; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #004185; font-weight: bold; text-transform: uppercase;\">People Spotting</h2>\n        </td>\n    </tr>\n\n\t <tr>\n        <td border=\"0\" style=\"padding: 5px 0 0 0; text-align: center; background-color:#ebeefd;\">\n          <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-people-spotting-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=300&h=200&format=jpg&dpr=2&mode=fill&fill=solid&fill-color=ebeefd'\" width=\"280\" alt=\"alt_text\" border=\"0\" class=\"fluid center-on-narrow\" style=\" background: #dddddd; border:1px #ebeefd solid;\"></a>\n        </td>\n    </tr>\n\t\n\t<tr>\n\t\t  <td valign=\"top\" style=\"padding:0 10px 10px 10px; text-align: left; background-color:#ebeefd;\">\n          <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-people-spotting-{{currentDate | date:'yyyy-MM-dd'}}\" width=\"280\" target=\"_blank\" style=\"text-decoration:none;\"><br />\n          \t<h3 style=\"margin: 0; font-family: sans-serif; font-size: 14px; line-height: 18px; color: #333333; font-weight: bold;\">{{data.story.headline}}</h3>\n          </a>\n\t\t</td>\n\t</tr>\n\n    <tr>\n\t<td style=\"padding:1px;\">\n\t<h2 style=\"margin:  0; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #333333; text-align: center;font-weight: bold;\"><a href=\"https://www.afaqs.com/people-spotting/\" target=\"_blank\" style=\"text-decoration:none;\">See all</a>\n    </h2>\n\t</td>                                   \n    </tr>\n</table>\n</td>\n</tr> \n</table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/showcase.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/showcase.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowcaseShowcaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n    <tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of showcaseNewsData | slice:0:1; let ind=index;\">\n    <td>\n    <table role=\"presentation\" cellspacing=\"0\"  width=\"300\" cellpadding=\"0\" border=\"0\" style=\"padding: 5px; text-align: left; border:0px red solid; border-radius: 15px; background: #e1a21c; \">\n        <tr>\n            <td style=\" text-align: center; padding: 5px 0 5px 0;\">\n              <h2 style=\"margin:5px; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #004185; font-weight: bold; text-transform: uppercase;\">CREATIVE SHOWCASE</h2>\n            </td>\n        </tr>\n    \n         <tr>\n            <td border=\"0\" style=\"padding: 5px 0 0 0; text-align: center; background-color:#ebeefd;\">\n              <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-creative-showcase-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=300&h=200&format=jpg&dpr=2&mode=fill&fill=solid&fill-color=ebeefd'\" width=\"280\" alt=\"alt_text\" border=\"0\" class=\"fluid center-on-narrow\" style=\" background: #dddddd; border:1px #ebeefd solid;\"></a>\n            </td>\n        </tr>\n        \n        <tr>\n              <td valign=\"top\" style=\"padding: 10px ; text-align: left; background-color:#ebeefd;\">\n              <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-people-spotting-{{currentDate | date:'yyyy-MM-dd'}}\" width=\"280\" target=\"_blank\" style=\"text-decoration:none;\">\n                <h3 style=\"margin: 0; font-family: sans-serif; font-size: 14px; line-height: 16px; color: #333333; font-weight: bold;\">{{data.story.headline}}</h3>\n                <br />\n                <h3 style=\"margin: 0; font-family: sans-serif; font-size: 14px; line-height: 16px; color: #333333; font-weight: bold;\"><span style=\"color:steelblue;\"><i>Brand: </i></span>{{data.story.metadata['story-attributes'].csbrand}}</h3>\n              </a>\n            </td>\n        </tr>\n \n        <tr>\n        <td style=\"padding:1px;\">\n        <h2 style=\"margin:  0; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #333333; text-align: center;font-weight: bold;\"><a href=\"https://www.afaqs.com/creative-showcase\" target=\"_blank\" style=\"text-decoration:none;\">See all</a>\n        </h2>\n        </td>                                   \n        </tr>\n    </table>\n    </td>\n    </tr> \n    </table>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/top/top.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top/top.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopTopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n    <tr>\n            <td style=\"border-bottom: 2px grey solid;\"></td> \n    </tr>\n           <!--  <tr>\n                <td style=\"background-color:#ffffff; padding:5px;\" >\n                    <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" >\n                        <tr>\n                            <td valign=\"top\" style=\"padding: 0 0 0 2px; float:right;\">\n                                <a href=\"https://www.afaqs.com/labs/discovery-kids/index.html?utm_source=mailer&utm_medium=mailer&utm_campaign=mailer-discovery-banner\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/2020/06/discovery_600x70.gif\" alt=\"alt_text\" border=\"0\" align=\"right\" style=\"width: 100%; height:auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; margin: auto; border:1px grey solid;\" ></a>\n                           </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr> -->\n\n\t       <tr> \n                <td width=\"100%\" height=\"25\" style=\"font-size: 12px; padding-top:5px; line-height: 16px; background-color:#212741; text-align: right;\">\n                <table role=\"presentation\" class=\"email-container\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"640\" style=\"margin: auto; background-color:#212741;\">\n                    <tr>\n                        <td>\n                            <table cellpadding=\"3\" border=\"0\" width=\"640\" align=\"right\" style=\"width:100%; background-color:#212741; max-width:330px; padding:5px; \">\n                                <tr>\n                                <td width=\"120\" style=\"font-family: sans-serif; font-size: 15px; color:#ffffff; padding:5px; width:100%;\">Follow on us:</td>\n\n                                    <td align=\"right\" width=\"50\">\n                                        <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_twitter:{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.instagram.com/afaqsdotcom/\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/insta.png\"/></a>\n                                    </td>\n\n                                    <td align=\"right\" width=\"50\">\n                                        <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_twitter:{{currentDate | date:'yyyy-MM-dd'}}&u=https://twitter.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/t.png\"/></a>\n                                    </td>\n\n                                    <td align=\"right\" width=\"50\">\n                                        <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_facebook:{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.facebook.com/afaqs\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/f.png\"/></a>\n                                    </td>\n\n                                    <td align=\"right\" width=\"50\">\n                                        <a href=\"http://images1.afaqsnewsletter.com/cgi-bin/re.html?c=daily_linkedin:{{currentDate | date:'yyyy-MM-dd'}}&u=https://www.linkedin.com/company/banyan-netfaqs-pvt-ltd--afaqs--/\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/breaking/in.png\"/></a>\n                                    </td>\n                                </tr>\n                            </table>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td align=\"left\" style=\"padding: 2px; font-family: sans-serif; background-color:#212741; font-size: 15px; color: #fff; text-align: left; \">\n                        \t\t<app-date></app-date>\n                        </td>\n                    </tr>\n                </table>\n                </td>\n            </tr>\n\n\n        <tr>\n        <td width=\"100%\" style=\"font-size: 12px; line-height: 16px; background-color:#212741; text-align: right;\">\n        \n\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" align=\"center\" width=\"650\" style=\"margin: auto;\" class=\"email-container\">\n\t\n           <!--  <tr>\n                <td style=\"background-color:#ffffff; padding:5px;\" >\n                    <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" >\n                        <tr>\n                            <td valign=\"top\" style=\"padding: 0 0 0 2px; float:right;\">\n                                <a href=\"https://www.afaqs.com/labs/discovery-kids/index.html?utm_source=mailer&utm_medium=mailer&utm_campaign=mailer-discovery-banner\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/newsletter/2020/06/discovery_600x70.gif\" alt=\"alt_text\" border=\"0\" align=\"right\" style=\"width: 100%; height:auto; background: #dddddd; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555; margin: auto; border:1px grey solid;\" ></a>\n                           </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr> -->\n            \n\t<tr>\n\t<td bgcolor=\"#ffffff\" align=\"center\" valign=\"top\" style=\"padding: 7px;\">\n\t\t<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">\n\t\t\t<tr>\n\t\t\t\t\n\t\t\t\t <td width=\"25%\" >\n\t\t\t\t\t<table role=\"presentation\" align=\"left\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" >\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t   <td dir=\"ltr\" valign=\"top\" style=\"padding: 0 0 0 5px;\"><a href=\"https://www.afaqs.com/?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-afaqs-logo-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\"><img src=\"https://www.afaqs.com/labs/ads/afaqs_logo.jpg\" alt=\"alt_text\" border=\"0\" class=\"center-on-narrow\" style=\" width: 100%; height: auto; float:left; background: #dddddd; color: #555555;\"></a></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</td>\n\n\t\t\t</tr>\n\t\t</table>\n\t</td>\n</tr>\n</table>\n</td>\n</tr>\n</table>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'newsletter';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _myserv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./myserv.service */
    "./src/app/myserv.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_top_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./top/top.component */
    "./src/app/top/top.component.ts");
    /* harmony import */


    var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./bottom/bottom.component */
    "./src/app/bottom/bottom.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _people_people_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./people/people.component */
    "./src/app/people/people.component.ts");
    /* harmony import */


    var _people_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./people.service */
    "./src/app/people.service.ts");
    /* harmony import */


    var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./showcase/showcase.component */
    "./src/app/showcase/showcase.component.ts");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./showcase.service */
    "./src/app/showcase.service.ts");
    /* harmony import */


    var _date_date_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./date/date.component */
    "./src/app/date/date.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _top_top_component__WEBPACK_IMPORTED_MODULE_7__["TopComponent"], _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_8__["BottomComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _people_people_component__WEBPACK_IMPORTED_MODULE_11__["PeopleComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_13__["ShowcaseComponent"], _date_date_component__WEBPACK_IMPORTED_MODULE_15__["DateComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      providers: [_myserv_service__WEBPACK_IMPORTED_MODULE_4__["MyservService"], _people_service__WEBPACK_IMPORTED_MODULE_12__["PeopleService"], _showcase_service__WEBPACK_IMPORTED_MODULE_14__["ShowcaseService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/bottom/bottom.component.css":
  /*!*********************************************!*\
    !*** ./src/app/bottom/bottom.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppBottomBottomComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbS9ib3R0b20uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/bottom/bottom.component.ts":
  /*!********************************************!*\
    !*** ./src/app/bottom/bottom.component.ts ***!
    \********************************************/

  /*! exports provided: BottomComponent */

  /***/
  function srcAppBottomBottomComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomComponent", function () {
      return BottomComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _myserv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../myserv.service */
    "./src/app/myserv.service.ts");

    var BottomComponent =
    /*#__PURE__*/
    function () {
      function BottomComponent(singh) {
        _classCallCheck(this, BottomComponent);

        this.singh = singh;
        this.currentDate = new Date();
      }

      _createClass(BottomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.singh.fetchLatestNews().subscribe(function (res) {
            // console.log(res);
            _this.fdata = res;
            _this.fNewsData = _this.fdata.items;
          });
        }
      }]);

      return BottomComponent;
    }();

    BottomComponent.ctorParameters = function () {
      return [{
        type: _myserv_service__WEBPACK_IMPORTED_MODULE_2__["MyservService"]
      }];
    };

    BottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bottom',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bottom.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bottom/bottom.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bottom.component.css */
      "./src/app/bottom/bottom.component.css")).default]
    })], BottomComponent);
    /***/
  },

  /***/
  "./src/app/date/date.component.css":
  /*!*****************************************!*\
    !*** ./src/app/date/date.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppDateDateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGUvZGF0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/date/date.component.ts":
  /*!****************************************!*\
    !*** ./src/app/date/date.component.ts ***!
    \****************************************/

  /*! exports provided: DateComponent */

  /***/
  function srcAppDateDateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateComponent", function () {
      return DateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DateComponent =
    /*#__PURE__*/
    function () {
      function DateComponent(datePipe) {
        _classCallCheck(this, DateComponent);

        this.datePipe = datePipe;
        this.myDate = new Date().toDateString();
        this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
      }

      _createClass(DateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DateComponent;
    }();

    DateComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
      }];
    };

    DateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-date',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./date.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/date/date.component.html")).default,
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./date.component.css */
      "./src/app/date/date.component.css")).default]
    })], DateComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.currentDate = new Date();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _myserv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../myserv.service */
    "./src/app/myserv.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(singh) {
        _classCallCheck(this, HeaderComponent);

        this.singh = singh;
        this.currentDate = new Date();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.singh.fetchLatestNews().subscribe(function (res) {
            // console.log(res);
            _this2.fdata = res;
            _this2.fNewsData = _this2.fdata.items;
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _myserv_service__WEBPACK_IMPORTED_MODULE_2__["MyservService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/myserv.service.ts":
  /*!***********************************!*\
    !*** ./src/app/myserv.service.ts ***!
    \***********************************/

  /*! exports provided: MyservService */

  /***/
  function srcAppMyservServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyservService", function () {
      return MyservService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MyservService =
    /*#__PURE__*/
    function () {
      function MyservService(http) {
        _classCallCheck(this, MyservService);

        this.http = http;
      }

      _createClass(MyservService, [{
        key: "fetchLatestNews",
        value: function fetchLatestNews() {
          var url = 'https://www.afaqs.com/api/v1/collections/top-story';
          return this.http.get(url);
        }
      }]);

      return MyservService;
    }();

    MyservService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MyservService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MyservService);
    /***/
  },

  /***/
  "./src/app/people.service.ts":
  /*!***********************************!*\
    !*** ./src/app/people.service.ts ***!
    \***********************************/

  /*! exports provided: PeopleService */

  /***/
  function srcAppPeopleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleService", function () {
      return PeopleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PeopleService =
    /*#__PURE__*/
    function () {
      function PeopleService(http) {
        _classCallCheck(this, PeopleService);

        this.http = http;
      }

      _createClass(PeopleService, [{
        key: "fetchLatestNews",
        value: function fetchLatestNews() {
          var url = 'https://www.afaqs.com/api/v1/collections/people-spotting';
          return this.http.get(url);
        }
      }]);

      return PeopleService;
    }();

    PeopleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PeopleService);
    /***/
  },

  /***/
  "./src/app/people/people.component.css":
  /*!*********************************************!*\
    !*** ./src/app/people/people.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPeoplePeopleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/people/people.component.ts":
  /*!********************************************!*\
    !*** ./src/app/people/people.component.ts ***!
    \********************************************/

  /*! exports provided: PeopleComponent */

  /***/
  function srcAppPeoplePeopleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleComponent", function () {
      return PeopleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../people.service */
    "./src/app/people.service.ts");

    var PeopleComponent =
    /*#__PURE__*/
    function () {
      function PeopleComponent(singh) {
        _classCallCheck(this, PeopleComponent);

        this.singh = singh;
        this.currentDate = new Date();
      }

      _createClass(PeopleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.singh.fetchLatestNews().subscribe(function (res) {
            // console.log(res);
            _this3.peopledata = res;
            _this3.peopleNewsData = _this3.peopledata.items;
          });
        }
      }]);

      return PeopleComponent;
    }();

    PeopleComponent.ctorParameters = function () {
      return [{
        type: _people_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"]
      }];
    };

    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-people',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./people.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/people/people.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./people.component.css */
      "./src/app/people/people.component.css")).default]
    })], PeopleComponent);
    /***/
  },

  /***/
  "./src/app/showcase.service.ts":
  /*!*************************************!*\
    !*** ./src/app/showcase.service.ts ***!
    \*************************************/

  /*! exports provided: ShowcaseService */

  /***/
  function srcAppShowcaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseService", function () {
      return ShowcaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ShowcaseService =
    /*#__PURE__*/
    function () {
      function ShowcaseService(http) {
        _classCallCheck(this, ShowcaseService);

        this.http = http;
      }

      _createClass(ShowcaseService, [{
        key: "fetchLatestNews",
        value: function fetchLatestNews() {
          var url = 'https://www.afaqs.com/api/v1/collections/creative-showcase';
          return this.http.get(url);
        }
      }]);

      return ShowcaseService;
    }();

    ShowcaseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ShowcaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ShowcaseService);
    /***/
  },

  /***/
  "./src/app/showcase/showcase.component.css":
  /*!*************************************************!*\
    !*** ./src/app/showcase/showcase.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowcaseShowcaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* \r\n<table border=\"0\">\r\n<tr bgcolor=\"white\" width=\"650\" *ngFor = \"let data of showcaseNewsData | slice:0:1; let ind=index;\">\r\n<td>\r\n<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"border-radius: 15px;  background: #b2b2b4; padding: 5px;\">\r\n\t<tr>\r\n        <td style=\"padding: 10px; text-align: center; \">\r\n          <h2 style=\"margin:0; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #004185; font-weight: bold; text-transform: uppercase;\">CREATIVE SHOWCASE</h2>\r\n        </td>\r\n    </tr>\r\n\t\r\n    <tr>\r\n        <td style=\"padding: 10px 0 20px 0; text-align: center; background-color:#ebeefd;\"> \r\n            <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-creative-showcase-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none; color: #555555;\"><img [src]= \"'https://gumlet.assettype.com/' + data.story['hero-image-s3-key']+'?w=300&h=200&format=jpg&dpr=2&fill=solid&fill-color=ffffff'\" width=\"245\" height=\"173\"  alt=\"alt_text\" border=\"0\" class=\"fluid center-on-narrow\" style=\"height: auto; background: #dddddd; border:1px #dddddd solid;\"></a>\r\n        </td>\r\n    </tr>\r\n\r\n    <tr>\r\n        <td style=\" padding: 10px; background-color:#ebeefd;\" class=\"center-on-narrow\">\r\n           <table role=\"presentation\" align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"250\">\r\n                <tr>\r\n                    <td dir=\"ltr\" valign=\"top\" style=\"font-family: sans-serif; font-size: 15px; line-height: 18px; color: #555555; padding:3px; text-align: left; border:0px red solid;\" class=\"center-on-narrow\">\r\n                        <a href=\"{{data.story.url}}?utm_source=mailer&utm_medium=mailer&utm_campaign=newsletter-creative-showcase-{{currentDate | date:'yyyy-MM-dd'}}\" target=\"_blank\" style=\"text-decoration:none;\"><h2 style=\"margin:  0; font-family: sans-serif; font-size: 15px; line-height: 18px; color: #333333; \">{{data.story.headline}}</h2>\r\n                        </a>\r\n                  </td>\r\n                </tr>\r\n            </table>\r\n        </td>\r\n    </tr>\r\n\r\n\t<tr>\r\n\t<td colspan=\"2\" style=\"padding-top:3px;\">\r\n\t\t<h2 style=\"margin:  0; font-family: sans-serif; font-size: 16px; line-height: 20px; color: #333333;text-align: center; font-weight: bold;\"><a href=\"https://www.afaqs.com/creative-showcase\" target=\"_blank\" style=\"text-decoration:none;\">See all</a>\r\n        </h2>\r\n\t</td>                                   \r\n    </tr>\r\n</table>\r\n</td>\r\n</tr> \r\n</table> */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBdUNVIiwiZmlsZSI6InNyYy9hcHAvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG48dGFibGUgYm9yZGVyPVwiMFwiPlxyXG48dHIgYmdjb2xvcj1cIndoaXRlXCIgd2lkdGg9XCI2NTBcIiAqbmdGb3IgPSBcImxldCBkYXRhIG9mIHNob3djYXNlTmV3c0RhdGEgfCBzbGljZTowOjE7IGxldCBpbmQ9aW5kZXg7XCI+XHJcbjx0ZD5cclxuPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBib3JkZXI9XCIwXCIgc3R5bGU9XCJib3JkZXItcmFkaXVzOiAxNXB4OyAgYmFja2dyb3VuZDogI2IyYjJiNDsgcGFkZGluZzogNXB4O1wiPlxyXG5cdDx0cj5cclxuICAgICAgICA8dGQgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7IFwiPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPVwibWFyZ2luOjA7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAyMHB4OyBjb2xvcjogIzAwNDE4NTsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XCI+Q1JFQVRJVkUgU0hPV0NBU0U8L2gyPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG5cdFxyXG4gICAgPHRyPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cInBhZGRpbmc6IDEwcHggMCAyMHB4IDA7IHRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjojZWJlZWZkO1wiPiBcclxuICAgICAgICAgICAgPGEgaHJlZj1cInt7ZGF0YS5zdG9yeS51cmx9fT91dG1fc291cmNlPW1haWxlciZ1dG1fbWVkaXVtPW1haWxlciZ1dG1fY2FtcGFpZ249bmV3c2xldHRlci1jcmVhdGl2ZS1zaG93Y2FzZS17e2N1cnJlbnREYXRlIHwgZGF0ZToneXl5eS1NTS1kZCd9fVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmU7IGNvbG9yOiAjNTU1NTU1O1wiPjxpbWcgW3NyY109IFwiJ2h0dHBzOi8vZ3VtbGV0LmFzc2V0dHlwZS5jb20vJyArIGRhdGEuc3RvcnlbJ2hlcm8taW1hZ2UtczMta2V5J10rJz93PTMwMCZoPTIwMCZmb3JtYXQ9anBnJmRwcj0yJmZpbGw9c29saWQmZmlsbC1jb2xvcj1mZmZmZmYnXCIgd2lkdGg9XCIyNDVcIiBoZWlnaHQ9XCIxNzNcIiAgYWx0PVwiYWx0X3RleHRcIiBib3JkZXI9XCIwXCIgY2xhc3M9XCJmbHVpZCBjZW50ZXItb24tbmFycm93XCIgc3R5bGU9XCJoZWlnaHQ6IGF1dG87IGJhY2tncm91bmQ6ICNkZGRkZGQ7IGJvcmRlcjoxcHggI2RkZGRkZCBzb2xpZDtcIj48L2E+XHJcbiAgICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcblxyXG4gICAgPHRyPlxyXG4gICAgICAgIDx0ZCBzdHlsZT1cIiBwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiNlYmVlZmQ7XCIgY2xhc3M9XCJjZW50ZXItb24tbmFycm93XCI+XHJcbiAgICAgICAgICAgPHRhYmxlIHJvbGU9XCJwcmVzZW50YXRpb25cIiBhbGlnbj1cImNlbnRlclwiIGJvcmRlcj1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIiB3aWR0aD1cIjI1MFwiPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBkaXI9XCJsdHJcIiB2YWxpZ249XCJ0b3BcIiBzdHlsZT1cImZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBmb250LXNpemU6IDE1cHg7IGxpbmUtaGVpZ2h0OiAxOHB4OyBjb2xvcjogIzU1NTU1NTsgcGFkZGluZzozcHg7IHRleHQtYWxpZ246IGxlZnQ7IGJvcmRlcjowcHggcmVkIHNvbGlkO1wiIGNsYXNzPVwiY2VudGVyLW9uLW5hcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwie3tkYXRhLnN0b3J5LnVybH19P3V0bV9zb3VyY2U9bWFpbGVyJnV0bV9tZWRpdW09bWFpbGVyJnV0bV9jYW1wYWlnbj1uZXdzbGV0dGVyLWNyZWF0aXZlLXNob3djYXNlLXt7Y3VycmVudERhdGUgfCBkYXRlOid5eXl5LU1NLWRkJ319XCIgdGFyZ2V0PVwiX2JsYW5rXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZTtcIj48aDIgc3R5bGU9XCJtYXJnaW46ICAwOyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxNXB4OyBsaW5lLWhlaWdodDogMThweDsgY29sb3I6ICMzMzMzMzM7IFwiPnt7ZGF0YS5zdG9yeS5oZWFkbGluZX19PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuXHJcblx0PHRyPlxyXG5cdDx0ZCBjb2xzcGFuPVwiMlwiIHN0eWxlPVwicGFkZGluZy10b3A6M3B4O1wiPlxyXG5cdFx0PGgyIHN0eWxlPVwibWFyZ2luOiAgMDsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTZweDsgbGluZS1oZWlnaHQ6IDIwcHg7IGNvbG9yOiAjMzMzMzMzO3RleHQtYWxpZ246IGNlbnRlcjsgZm9udC13ZWlnaHQ6IGJvbGQ7XCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmFmYXFzLmNvbS9jcmVhdGl2ZS1zaG93Y2FzZVwiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmU7XCI+U2VlIGFsbDwvYT5cclxuICAgICAgICA8L2gyPlxyXG5cdDwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgIDwvdHI+XHJcbjwvdGFibGU+XHJcbjwvdGQ+XHJcbjwvdHI+IFxyXG48L3RhYmxlPiAqL1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/showcase/showcase.component.ts":
  /*!************************************************!*\
    !*** ./src/app/showcase/showcase.component.ts ***!
    \************************************************/

  /*! exports provided: ShowcaseComponent */

  /***/
  function srcAppShowcaseShowcaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function () {
      return ShowcaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _showcase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../showcase.service */
    "./src/app/showcase.service.ts");

    var ShowcaseComponent =
    /*#__PURE__*/
    function () {
      function ShowcaseComponent(singh) {
        _classCallCheck(this, ShowcaseComponent);

        this.singh = singh;
        this.currentDate = new Date();
      }

      _createClass(ShowcaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.singh.fetchLatestNews().subscribe(function (res) {
            // console.log(res);
            _this4.showcasedata = res;
            _this4.showcaseNewsData = _this4.showcasedata.items;
          });
        }
      }]);

      return ShowcaseComponent;
    }();

    ShowcaseComponent.ctorParameters = function () {
      return [{
        type: _showcase_service__WEBPACK_IMPORTED_MODULE_2__["ShowcaseService"]
      }];
    };

    ShowcaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-showcase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./showcase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/showcase/showcase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./showcase.component.css */
      "./src/app/showcase/showcase.component.css")).default]
    })], ShowcaseComponent);
    /***/
  },

  /***/
  "./src/app/top/top.component.css":
  /*!***************************************!*\
    !*** ./src/app/top/top.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopTopComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC90b3AuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/top/top.component.ts":
  /*!**************************************!*\
    !*** ./src/app/top/top.component.ts ***!
    \**************************************/

  /*! exports provided: TopComponent */

  /***/
  function srcAppTopTopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopComponent", function () {
      return TopComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TopComponent =
    /*#__PURE__*/
    function () {
      function TopComponent() {
        _classCallCheck(this, TopComponent);

        this.currentDate = new Date();
      }

      _createClass(TopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopComponent;
    }();

    TopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/top/top.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top.component.css */
      "./src/app/top/top.component.css")).default]
    })], TopComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\Mean\Angular\newsletter-testing\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
