jQuery(function(g){var f=g("#debug-bar-console-submit"),b=g("#debug-bar-console-input"),a=g("#debug-bar-console-output"),d=g("#_wpnonce_debug_bar_console").val(),c={},e=g("#debug-bar-console-iframe-css").val();c.container=g("iframe",a);c.contents=c.container.contents();c.document=c.contents[0];c.body=g(c.document.body);g("head",c.contents).append('<link type="text/css" href="'+e+'" rel="stylesheet" />');f.click(function(){g.post(ajaxurl,{action:"debug_bar_console",data:b.val(),nonce:d},function(h){c.body.html(h)});return false});b.keydown(function(h){if(h.which==13&&h.shiftKey){f.click();h.preventDefault()}})});