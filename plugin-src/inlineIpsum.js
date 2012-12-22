; (function ($, window, undefined) {
    'use strict';

    var IpsumWriter = function () {
        var Cache;

        this.p = function () {
            this.Cache = '<p>Lorem Ipsum</p>';
            return this;
        }

        this.write = function () {
            return this.Cache;
        }
    };

    $.fn.inlineIpsum = function () {
        //main
        var Ipsum = new IpsumWriter();
        var str = '@Html.Ipsum.p()';
        var command = str.replace('@Html.','').concat('.write()');
        console.log(command);
        var result = eval(command);
        alert(result);
    };

    $.fn.inlineIpsum.options = {};

})(jQuery, window, document);