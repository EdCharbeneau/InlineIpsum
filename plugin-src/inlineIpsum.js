
; (function ($, window, document, undefined) {
    'use strict';

    var IpsumWriter = {
        cache: "",
        tagBuilder: function (tag, text, attributes) {
            attributes = $.extend({}, { text: text }, attributes);
            return $(tag, attributes)[0].outerHTML;
        },

        p: function (attributes) {
            var tag = "<p></p>";
            var text = "Lorem Ipsum";
            this.cache += this.tagBuilder(tag, text, attributes);
            return this;
        },

        h: function (level, attributes) {
            var tag = "<h" + level + "></h" + level + ">";
            var text = "Lorem Ipsum";
            this.cache += this.tagBuilder(tag, text, attributes);
            return this;
        },

        //helper methods
        h1: function (attributes) {
            this.h(1, attributes);
            return this;
        },
       
        h2: function (attributes) {
            this.h(2, attributes);
            return this;
        },

        h3: function (attributes) {
            this.h(3, attributes);
            return this;
        },

        h4: function (attributes) {
            this.h(4, attributes);
            return this;
        },

        h5: function (attributes) {
            this.h(5, attributes);
            return this;
        },

        h6: function (attributes) {
            this.h(6, attributes);
            return this;
        },
        write: function () {
            return this.cache;
        }
    };

    var inline = function (str) {
        var Ipsum = Object.create(IpsumWriter);
        var command = str.replace('@Html.', '').concat('.write()');
        return eval(command);
    };

    $.fn.inlineIpsum = function () {
        //main
        var Ipsum = Object.create(IpsumWriter);
        return this.replaceText(/@html.Ipsum(\..*?\))*/gi, inline);

    };

    $.fn.inlineIpsum.options = {};

})(jQuery, window, document);