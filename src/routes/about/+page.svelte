<script lang="ts">
	export let data: { content: string; title: string };
</script>

<div class="prose">
	<h1>Hi there, this is the about page</h1>
	<button class="btn">Click Daisy</button>
	<h4>{data.title}</h4>
</div>
