let myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

class cardTemplate {
	constructor(titleValue, descriptionValue, dueDateValue, priorityValue) {
		this.titleValue = titleValue;
		this.descriptionValue = descriptionValue;
		this.dueDateValue = dueDateValue;
		this.priorityValue = priorityValue;
	}
}

const dialog = document.getElementById('dialog');

const createNewCard = document.getElementById('createNewCard');
createNewCard.addEventListener('click', () => {
	dialog.showModal();
});

const title = document.getElementById('title');
const description = document.getElementById('description');
const dueDate = document.getElementById('dueDate');
const priority = document.getElementById('priority');

const send = document.getElementById('send');
send.addEventListener('click', (event) => {
	event.preventDefault();

	let titleValue = title.value;
	title.value = '';

	let descriptionValue = description.value;
	description.value = '';

	let dueDateValue = dueDate.value;
	dueDate.value = '';

	let priorityValue = priority.value;
	priority.value = '';

	const newCard = new cardTemplate(
		titleValue,
		descriptionValue,
		dueDateValue,
		priorityValue,
	);

	myLibrary.push(newCard);
	localStorage.setItem('myLibrary', JSON.stringify(myLibrary));

	createCardStyle(newCard);

	dialog.close();
});

const display = document.getElementById('display');

const createCardStyle = (card) => {
	const cardDiv = document.createElement('div');
	cardDiv.classList.add('card');

	const titleElement = document.createElement('h3');
	titleElement.textContent = 'Title: ' + card.titleValue;

	const descriptionElement = document.createElement('p');
	descriptionElement.textContent = 'Description: ' + card.descriptionValue;

	const priorityElement = document.createElement('p');
	priorityElement.textContent = 'Priority: ' + card.priorityValue;

	const dateElement = document.createElement('div');
	dateElement.textContent = 'Ends: ' + card.dueDateValue;

	const deleteCard = document.createElement('button');
	deleteCard.textContent = 'delete card';
	deleteCard.classList.add('deleteButton');
	deleteCard.addEventListener('click', () => {
		cardDiv.remove();

		const index = myLibrary.indexOf(card);

		if (index > -1) {
			myLibrary.splice(index, 1);
		}

		localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
	});

	cardDiv.appendChild(titleElement);
	cardDiv.appendChild(descriptionElement);
	cardDiv.appendChild(priorityElement);
	cardDiv.appendChild(dateElement);
	cardDiv.appendChild(deleteCard);

	display.appendChild(cardDiv);
};

myLibrary.forEach((card) => {
	createCardStyle(card);
});
