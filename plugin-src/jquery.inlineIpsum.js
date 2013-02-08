/*
* jQuery inlineIpsum
*
* Copyright 2013, Ed Charbeneau (http://about.me/edcharbeneau)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* https://github.com/EdCharbeneau/InlineIpsum
*
* Depends:
* lorem.js
* jquery.ba-replacetext.js
* Note: These files are bundeled with the minified version of inlineIpsum (jquery.inlineIpsum.js)
*/

/// For Visual Studio Devs
/// <reference path="../javascripts/loremjs-master/lorem.js" />
/// <reference path="../javascripts/jquery-replacetext-master/jquery.ba-replacetext.js" />

; (function ($, window, document, undefined) {
    'use strict';

    /*
    * This object will be called by the inliner
    * All functions that are intended to be called by the user via @Html.Ipsum.<functions> shall return itself to extend the Fluent API chain.
    * If the function does not intend to be called by the user, it shall be prefixed with an underscore. 
    */
    var IpsumWriter = {

        //Init the Lorem object
        _lorem: new Lorem(),

        //Hold the string that will be written to the document
        _buffer: "", //start with an empty buffer

        //Append a value to the buffer
        //Item can be typeof string or jQuery object
        _addBuffer: function (item) {
            this._buffer += (typeof item === "string") ? item : item[0].outerHTML;
        },

        //Returns loremIpsum words
        //Simplifies the call to Lorem createText
        _getWords: function (count) {
            return this._lorem.createText(count, Lorem.TYPE.WORD)
        },

        //Returns loremIpsum sentences
        //Simplifies the call to Lorem createText
        _getSentences: function (count) {
            return this._lorem.createText(count, Lorem.TYPE.SENTENCE)
        },

        //Returns loremIpsum paragraphs
        //Simplifies the call to Lorem createText
        _getParagraphs: function (count) {
            return this._lorem.createText(count, Lorem.TYPE.PARAGRAPH)
        },

        //Creates an HTML element
        //Returns a jQuery object
        _tagBuilder: function (tag, text, attributes) {
            attributes = $.extend({}, { text: text }, attributes);
            return $(tag, attributes);
        },

        //Buffers a paragraph(s) element(s) of lorem ipsum
        p: function (paragraphCount, sentenceCount, attributes) {
            paragraphCount = paragraphCount || 1;
            sentenceCount = sentenceCount || 5;
            var tag = "<p></p>";
            for (var i = 0; i < paragraphCount; i++) {
                this._addBuffer(this._tagBuilder(tag, this._getSentences(sentenceCount), attributes));
            }
            return this;
        },

        //Returns an image element with a Url to http://placehold.it
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

        //Buffers a new image element
        image: function (width, height, text, bgColor, fgColor, attributes) {
            this._addBuffer(this._image(width, height, text, bgColor, fgColor, attributes));
            return this;
        },

        //Buffers a new H element of lorem ipsum
        _h: function (level, wordCount, attributes) {
            wordCount = wordCount || 2;
            var tag = "<h" + level + "></h" + level + ">";
            this._addBuffer(this._tagBuilder(tag, this._getWords(wordCount), attributes));
            return this; //this method may be chained internally
        },

        //Returns a new list item element of lorem ipsum
        _listItem: function (tag, wordCount, hasLink, attributes) {
            wordCount = wordCount || 2;
            var lorem = new Lorem();
            hasLink = hasLink || false;
            var li = this._tagBuilder(tag, this._getWords(wordCount), attributes);
            if (hasLink) {
                li.wrapInner("<a href='#'></a>");
            }
            return li;
        },

        //Buffers a new list element of lorem ipsum
        _list: function (outerTag, innerTag, count, wordCount, hasLinks, outerAttributes, innerAttributes) {
            wordCount = wordCount || 2;
            count = count || 5;
            var outerElem = this._tagBuilder(outerTag, "", outerAttributes);
            for (var i = 0; i < count; i++) {
                outerElem.append(this._listItem(innerTag, wordCount, hasLinks, innerAttributes));
            }
            this._addBuffer(outerElem);
        },

        //This method is called last
        //Writes the buffer (string) to the DOM
        write: function () {
            return this._buffer;
        },

        /*
        * Helper methods:
        * 1.) Generally call other methods within the object.
        * 2.) Shall write to the buffer
        * 3.) Shall return this to extend the Fluent API chain.
        */

        //Writes words directly to the buffer
        words: function (wordCount) {
            wordCount = wordCount || 2;
            this._addBuffer(this._getWords(wordCount));
            return this;
        },

        //Writes sentences directly to the buffer
        sentences: function (sentencesCount) {
            sentencesCount = sentencesCount || 5;
            this._addBuffer(this._getSentences(sentencesCount));
            return this;
        },

        //Writes paragraphs directly to the buffer
        paragraphs: function (count) {
            this._addBuffer(this._getParagraphs(count));
            return this;
        },

        //Buffers an <dl> with list items
        dl: function (listCount, wordCount, hasLinks, olAttributes, liAttributes) {
            this._list("<dl></dl>", "<dd></dd>", listCount, wordCount, hasLinks, olAttributes, liAttributes);
            return this;
        },

        //Buffers an <ol> with list items
        ol: function (listCount, wordCount, hasLinks, olAttributes, liAttributes) {
            this._list("<ol></ol>", "<li></li>", listCount, wordCount, hasLinks, olAttributes, liAttributes);
            return this;
        },

        //Buffers an <ul> with list items
        ul: function (listCount, wordCount, hasLinks, ulAttributes, liAttributes) {
            this._list("<ul></ul>", "<li></li>", listCount, wordCount, hasLinks, ulAttributes, liAttributes);
            return this;
        },

        //Buffers an <h(n)> 
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

        //Buffers a mock blog post 
        blogPost: function () {
            this.h1(3).p(2, 25).h2().p(3, 15).h3(2).p();
            return this;
        }
    };

    var Ipsum; //Ipsum, will be called by the inline function
    var settings; //Settings to be applied to the Ipsum object

    //Called from jquery.ba-replacetext.js
    //str is passed in from jquery.ba-replacetext.js
    //str is equal to the regex match, a 
    var inline = function (str) {
        Ipsum = Object.create(settings.extension); //init the ipsum object 

        /*
        * Create a JavaScript at runtime from the @Html.Ipsum<methods> found in the document
        * The token and locator are stripped (@Html.) from str
        * The str is appended with the .write() function
        * The command should result in a valid JavaScript function call to Ipsum.<functions>.write()
        */
        var command = str.replace(settings.token + settings.locator + ".", "").concat(".write()");
        var result; //the command results will be stored here

        //Execute the JavaScript command
        try {
            result = eval(command); //should return a string
        } catch (e) {
            //The command failed, clean up the mess
            result = $("<em></em>", { text: "Go home Ipsum you're drunk", style: "color: transparent;text-shadow: 0px 0px 2px #FF33FF;", title: e.message })[0].outerHTML;
        }

        return result; //return string
    };

    $.fn.inlineIpsum = function (options) {
        //main
        /*
        * Extensions:
        * 1.) Shall extend the functionality of the IpsumWriter
        * 2.) Extensions are applied by using the jQuery $.extend method
        * 3.) Extensions shall complete the fluent API chain and follow the same conventions as IpsumWriter
        * 4.) Extensions may call upon functions, helpers and the buffer of IpsumWriter 
        * 5.) Direct writes to the buffer should be used sparingly, instead use _addBuffer
        */
        //Extend an extension if it is defined in the options
        if (typeof options != 'undefined') {
            if (typeof options.extension != 'undefined') {
                options.extension = $.extend({}, $.fn.inlineIpsum.options.extension, options.extension);
            }
        }

        settings = $.extend({}, $.fn.inlineIpsum.options, options);

        //Call jquery.ba-replacetext.js
        //Regex matches anything including and after @Html.Ipsum which has a signature of .(*) [dot preceding anything enclosed by parens]
        //This should work for most cases, however I'm sure if you're creative enough you can break it.
        return this.replaceText(new RegExp(settings.token + settings.locator + ".Ipsum(\\..*?\\))*", "gi"), inline);

    };

    //Default options
    $.fn.inlineIpsum.options = {
        extension: IpsumWriter,
        locator: "Html",
        token: "@"
    };

})(jQuery, window, document);
