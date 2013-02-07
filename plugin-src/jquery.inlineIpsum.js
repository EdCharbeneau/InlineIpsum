/// <reference path="../javascripts/lorem.js" />
; (function ($, window, document, undefined) {
    'use strict';

    var IpsumWriter = {

        _cache: "",

        _addCache: function (item) {
            this._cache += item[0].outerHTML;
        },

        _words: function (count) {
            var lorem = new Lorem();
            return lorem.createText(count, Lorem.TYPE.WORD)
        },

        _sentences: function (count) {
            var lorem = new Lorem();
            return lorem.createText(count, Lorem.TYPE.SENTENCE)
        },
        _paragraphs: function (count) {
            var lorem = new Lorem();
            return lorem.createText(count, Lorem.TYPE.PARAGRAPH)
        },

        _tagBuilder: function (tag, text, attributes) {
            attributes = $.extend({}, { text: text }, attributes);
            return $(tag, attributes);
        },

        p: function (paragraphCount, sentenceCount, attributes) {
            paragraphCount = paragraphCount || 1;
            sentenceCount = sentenceCount || 5;
            var tag = "<p></p>";
            for (var i = 0; i < paragraphCount; i++) {
                this._addCache(this._tagBuilder(tag, this._sentences(sentenceCount), attributes));
            }
            return this;
        },
        _image: function (width, height, text, bgColor, fgColor, attributes) {
            height = height || width;
            bgColor = bgColor || "eee";
            var dim = width + "x" + height + "/";
            fgColor = (typeof fgColor != 'undefined') ? fgColor + "/" : "";
            bgColor = (typeof fgColor != 'undefined') ? bgColor + "/" : ""; //if fgColor is undefined, ignore the bg color because it wasn't set either
            text = (typeof text != 'undefined') ? "&text=" + text : "";
            var tag = "<image/>";
            var imgUrl = "http://placehold.it/" + dim + fgColor + bgColor + text
            attributes = $.extend({}, { "src": imgUrl }, attributes)
            return this._tagBuilder(tag, "", attributes)
        },
        image: function (width, height, text, bgColor, fgColor, attributes) {
            this._addCache(this._image(width, height, text, bgColor, fgColor, attributes));
            return this;
        },

        _h: function (level, wordCount, attributes) {
            wordCount = wordCount || 2;
            var tag = "<h" + level + "></h" + level + ">";
            this._addCache(this._tagBuilder(tag, this._words(wordCount), attributes));
            return this;
        },

        _listItem: function (tag, wordCount, hasLink, attributes) {
            wordCount = wordCount || 2;
            var lorem = new Lorem();
            hasLink = hasLink || false;
            var li = this._tagBuilder(tag, this._words(wordCount), attributes);
            if (hasLink) {
                li.wrapInner("<a href='#'></a>");
            }
            return li;
        },

        _list: function (outerTag, innerTag, count, wordCount, hasLinks, outerAttributes, innerAttributes) {
            wordCount = wordCount || 2;
            count = count || 5;
            var outerElem = this._tagBuilder(outerTag, "", outerAttributes);
            for (var i = 0; i < count; i++) {
                outerElem.append(this._listItem(innerTag, wordCount, hasLinks, innerAttributes));
            }
            this._addCache(outerElem);
        },
        write: function () {
            return this._cache;
        },

        //helper methods
        words: function (count) {
            this._cache += (this._words(count));
            return this;
        },

        sentences: function (count) {
            this._cache += (this._sentences(count));
            return this;
        },
        paragraphs: function (count) {
            this._cache += (this._paragraphs(count));
            return this;
        },
        dl: function (listCount, wordCount, hasLinks, olAttributes, liAttributes) {
            this._list("<dl></dl>", "<dd></dd>", listCount, wordCount, hasLinks, olAttributes, liAttributes);
            return this;
        },

        ol: function (listCount, wordCount, hasLinks, olAttributes, liAttributes) {
            this._list("<ol></ol>", "<li></li>", listCount, wordCount, hasLinks, olAttributes, liAttributes);
            return this;
        },

        ul: function (listCount, wordCount, hasLinks, ulAttributes, liAttributes) {
            this._list("<ul></ul>", "<li></li>", listCount, wordCount, hasLinks, ulAttributes, liAttributes);
            return this;
        },

        h1: function (wordCount, attributes) {
            this._h(1, wordCount, attributes);
            return this;
        },

        h2: function (wordCount, attributes) {
            this._h(2, wordCount, attributes);
            return this;
        },

        h3: function (wordCount, attributes) {
            this._h(3, wordCount, attributes);
            return this;
        },

        h4: function (wordCount, attributes) {
            this._h(4, wordCount, attributes);
            return this;
        },

        h5: function (wordCount, attributes) {
            this._h(5, wordCount, attributes);
            return this;
        },

        h6: function (wordCount, attributes) {
            this._h(6, wordCount, attributes);
            return this;
        },
        blogPost: function () {
            this.h1(3).p(2, 25).h2().p(3, 15).h3(2).p();
            return this;
        }
    };

    var Ipsum;
    var settings;
    var inline = function (str) {
        Ipsum = Object.create(settings.extension);
        var result;
        var command = str.replace(settings.token + settings.locator + ".", "").concat(".write()");
        try {
            result = eval(command);
        } catch (e) {
            result = $("<em></em>", { text: "Go home Ipsum you're drunk", style: "color: transparent;text-shadow: 0px 0px 2px #FF33FF;", title: e.message })[0].outerHTML;
        }

        return result;
    };

    $.fn.inlineIpsum = function (options) {
        //main
        if (typeof options != 'undefined') {
            if (typeof options.extension != 'undefined') {
                options.extension = $.extend({}, $.fn.inlineIpsum.options.extension, options.extension);
            }
        }
        settings = $.extend({}, $.fn.inlineIpsum.options, options);

        return this.replaceText(new RegExp(settings.token + settings.locator + ".Ipsum(\\..*?\\))*", "gi"), inline);

    };

    $.fn.inlineIpsum.options = {
        extension: IpsumWriter,
        locator: "Html",
        token: "@"
    };

})(jQuery, window, document);