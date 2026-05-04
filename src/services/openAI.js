const generatePrompt = async function (formData) {
    console.log("calling api endpoint for prompt generation...");
    const response = await fetch(
        "http://localhost:5000/generate-prompt", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
    }
    )
    const data = await response.json();
    return data;
}

export default generatePrompt;