import PROYECT_URL from "./urlConfig.js";
//import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// URL de la API de WordPress
const wordpressAPIURL = `http://${PROYECT_URL}/wp-json/wp/v2/pages`;

export async function loader() {
	
	// Solicitud GET a la API de WordPress
	try {
		const response = await fetch(`${wordpressAPIURL}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error("No se pudo obtener la información de WordPress.");
		}

		const data = await response.json();

		return data;


	} catch (error) {
		console.error("Error al obtener datos de WordPress:", error);
		throw error;
	}
}

















//const wordpressAPIURL = `http://${PROYECT_URL}/wp-json/wp/v2/`;
//const wordpressAPIURL = `http://${PROYECT_URL}wp-json/wc/v3/products`;
