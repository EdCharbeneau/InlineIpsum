#InlineIpsum for jQuery
The InlineIpsum for jQuery plugin provides a fluent API that creates Lorem Ipsum text at runtime using simple helper extension methods. The InlineIpsum plugin for jQuery is specifically for reducing prototyping markup. Since lorem ipsum is injected at runtime, your markup remains untouched and your source code remains clean.

###Install InlineIpsum for jQuery:
1. Reference jQuery ``<script src="jquery-1.8.3.min.js"></script>``
2. Reference inlineIpsum ``<script src="jquery.inlineIpsum.min.js"></script>``
3. Initialize the plugin ``<script>$('body *').inlineIpsum();></script>``
4. Place @Html.Ipsum.p() in anywhere in your document's body to generate a paragraph of lorem ipsum.

For a full example, download InlineIpsum and run the index.html from the Demo folder.

###Getting started

**Here are some things you can do with inlineIpsum**

Each helper his highly configurable, detailed documentation is coming soon. See the demo for a sample of what's possible.

	Paragraph
	@Html.Ipsum.p()
	Four paragraphs, ten sentences
	@Html.Ipsum.p(4, 10)
	Paragraph with the attribute class="fancy"
	@Html.Ipsum.p(1,10,{ "class":"fancy" })
	h1 tag
	@Html.Ipsum.h1()
	h1 tag, just one word long
	@Html.Ipsum.h1(1)
    h2 tag, with the attribute data-special="true"
	@Html.Ipsum.h2(5, { "data-special": "true" })
	unordered list
	@Html.Ipsum.ul()
	unordered list of links
	@Html.Ipsum.ul(4,2,true)
	a mock blog post
	@Html.Ipsum.blogPost()
	Fluent api
	@Html.Ipsum.h1().p().h2().p().h3().ol(10,3, true)
	placeholder image provided by [placehold.it](http://placehold.it)
	@Html.Ipsum.image(600,200, "has text")
	Get 5 words with no HTML wrap
	@Html.Ipsum.words(5)
	Get 5 sentences with no HTML wrap
	@Html.Ipsum.sentences(5)
	Get 5 paragraphs with no HTML wrap
	@Html.Ipsum.paragraphs(5)



##### Learn more
InlineIpsum is the platform independent port of the Prototyping MVC HTML helper package for Razor. You can read about why Prototyping MVC was created in the article: [Rapid Prototyping, MVC the working Model
](http://www.simple-talk.com/dotnet/asp.net/rapid-prototyping,-the-mvc-working-model/)

The inlineIpsum syntax was designed to mimic Razor syntax (@Html) except inlineIpsum's syntax is configurable through the the plugin options by setting the token and locator properties. The token and locator properties are included in the regular expression that locates the inline code which is processed into lorem ipsum elements.

    <script>
        $('body *').inlineIpsum({ 
					token: "@", //default
					locator: "Html"//default
					});
    </script>

#####Even more
More documentation is coming soon. Check out the full repository for details on how to configure and write plugings for inlineIpsum.

####Credits

InlineIpsum is possible because of the following projects that are included in it's source.

jQuery replaceText: String replace for your jQueries!
[http://benalman.com/projects/jquery-replacetext-plugin/](http://benalman.com/projects/jquery-replacetext-plugin/)

Lorem.js Dummy Text/Image Generator jQuery and Native JS [https://github.com/fkadeveloper/loremjs](https://github.com/fkadeveloper/loremjs)

The placehold.it image service: [placehold.it](http://placehold.it)

Thank you!

##### Changelog
- 1.1 Minor core changes
- 1.0 Initial release
	- Features complete
- 0.6 Added new features
	- words
	- sentences
	- paragraphs
- 0.5 Added error handling, no more killing javascript
- 0.4 Added placeholder image helper
- 0.3 Updated Core to allow custom token in place of "@"
- 0.2 Updated Core to allow customized inlineIpsum plugins
	- Added Extensions
	- Added locator option
- 0.1 Beta
