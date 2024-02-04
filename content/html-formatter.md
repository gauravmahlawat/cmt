---
title: 'HTML Formatter Online | Beautify Your HTML'
description: "Clean up and organize your HTML code with our Online HTML Formatter. Enhance code readability and maintainability for a more polished website. Try it now!"
type: devtool
keywords: 'online course for, Content Writer, Graphic Designer, Web Developer, Software Engineer, Frontend Developer graphic designer, UI designer, digital marketing'
draft: false
sitemap: true
---

# HTML Formatter Online

Elevate the quality of your web development projects with our Online HTML Formatter. This user-friendly tool is designed to clean up and organize your HTML code, enhancing its readability and maintainability. Whether you're a web developer or designer, ensuring your HTML is properly formatted is crucial for a polished website. With just a few clicks, you can beautify your HTML code, making it easier to work with and collaborate on. Say goodbye to messy and cluttered code – try our HTML Formatter now and enjoy the benefits of a well-structured web project.



{{< rawhtml >}}
<form>


<label for="xml">HTML Content</label>
<div id="editor" style="width:100%;height:400px;"></div>



<input class="btn button button--primary button--small button--dange" type='button' id='format' value='Format'>
<input class="btn button button--primary button--small button--dange" type="button" id="copy" value="Copy">
<input class="btn button button--primary button--small button--danger" type='button' id='clear' value='Clear'>


</form>

<script>
    setTimeout(() => {
    	var formatCode = function(code, stripWhiteSpaces, stripEmptyLines) {
		"use strict";
		var whitespace          = ' '.repeat(4);             // Default indenting 4 whitespaces
		var currentIndent       = 0;
		var char                = null;
		var nextChar            = null;


		var result = '';
		for(var pos=0; pos <= code.length; pos++) {
			char            = code.substr(pos, 1);
			nextChar        = code.substr(pos+1, 1);

			// If opening tag, add newline character and indention
			if(char === '<' && nextChar !== '/') {
				result += '\n' + whitespace.repeat(currentIndent);
				currentIndent++;
			}
			// if Closing tag, add newline and indention
			else if(char === '<' && nextChar === '/') {
				// If there're more closing tags than opening
				if(--currentIndent < 0) currentIndent = 0;
				result += '\n' + whitespace.repeat(currentIndent);
			}

			// remove multiple whitespaces
			else if(stripWhiteSpaces === true && char === ' ' && nextChar === ' ') char = '';
			// remove empty lines
			else if(stripEmptyLines === true && char === '\n' ) {
				//debugger;
				if(code.substr(pos, code.substr(pos).indexOf("<")).trim() === '' ) char = '';
			}

			result += char;
		}

		return result;
	}	
	
	$( function() {
		$( "#format").click(
			function() {
				var content = getValue();
				try {
					
					var res = formatCode( content, true, true );
					
					setValue( res );

				} catch( err ) {
					alert( "Your document is invalid " + err );
				}
			}
		);
		$( "#clear" ).click(
			function() {
				setValue( "" );
			}
		);
	});
}, "5000");
</script>
{{</ rawhtml >}}