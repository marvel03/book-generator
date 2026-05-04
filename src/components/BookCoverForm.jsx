import { useState } from "react";
import "../styles/bookCoverForm.css"
import generatePrompt from "../services/openAI"

function BookCoverPromptForm({ setGeneratedPrompt }) {
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        style: '',
        mainCharacter: '',
        storyIdea: '',
    });

    const handleChange = function (e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = async function (e) {
        e.preventDefault();
        let result = await generatePrompt(formData)
        setGeneratedPrompt(result.generatedPrompt);
        // console.log(result)
    }

    return (

        <div className="container" >
            <h1>Create your prompt</h1>
            <form className="form-container" onSubmit={onSubmit}>
                <article>
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" placeholder="Story Title" onChange={handleChange} value={formData.title} />
                </article>
                <article>
                    <label htmlFor="">Genre</label>
                    <input type="text" name="genre" placeholder="Story Title" onChange={handleChange} value={formData.genre} />
                </article>
                <article>
                    <label htmlFor="">Style/Theme</label>
                    <input type="text" name="style" placeholder="Story Title" onChange={handleChange} value={formData.style} />
                </article>
                <article>
                    <label htmlFor="">Characters</label>
                    <input type="text" name="mainCharacter" placeholder="Story Title" onChange={handleChange} value={formData.mainCharacter} />
                </article>
                <article>
                    <label>Story Idea</label>
                    <textarea
                        name="storyIdea"
                        placeholder="Describe your story..."
                        onChange={handleChange}
                        value={formData.storyIdea}
                    />
                </article>
                <div>
                    <button type="submit">Submit</button>
                    <button type="reset" >Reset</button>
                </div>

            </form >
        </div >
    )

}

export default BookCoverPromptForm;