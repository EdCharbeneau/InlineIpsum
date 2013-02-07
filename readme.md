#InlineIpsum for jQuery
The InlineIpsum for jQuery plugin provides a fluent API that creates Lorem Ipsum text at runtime using simple helper extension methods. The InlineIpsum plugin for jQuery is specifically for reducing prototyping markup.

###Install InlineIpsum for jQuery:
1. Reference jQuery ``<script src="jquery-1.8.3.min.js"></script>``
2. Reference inlineIpsum ``<script src="jquery.inlineIpsum.min.js"></script>``
3. Initialize the plugin ``<script>$('body *').inlineIpsum();></script>``

Download InlineIpsum and run the index.html from the Demo folder.

###Getting started.

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

####Credits

InlineIpsum is possible because of the following projects that are included in it's source.

jQuery replaceText: String replace for your jQueries!
[http://benalman.com/projects/jquery-replacetext-plugin/](http://benalman.com/projects/jquery-replacetext-plugin/)

Lorem.js Dummy Text/Image Generator jQuery and Native JS [https://github.com/fkadeveloper/loremjs](https://github.com/fkadeveloper/loremjs)

The placehold.it image service: [placehold.it](http://placehold.it)

Thank you!

##### Learn more
Still not ready for prime-time.

##### Changelog
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
