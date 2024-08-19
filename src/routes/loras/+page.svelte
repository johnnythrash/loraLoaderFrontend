<script context="module">
	import LoraList from '../../components/LoraList.svelte';

	export async function load({ fetch }) {
		const res = await fetch('/api/loras');
		const loras = await res.json();

		return { props: { loras: loras.loras } };
	}
</script>

<LoraList {loras} />
