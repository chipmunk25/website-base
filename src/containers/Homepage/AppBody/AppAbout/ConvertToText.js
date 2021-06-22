
import htmlToDraft from "html-to-draftjs";
import {
    ContentState,
    EditorState
} from "draft-js";
const convertFromHtmlTOTextfield = content => {
    if (content === null) {
        return EditorState.createEmpty();
    } else {
        const contentBlock = htmlToDraft(content);
        /* if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            return editorState;
        } */
        return contentBlock
    }
};

export default convertFromHtmlTOTextfield