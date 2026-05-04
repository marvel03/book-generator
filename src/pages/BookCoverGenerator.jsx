
import { useState } from "react";
import BookCoverPromptForm from "../components/BookCoverForm";
import PromptView from "../components/PromptView";

function BookCoverGenerator() {
    const [generatedPrompt, setGeneratedPrompt] = useState("")
    return (
        <div>
            <BookCoverPromptForm setGeneratedPrompt={setGeneratedPrompt} />
            <PromptView generatedPrompt={generatedPrompt} />
        </div>
    )
}

export default BookCoverGenerator