export const addNewUser = async (username) => {
    const body = { username };

    try {
        const response = await fetch('http://localhost:3030/littleGame/create/user', {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(body)
        })


        if (response.status !== 200) {
            const error = await response.json();
            throw new Error(error.error);
        } else {
            const result = await response.json();
            return result;
        }
         
    } catch(error) {
        throw(error.message);
    }
};