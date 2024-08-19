<script>
	import { onMount } from 'svelte';
	import { fetchModelById } from '$lib/api.js';

	export let id;
	let model = null;
	let loading = true;
	let error = null;

	onMount(async () => {
		try {
			model = await fetchModelById(id);
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<p>Loading model details...</p>
{:else if error}
	<p>Error: {error}</p>
{:else if model}
	<div>
		<h2>{model.name}</h2>
		<p>Description: {model.description}</p>
		<p>Version: {model.version}</p>
		<p>Tags: {model.tags}</p>
		<div>
			{#each model.images as image}
				<img src={image} alt={model.name} />
			{/each}
		</div>
	</div>
{:else}
	<p>No model found.</p>
{/if}
