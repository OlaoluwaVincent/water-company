<script lang="ts">
	import 'github-markdown-css/github-markdown.css';
	import { onMount } from 'svelte';
	import { marked } from 'marked';

	let markdownContent = '';

	onMount(async () => {
		const response = await fetch('/README.md');
		const text = await response.text();
		markdownContent = marked(text) as string;
	});
</script>

<div class="markdown-body py-4 px-10 bg-transparent">
	{@html markdownContent}
</div>
