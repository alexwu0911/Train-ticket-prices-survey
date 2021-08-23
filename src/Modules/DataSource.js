class DataSource {
    constructor() {
        this.data = {}
    }

    set(d) {
        this.data = {
            ...this.data,
            ...d,
        }
    }

    get() {
        return this.data
    }

    clear() {
        this.data = {}
    }

    send() {
        // pur all data to database through backend api
    }
}

export default new DataSource()