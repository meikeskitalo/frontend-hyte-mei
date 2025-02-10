const fetchData = async (url, options = {}) => {
    
    try {
		const response = await fetch(url, options);

        if (!response.ok) {
            const errorData = await response.json();
            return {error: errorData.message || 'An error occurred'};
        }

		return response;

	} catch (error) {
		console.error('Fetch error:', error.message);
        return {error: error.message};
	}
};

export {fetchData};