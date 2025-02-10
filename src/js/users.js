import {fetchData} from "./fetch";

const getUsers = async () => {
    try {
        const response = await fetchData('http://localhost:3000/api/users');
        const data = await response.json();
        console.log('Haetaan omasta rajapinnasta users');
        console.log(data);

        const tableBody = document.querySelector('.tbody')


        data.forEach(user => {
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td><button class="check" data-id="${user.user_id}">Info</button></td>
            <td><button class="del" data-id="${user.user_id}">Delete</button></td>
            <td>${user.user_id}</td>
            `;

            tableBody.appendChild(row);

        });

        return data;
    } catch (error) {
        console.error('getUsers error:', error.message);
        return {error: error.message};
    }
}

export {getUsers};