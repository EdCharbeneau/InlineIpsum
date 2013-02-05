
; (function ($, window, document, undefined) {
    'use strict';

    var IpsumWriter = {

        cache: "",
        addCache: function(item)
        {
            this.cache += item[0].outerHTML;
        },
        tagBuilder: function (tag, text, attributes) {
            attributes = $.extend({}, { text: text }, attributes);
            return $(tag, attributes);
        },

        p: function (attributes) {
            var tag = "<p></p>";
            var text = "Lorem Ipsum";
            this.addCache(this.tagBuilder(tag, text, attributes));
            return this;
        },

        h: function (level, attributes) {
            var tag = "<h" + level + "></h" + level + ">";
            var text = "Lorem Ipsum";
            this.addCache(this.tagBuilder(tag, text, attributes));
            return this;
        },

        listItem: function (tag, hasLink, attributes) {
            var text = "Lorem Ipsum";
            hasLink = hasLink || false;
            var li = this.tagBuilder(tag, text, attributes);
            if (hasLink) {
                li.wrapInner("<a href='#'></a>");
            }
            return li;
        },

        list: function (outerTag, innerTag, count, hasLinks, outerAttributes, innerAttributes) {
            var count = count || 5;
            var outerElem = this.tagBuilder(outerTag, "", outerAttributes);
            for (var i = 0; i < count; i++) {
                outerElem.append(this.listItem(innerTag, hasLinks, innerAttributes));
            }
            this.addCache(outerElem);
        },
        write: function () {
            return this.cache;
        },

        //helper methods
        dl: function (count, hasLinks, olAttributes, liAttributes) {
            this.list("<dl></dl>", "<dd></dd>", count, hasLinks, olAttributes, liAttributes);
            return this;
        },

        ol: function (count, hasLinks, olAttributes, liAttributes) {
            this.list("<ol></ol>", "<li></li>", count, hasLinks, olAttributes, liAttributes);
            return this;
        },

        ul: function (count, hasLinks, ulAttributes, liAttributes) {
            this.list("<ul></ul>", "<li></li>", count, hasLinks, ulAttributes, liAttributes);
            return this;
        },

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