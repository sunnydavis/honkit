import encodeSummaryArticle from "./encodeSummaryArticle";

/**
 Encode a SummaryPart to JSON

 @param {SummaryPart}
 @return {Object}
 */

function encodeSummaryPart(part) {
    return {
        title: part.getTitle(),
        articles: part.getArticles().map(encodeSummaryArticle).toJS()
    };
}

export default encodeSummaryPart;
