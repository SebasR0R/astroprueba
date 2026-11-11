import type { APIRoute } from "astro";
export const prerender = false;
export const ALL: APIRoute = ({ request }) => {
return new Response(`this was a ${request.method}!`);
};