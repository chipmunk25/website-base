
import { convertToRaw, ContentState, convertFromHTML, EditorState, convertFromRaw } from "draft-js";
    const ConvertFromHTMLtoTEXT = content => {
        if (content === null) {
            return EditorState.createEmpty();
        } else {
            const blocksFromHTML = convertFromHTML(content);
            const contentState = ContentState.createFromBlockArray(blocksFromHTML);
            return EditorState.createWithContent(contentState);
        }
    };

    export default  ConvertFromHTMLtoTEXT