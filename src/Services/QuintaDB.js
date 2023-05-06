const GET_URL = `https://quintadb.ru/apps/caA8k4abDcOjpdGuf5W6qg/dtypes/entity/aujvZcHIHmWQ_cOSowDCkm.json?rest_api_key=dcKMjTW6DdSOoNdMJcVN4h&amp;view=`;
const POST_URL = `https://quintadb.ru/apps/caA8k4abDcOjpdGuf5W6qg/dtypes.json?rest_api_key=dcKMjTW6DdSOoNdMJcVN4h`;

class QuintaDB {
    fetchData = async (url) => {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        return await response.json();
    }

    getElements = () => {
        return this.fetchData(GET_URL);
    }

    getFirst = () => {
        return this.fetchData(GET_URL).then(res => res.records[0]);
    }

    addElement = async () => {
        const data = {
            rest_api_key: 'dcKMjTW6DdSOoNdMJcVN4h',
            entity_id: 'aujvZcHIHmWQ_cOSowDCkm',
            values: {
                "abl8ohoJ5lgikVkX7cU8oN": " ",
            }
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(POST_URL, options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }

    add = () => {
        return this.addElement();
    }
}

export default QuintaDB;