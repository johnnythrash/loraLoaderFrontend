<script>
	import { onMount } from 'svelte';
	import { fetchModels } from '../services/api';

	let models = [];
	let loading = true;
	let error = null;

	onMount(async () => {
		try {
			models = await fetchModels();
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
</script>

<template>
	{#if loading}
		<p>Loading models...</p>
	{:else if error}
		<p>Error loading models: {error}</p>
	{:else}
		<ul>
			{#each models as model}
				<li>{model.name} - {model.description}</li>
			{/each}
		</ul>
	{/if}
</template>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		padding: 0.5rem;
		border-bottom: 1px solid #ddd;
	}
</style>
