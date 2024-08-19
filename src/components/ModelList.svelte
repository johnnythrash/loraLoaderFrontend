<script>
	export let models = [];
</script>

<ul>
	{#each models as model}
		<li>{model.name} - {model.description}</li>
	{/each}
</ul>
