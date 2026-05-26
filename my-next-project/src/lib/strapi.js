const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function fetchStrapi(path, options = {}) {
    const url = `${STRAPI_URL}/api${path}`;
    const res = await fetch(url/*, {
        headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
        ...options,
    }*/);
    /*if (!res.ok) throw new Error(`Strapi error: ${res.status}`);*/
    const json = await res.json();
    return json.data;
}