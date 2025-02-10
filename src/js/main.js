import '../css/style.css';
import '../css/snackbar.css';
import {getItems} from './items';
import {getUsers} from './users';

document.querySelector('#app').innerHTML = 'Moi tässä oman APIn harjoituksia';

const getItemBtn = document.querySelector('.get_items');
getItemBtn.addEventListener('click', getItems);

const getUserBtn = document.querySelector('.get_users');
getUserBtn.addEventListener('click', getUsers);

// const addUserForm = document.querySelector('.addform');
// addUserForm.addEventListener('click', addUser);
