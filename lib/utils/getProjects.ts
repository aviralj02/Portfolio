import { client } from "@/sanity/sanity.client";
import { groq } from "next-sanity";

const query = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`;

const getProjects = async () => {
    const projects: Project[] = await client.fetch(query);
    return projects;
}

export default getProjects;