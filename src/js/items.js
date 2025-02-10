import {fetchData} from "./fetch";

const getItems = async () => {
    try {
        const response = await fetchData('http://localhost:3000/api/items');
        const data = await response.json();
        console.log('Haetaan omasta rajapinnasta items');
        console.log(data);

        data.forEach(item => {
            console.log(item.name);
        });

        return data;
    } catch (error) {
        console.error('getItems error:', error.message);
        return {error: error.message};
    }
}

export {getItems};