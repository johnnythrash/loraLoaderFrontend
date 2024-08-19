<script>
	import { onMount } from 'svelte';
	import { fetchLoraById } from '$lib/api.js';

	export let id;
	let lora = null;
	let loading = true;
	let error = null;

	onMount(async () => {
		try {
			lora = await fetchLoraById(id);
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<p>Loading LoRA details...</p>
{:else if error}
	<p>Error: {error}</p>
{:else if lora}
	<div>
		<h2>{lora.name}</h2>
		<p>Description: {lora.description}</p>
		<p>Version: {lora.version}</p>
		<p>Tags: {lora.tags}</p>
		<div>
			{#each lora.images as image}
				<img src={image} alt={lora.name} />
			{/each}
		</div>
	</div>
{:else}
	<p>No LoRA found.</p>
{/if}
