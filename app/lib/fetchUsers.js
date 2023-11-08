import axios from "axios";
import { useMutation } from "react-query";

const URL = "http://localhost:3100";

export const fetchAllTeams = async () => {
    const res = await fetch(`${URL}/team/all`, { next: { revalidate: 1 } });
    if (!res.ok) throw new Error("Failed to fetch data");

    return res.json();
};

export const mutation = useMutation((newUser) => {
    return axios.post("http://localhost:3100/auth/register", newUser);
});
