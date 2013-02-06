//Foundation inlineIpsum Extension methods
//Proof of concept only
var foundationIpsum =
{

    _appendClass: function (attributes, cssClass) {
        //ensure that a css class exists
        attributes = $.extend({}, { "class": "" }, attributes);
        //append
        attributes.class = (attributes.class + " " + cssClass).trim();
        //give the object back
        return attributes;
    },

    breadcrumbs: function (listCount, wordCount, attributes) {
        attributes = this._appendClass(attributes, "breadcrumbs");
        this.ul(listCount, wordCount, true, attributes);
        return this;
    },
    pills: function (listCount, wordCount, attributes) {
        attributes = this._appendClass(attributes, "tabs pill");
        this.ul(listCount, wordCount, true, attributes);
        return this;
    },
    navbar: function (listCount, wordCount, attributes) {
        attributes = this._appendClass(attributes, "nav-bar");
        this.ul(listCount, wordCount, true, attributes);
        return this;
    },
    vnavbar: function (listCount, wordCount, attributes) {
        attributes = this._appendClass(attributes, "vertical");
        this.navbar(listCount, wordCount, attributes);
        return this;
    },
    inlineList: function (listCount, wordCount, attributes) {
        attributes = this._appendClass(attributes, "inline-list");
        this.ul(listCount, wordCount, true, attributes);
        return this;
    }
}