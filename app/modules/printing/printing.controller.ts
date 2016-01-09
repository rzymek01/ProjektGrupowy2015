import {Parser} from "./engine/parser";
export default function PrintingController($sce, $interpolate) {

    var parser:Parser = new Parser();
    var content = parser.getContent();
    var pageCount = 5; //todo calculate page count iteratively
    var pages = this.pages = [];

    var footer = $interpolate(content['footer'])
    var header = $interpolate(content['header'])

    for (var i = 0; i < pageCount; i++) {
        var context = {
            pageNumber: i + 1,
            totalPages: pageCount
        };
        pages.push({
            header: $sce.trustAsHtml(header(context)),
            footer: $sce.trustAsHtml(footer(context))
        });
    }
    this.flow = $sce.trustAsHtml(content['flow']);

}
