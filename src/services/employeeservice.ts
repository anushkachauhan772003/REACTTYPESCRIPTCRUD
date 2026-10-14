import type { IPerson } from "../Models/IPerson";
const API_url = "http://localhost:8081/person";

export async function getPersons(): Promise<IPerson[]> {
    const res = await fetch(API_url);
    return res.json();
}

export async function getPerson(_id: number): Promise<IPerson> {
    const res = await fetch(`{API_url}/${_id}`);
    return res.json();
}
export async function addPerson(person: Omit<IPerson, "id">): Promise<IPerson> {
    const res = await fetch(API_url, {
        method: "POST",
        headers: { "content_Type": "application/json" },
        body: JSON.stringify(person),
    });
    return res.json();
}
