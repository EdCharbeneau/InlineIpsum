//Foundation inlineIpsum Extension methods
//Proof of concept only
var foundationIpsum =
{
    breadcrumbs: function (listCount, wordCount, attributes) {
        attributes = $.extend({}, { "class": "breadcrumbs" }, attributes);
        this.ul(listCount, wordCount, true, attributes);
        return this;
    },
    pills: function (listCount, wordCount, attributes) {
        attributes = $.extend({}, { "class": "tabs pill" }, attributes);
        this.ul(listCount, wordCount, true, attributes);
        return this;
    },
    vNav: function (listCount, wordCount, attributes) {
        attributes = $.extend({}, { "class": "nav-bar vertical" }, attributes);
        this.ul(listCount, wordCount, true, attributes);
        return this;
    },
    inlineList: function (listCount, wordCount, attributes) {
        attributes = $.extend({}, { "class": "inline-list" }, attributes);
        this.ul(listCount, wordCount, true, attributes);
        return this;
    }
}