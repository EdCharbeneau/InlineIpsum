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

        h: function () {
            this.cache += '<h1>Lorem Ipsum</h1>';
            return this;
        },

        write: function () {
            return this.cache;
        }
    };

    $.fn.inlineIpsum = function () {
        //main
        var Ipsum = Object.create(IpsumWriter);
        var str = '@Html.Ipsum.p().h()';
        var command = str.replace('@Html.','').concat('.write()');
        console.log(eval(command));
        var result = eval(command);
    };

    $.fn.inlineIpsum.options = {};

})(jQuery, window, document);