const API_BASE_URL = "http://localhost:3000"; // Replace this with the base URL of your API

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

async function callApi<T>(
	method: HttpMethod,
	endpoint: string,
	body?: Record<string, unknown>,
): Promise<T> {
	try {
		const headers = new Headers();
		headers.append("Content-Type", "application/json");
  
		const requestOptions: RequestInit = {
			method,
			headers,
			body: body ? JSON.stringify(body) : undefined,
		};
  
		const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);
		if (!response.ok) {
			throw new Error(`Error: ${response.status}`);
		}
		return response.json();
	} catch (error) {
		console.error("Error in callApi:", error);
		throw error;
	}
}

export default callApi;