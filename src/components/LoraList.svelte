<script>
	export let loras = [];
</script>

<ul>
	{#each loras as lora}
		<li>{lora.name} - {lora.description}</li>
	{/each}
</ul>
