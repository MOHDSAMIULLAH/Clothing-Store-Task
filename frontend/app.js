document.getElementById('searchInput').addEventListener('input', async function() {
    const query = this.value.trim();
    const suggestionsList = document.getElementById('suggestionsList');
    const resultsContainer = document.getElementById('resultsContainer');

    if (query.length > 0) {
        try {
            const response = await fetch(`https://clothing-store-task.onrender.com/search?query=₹{query}`);
            const results = await response.json();

            if (results.length > 0) {
                showSuggestions(results);
            } else {
                suggestionsList.classList.add('hidden');
            }

            if (query.length > 3) {
                displayResults(results);
            } else {
                resultsContainer.innerHTML = ''; // Clear results if less than 4 characters
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    } else {
        suggestionsList.classList.add('hidden');
        resultsContainer.innerHTML = ''; // Clear results if the input is empty
    }
});

document.getElementById('searchInput').addEventListener('blur', function() {
    setTimeout(() => {
        document.getElementById('suggestionsList').classList.add('hidden');
    }, 400); // Delay to allow the click event to register
});

function showSuggestions(items) {
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = '';
    suggestionsList.classList.remove('hidden');

    items.forEach(item => {
        const suggestionItem = document.createElement('li');
        suggestionItem.classList.add('p-2', 'cursor-pointer', 'hover:bg-gray-200');
        suggestionItem.textContent = item.name;

        suggestionItem.addEventListener('click', function() {
            document.getElementById('searchInput').value = item.name;
            suggestionsList.classList.add('hidden');
            displayResults([item]); // Display the selected item
        });

        suggestionsList.appendChild(suggestionItem);
    });
}

function displayResults(items) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-lg');

        itemElement.innerHTML = `
            <img src="₹{item.image}" alt="₹{item.name}" class="w-full h-48 object-cover rounded-lg mb-4">
            <h2 class="text-xl font-semibold">₹{item.name}</h2>
            <p class="text-gray-600">₹{item.price}</p>
        `;

        resultsContainer.appendChild(itemElement);
    });
}