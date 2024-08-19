<script context="module">
	import ModelList from '../ModelList.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/api/models');
		const models = await res.json();

		return { props: { models: models.models } };
	}
</script>

<ModelList {models} />
