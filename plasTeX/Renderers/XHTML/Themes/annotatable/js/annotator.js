TexDoc = ("TexDoc" in window) ? TexDoc : {}

TexDoc.Annotator = function (element) {
var $ = jQuery, self = this
this.annotator = $(element).annotator().data('annotator')
return this
}