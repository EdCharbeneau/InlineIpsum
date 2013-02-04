//// Utility
//if (typeof Object.create !== 'function') {
//    Object.create = function (obj) {
//        function F() { };
//        F.prototype = obj;
//        return new F();
//    };
//}
; (function ($, window, document, undefined) {
    'use strict';

    var IpsumWriter = {
        cache: "",
        p: function () {
            this.cache += '<p>Lorem Ipsum</p>';
            return this;
        },

        h1: function () {
            var element =$("<h1></h1>", {
                text: "Lorem Ipsum"
            })[0].outerHTML;
            this.cache += element;
            return this;
        },

        write: function () {
            return this.cache;
        }
    };

    var justDoIt = function (str) {
        var Ipsum = Object.create(IpsumWriter);
        var command = str.replace('@Html.', '').concat('.write()');
        return eval(command);
    };

    $.fn.inlineIpsum = function () {
        //main
        var Ipsum = Object.create(IpsumWriter);
        //var str = '@Html.Ipsum.p().h()';        
        //var command = str.replace('@Html.','').concat('.write()');
        //console.log(eval(command));
        //var result = eval(command);
        return this.replaceText(/@Html.Ipsum()[^\s]+/gi, justDoIt);

    };

    $.fn.inlineIpsum.options = {};

})(jQuery, window, document);