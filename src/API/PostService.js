import axios from "axios";

export default class PostService {
  static async getAll() {
    try {
      return (await axios.get("https://jsonplaceholder.typicode.com/posts"))
        .data;
    } catch (error) {
      console.log(error);
    }
  }
}
