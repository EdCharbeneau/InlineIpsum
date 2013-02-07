//Foundation inlineIpsum Extension methods
//Proof of concept only
var yetiIpsum =
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
    },
    orbit: function (id, width, height, imageCount) {
        var colors = ["4086AA","91C3DC","87907D","AAB6A2", "555555"] 
        var wrapper = $("<div></div>", { id: id });
        for (var i = 0; i < imageCount; i++) {
            //after 5 we'll use random colors, seriously who has this many slides in thier deck?
            wrapper.append(this._image(width, height, "[img]", i < 4 ? colors[i] : Math.floor(Math.random() * 16777215).toString(16)))
        }
        this._addCache(wrapper);
        return this;
    }
}