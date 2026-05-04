import { useState } from 'react'

const style = {

    textarea: {
        height: "200px",
        width: "100%"
    }

}

function PromptView({ generatedPrompt }) {
    return (
        <div>
            <textarea style={style.textarea} value={generatedPrompt} name="" id="" ></textarea>
        </div>
    )
}

export default PromptView;