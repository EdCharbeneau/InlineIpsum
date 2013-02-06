//to add this extension 
//  Reference this script
//  <script src="h7.ipsumExtension.js"></script>
//  Add the extension to the inlineIpsum settings
//  $('body *').inlineIpsum({
//            extension: MyEngine,
//  });
//  The helper method @Html.Ipsum.h7() is now enabled in your markup
var MyEngine = {
        h7: function (wordCount, attributes) {
            this.h(7, wordCount, attributes);
            return this;
        },
}