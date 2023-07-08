document.getElementById("input").addEventListener("keydown", async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        document.getElementById("buffer").removeAttribute("hidden")
        document.getElementById("dataView").setAttribute("hidden", true)
        const apiUrl = 'https://api.openai.com/v1/chat/completions';
        const apiKey = ''; // Replace with your actual API key
        let query = document.getElementById("input").value;
        const payload = {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: `${query}` },
            ],
        };
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(payload),
        })
        const data = await response.json()
        document.getElementById("buffer").setAttribute("hidden", true)
        document.getElementById("dataView").removeAttribute("hidden")
        document.getElementById("dataView").innerText = data.choices[0].message.content;
    }

})