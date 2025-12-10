
// userInput = "hello my name is zubeyr and i want to talk to coach"
//http://127.0.0.1:8000/

async function apiCall(userInput, convo) {
	try {
		const response = await fetch("https://api.couchtocoachchallenge.com/", { // the url of where requests ravel
			method: "POST", // the request method
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ // what is sent from this side of 
				user_message: userInput,
				convo_history: convo
			})
		})
		const data = await response.json()
		// data here is the computer response
		return data

	} catch(error) {
		console.error("Error:", error)
	}
}

function displayConvoUser(user) {
	let convoDiv = document.getElementsByClassName("convo-div")[0]

	let textBox = document.createElement("div")
	let text = document.createElement("p")
	textBox.classList.add("user-input")
	text.textContent = user
	textBox.appendChild(text)
	convoDiv.appendChild(textBox)


	convoDiv.scrollTop = convoDiv.scrollHeight
}

function displayConvoComputer(computer){
	let convoDiv = document.getElementsByClassName("convo-div")[0]

	//let textBox = document.createElement("p")
	//textBox.classList.add("computer-response")
	//textBox.textContent = computer
	//convoDiv.appendChild(textBox)

	let textBox = document.createElement("div")
	textBox.classList.add("computer-response")
	textBox.innerHTML = marked.parse(computer)
	convoDiv.appendChild(textBox)

	convoDiv.scrollTop = convoDiv.scrollHeight
}

function displayAiLoading(){
	let convoDiv = document.getElementsByClassName("convo-div")[0]

	let loadingBox = document.createElement("div")
	loadingBox.classList.add("computer-response")
	loadingBox.classList.add("dots")
	loadingBox.innerHTML = "<span></span><span></span><span></span>"
	convoDiv.appendChild(loadingBox)
	convoDiv.scrollTop = convoDiv.scrollHeight
	console.log("Loading made")
}

function removeAiLoading(){
	let convoDiv = document.getElementsByClassName("convo-div")[0]
	let loadingBox = document.getElementsByClassName("dots")[0]
	loadingBox.remove();
	console.log("Loading removed")
}



//--------------------------------------------------------------------------------

marked.setOptions({ breaks: true });

let arrowButton = document.getElementsByClassName("arrow-button")[0]

let conversation_history = []



let userInputElement = document.getElementsByClassName("chatbox")[0]
userInputElement.addEventListener("keydown", (event) => {
	if (event.key === "Enter" && !event.shiftKey) {
		event.preventDefault();
		arrowButton.click()
	}
})

userInputElement.addEventListener("input", () => {
	userInputElement.style.height = "auto";
	userInputElement.style.height = Math.min(userInputElement.scrollHeight, 200) + 'px';
})



arrowButton.addEventListener('click', async () => {
	let userInputElement = document.getElementsByClassName("chatbox")[0]
	let userInput = ""
	if (userInputElement.value) {
		userInput = userInputElement.value
		userInputElement.value = ""
		userInputElement.style.height = "auto"
		arrowButton.disabled = true
		displayConvoUser(userInput)
		displayAiLoading()


	}
	else {
		return
	}

	let computerResponse = ""
	conversation_history.push({
		"role": "user",
		"content": userInput
	})
	try {

		computerResponse = await apiCall(userInput, conversation_history)



		if (computerResponse.Alert) {
			displayConvoComputer("Chat is reset")
			console.log(computerResponse.Alert)
		}
		else {

			conversation_history.push({
				"role": "assistant",
				"content": computerResponse
			})

			console.log("This is userInput: ", userInput)
			console.log("This is computerResponse: ", computerResponse)
			console.log(" ")
			console.log("This is convo history: ", conversation_history)
			removeAiLoading()
			displayConvoComputer(computerResponse)
			//displayConvoComputer(md)
			
		}
		arrowButton.disabled = false
		userInput = ""

	} catch (error) {
		console.error("Error from api call:  ", error)
		displayConvoComputer("ERROR")
		arrowButton.disabled = true
	}

})
