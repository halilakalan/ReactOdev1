import axios from "axios";
export {getUser, getPost, getUserAndPost};

const getUser = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        resolve(data);
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data);
    });
};

const getUserAndPost = (user_id, post_id) => {
    Promise.all([getUser(user_id), getPost(post_id)]).then(console.log).catch(console.log);
};