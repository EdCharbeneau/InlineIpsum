#InlineIpsum for jQuery
The InlineIpsum for jQuery plugin provides a fluent API that creates Lorem Ipsum text at runtime using simple helper extension methods. The InlineIpsum plugin for jQuery is specifically for reducing prototyping markup.

###Install Prototyping for jQuery:
Prototyping for jQuery is still in development and not ready for use. Check back soon.

If you would like to check out the beta, download the repo and run the replacesText.html page from the InlineIpsum > tests folder.

###Getting started.

	//Paragraph
	@Html.Ipsum().p()
	//Four paragraphs, ten sentences
	@Html.Ipsum().p(4, 10)
	//Paragraph with the attribute class="fancy"
	@Html.Ipsum().p(htmlAttributes: new { @class = "fancy" })
	//h1 tag
	@Html.Ipsum().h1()
	//h1 tag, just one word long
	@Html.Ipsum().h1(1)
	//h2 tag, with the attribute data-special="true"
	@Html.Ipsum().h2(5, new { data_special = "true" })
	//unordered list
	@Html.Ipsum().ul()
	//unordered list of links
	@Html.Ipsum().ul(links: true)
	//a mock blog post
	@Html.Ipsum().BlogPost()
	//non HTML ipsum
	@Html.Ipsum().Words(50)
	@Html.Ipsum().Paragraphs(2)
	//Fluent api
	@Html.Ipsum().h1().p().h2().p().h3().ol(10,3, true)

####Credits

InlineIpsum is possible because of the following projects that are included in it's source.

jQuery replaceText: String replace for your jQueries!
[http://benalman.com/projects/jquery-replacetext-plugin/](http://benalman.com/projects/jquery-replacetext-plugin/)

Lorem.js Dummy Text/Image Generator jQuery and Native JS [https://github.com/fkadeveloper/loremjs](https://github.com/fkadeveloper/loremjs)

Thank you!

##### Learn more
Still not ready for prime-time.

##### Changelog
0.1 Beta
