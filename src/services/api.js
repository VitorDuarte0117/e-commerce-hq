import axios from "axios";
import md5 from "md5";

export default function getAllComics(content, lastValue, search) {
    const currentTime = Number(new Date());
    const publicKey = "4b42edd3e51dfc3af5ec95678cb1f7ff";
    const privateKey = "1b93b3c9e4f1462ffb18f156ecc4a2edf26ac7c2";
    const hash = md5(currentTime + privateKey + publicKey);
    const baseURL = "https://gateway.marvel.com/v1/public/comics";

    let url = `${baseURL}?ts=${currentTime}&apikey=${publicKey}&hash=${hash}`;

    if (search && content === "comics") url += `&titleStartsWith=${search}`;
    else if (lastValue) url += `&offset=${lastValue}`;
    return axios.get(url);
}
