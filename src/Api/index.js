export default class ApiClass {
    constructor(base_url) {
        this.base_url = base_url
    }

     async getResponse(url) {

        const res = await fetch(this.base_url + url)

        if (!res.ok) {
            throw new Error(`Could not fetch(${this.base_url + url}), received ${res.status}`)
        }

        const body = await res.json();
        return body
    }


}