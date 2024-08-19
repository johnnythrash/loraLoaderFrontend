// src/lib/api.js

const API_BASE_URL = '/api';

// Fetch all models
export async function fetchModels() {
	try {
		const response = await fetch(`${API_BASE_URL}/models`);
		if (!response.ok) {
			throw new Error('Failed to fetch models');
		}
		const data = await response.json();
		return data.models;
	} catch (error) {
		console.error('Error fetching models:', error);
		return [];
	}
}

// Fetch a model by ID
export async function fetchModelById(id) {
	try {
		const response = await fetch(`${API_BASE_URL}/models/${id}`);
		if (!response.ok) {
			throw new Error(`Failed to fetch model with ID: ${id}`);
		}
		const data = await response.json();
		return data.model;
	} catch (error) {
		console.error(`Error fetching model by ID (${id}):`, error);
		return null;
	}
}

// Fetch all LoRAs
export async function fetchLoras() {
	try {
		const response = await fetch(`${API_BASE_URL}/loras`);
		if (!response.ok) {
			throw new Error('Failed to fetch LoRAs');
		}
		const data = await response.json();
		return data.loras;
	} catch (error) {
		console.error('Error fetching LoRAs:', error);
		return [];
	}
}

// Fetch a LoRA by ID
export async function fetchLoraById(id) {
	try {
		const response = await fetch(`${API_BASE_URL}/loras/${id}`);
		if (!response.ok) {
			throw new Error(`Failed to fetch LoRA with ID: ${id}`);
		}
		const data = await response.json();
		return data.lora;
	} catch (error) {
		console.error(`Error fetching LoRA by ID (${id}):`, error);
		return null;
	}
}

// Search models by query
export async function searchModels(query) {
	try {
		const response = await fetch(`${API_BASE_URL}/models/search/${encodeURIComponent(query)}`);
		if (!response.ok) {
			throw new Error(`Failed to search models with query: ${query}`);
		}
		const data = await response.json();
		return data.models;
	} catch (error) {
		console.error(`Error searching models with query (${query}):`, error);
		return [];
	}
}

// Search LoRAs by query
export async function searchLoras(query) {
	try {
		const response = await fetch(`${API_BASE_URL}/loras/search/${encodeURIComponent(query)}`);
		if (!response.ok) {
			throw new Error(`Failed to search LoRAs with query: ${query}`);
		}
		const data = await response.json();
		return data.loras;
	} catch (error) {
		console.error(`Error searching LoRAs with query (${query}):`, error);
		return [];
	}
}

// Scan directory for new models
export async function scanDirectory(directoryPath) {
	try {
		const response = await fetch(`${API_BASE_URL}/scan`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ directoryPath })
		});
		if (!response.ok) {
			throw new Error('Failed to scan directory');
		}
		const data = await response.json();
		return data.message;
	} catch (error) {
		console.error('Error scanning directory:', error);
		return null;
	}
}
