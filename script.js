import data from './data.js';

const itemsPerPage = 5; //5 data will be in one page
let currentPage = 1; // Current page is initially 1

document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const paginationContainer = document.getElementById('pagination');

    const renderData = () => {
        dataContainer.innerHTML = '';

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentData = data.slice(startIndex, endIndex);

        currentData.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');

            const idElement = document.createElement('p');
            idElement.textContent = `ID: ${item.id}`;

            const nameElement = document.createElement('p');
            nameElement.textContent = `Name: ${item.name}`;

            const emailElement = document.createElement('p');
            emailElement.textContent = `Email: ${item.email}`;

            card.appendChild(idElement);
            card.appendChild(nameElement);
            card.appendChild(emailElement);

            dataContainer.appendChild(card);
        });

        renderPagination();
    };

    const renderPagination = () => {
        paginationContainer.innerHTML = '';

        const totalPages = Math.ceil(data.length / itemsPerPage);

        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderData();
            }
        });
        paginationContainer.appendChild(prevButton);

        const pageNumbers = document.createElement('div');
        pageNumbers.classList.add('page-numbers');

        for (let i = 1; i <= totalPages; i++) {
            const pageNumberButton = document.createElement('button');
            pageNumberButton.textContent = i;
            pageNumberButton.addEventListener('click', () => {
                currentPage = i;
                renderData();
            });
            pageNumbers.appendChild(pageNumberButton);
        }

        paginationContainer.appendChild(pageNumbers);

        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderData();
            }
        });
        paginationContainer.appendChild(nextButton);
    };

    renderData();
});
