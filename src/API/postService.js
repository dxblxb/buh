import axios from "axios"

export default class postService {
    static async getAll(limit = 10, page = 1) {
        const response = await axios.get('http://localhost/:4200',{
        })
        return response
    }
}