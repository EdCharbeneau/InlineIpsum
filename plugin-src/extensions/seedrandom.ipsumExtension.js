//to add this extension 
//  Reference this script
//  <script src="h7.ipsumExtension.js"></script>
//  Add the extension to the inlineIpsum settings
//  $('body *').inlineIpsum({
//            extension: MyEngine,
//  });
//  The helper method @Html.Ipsum.h7() is now enabled in your markup
var SeedRandomEngine= {
        seedRandom: function (seed) {
			debugger
			if(seed){
				Math.seedrandom(seed);			
			} else {
				Math.seedrandom();
			}
            return this;
        }
}