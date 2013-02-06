/// <reference path="../javascripts/lorem.js" />
; (function ($, window, document, undefined) {
    'use strict';

    var IpsumWriter = {

        cache: "",

        addCache: function(item)
        {
            this.cache += item[0].outerHTML;
        },

        words: function(count)
        {
            var lorem = new Lorem();
            return lorem.createText(count, Lorem.TYPE.WORD)
        },

        sentences: function(count)
        {
            var lorem = new Lorem();
            return lorem.createText(count, Lorem.TYPE.SENTENCE)
        },
        paragraphs: function(count)
        {
            var lorem = new Lorem();
            return lorem.createText(count, Lorem.TYPE.PARAGRAPH)
        },

        tagBuilder: function (tag, text, attributes) {
            attributes = $.extend({}, { text: text }, attributes);
            return $(tag, attributes);
        },

        p: function (paragraphCount, sentenceCount, attributes) {
            paragraphCount = paragraphCount || 1;
            sentenceCount = sentenceCount || 5;
            var tag = "<p></p>";
            for (var i = 0; i < paragraphCount; i++) {
                this.addCache(this.tagBuilder(tag, this.sentences(sentenceCount), attributes));
            }
            return this;
        },

        h: function (level, wordCount, attributes) {
            wordCount = wordCount || 2;
            var tag = "<h" + level + "></h" + level + ">";
            this.addCache(this.tagBuilder(tag, this.words(wordCount), attributes));
            return this;
        },

        listItem: function (tag, wordCount, hasLink, attributes) {
            wordCount = wordCount || 2;
            var lorem = new Lorem();
            hasLink = hasLink || false;
            var li = this.tagBuilder(tag, this.words(wordCount), attributes);
            if (hasLink) {
                li.wrapInner("<a href='#'></a>");
            }
            return li;
        },

        list: function (outerTag, innerTag, count, wordCount, hasLinks, outerAttributes, innerAttributes) {
            wordCount = wordCount || 2;
            count = count || 5;
            var outerElem = this.tagBuilder(outerTag, "", outerAttributes);
            for (var i = 0; i < count; i++) {
                outerElem.append(this.listItem(innerTag, wordCount, hasLinks, innerAttributes));
            }
            this.addCache(outerElem);
        },
        write: function () {
            return this.cache;
        },

        //helper methods
        dl: function (listCount, wordCount, hasLinks, olAttributes, liAttributes) {
            this.list("<dl></dl>", "<dd></dd>", listCount, wordCount, hasLinks, olAttributes, liAttributes);
            return this;
        },

        ol: function (listCount, wordCount, hasLinks, olAttributes, liAttributes) {
            this.list("<ol></ol>", "<li></li>", listCount, wordCount, hasLinks, olAttributes, liAttributes);
            return this;
        },

        ul: function (listCount, wordCount, hasLinks, ulAttributes, liAttributes) {
            this.list("<ul></ul>", "<li></li>", listCount, wordCount, hasLinks, ulAttributes, liAttributes);
            return this;
        },

        h1: function (wordCount, attributes) {
            this.h(1, wordCount, attributes);
            return this;
        },

        h2: function (wordCount, attributes) {
            this.h(2, wordCount, attributes);
            return this;
        },

        h3: function (wordCount, attributes) {
            this.h(3, wordCount, attributes);
            return this;
        },

        h4: function (wordCount, attributes) {
            this.h(4, wordCount, attributes);
            return this;
        },

        h5: function (wordCount, attributes) {
            this.h(5, wordCount, attributes);
            return this;
        },

        h6: function (wordCount, attributes) {
            this.h(6, wordCount, attributes);
            return this;
        },
        blogPost: function () {
            this.h1(3).p(2, 25).h2().p(3, 15).h3(2).p();
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