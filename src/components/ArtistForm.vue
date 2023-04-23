<script setup>
	import { ref, reactive } from 'vue';

	const artist = reactive({
		name: 'Fred Again',
		song: 'Baby again..',
	});

	function save() {
		alert('save');
	}
</script>

<template>
	<form @submit.prevent="save()">
		<div class="field">
			<label for="n">Artist Name</label>
			<input id="n" type="text" v-model="artist.name" />
		</div>

		<div class="field">
			<label for="s">Song</label>
			<input id="s" type="text" v-model="artist.song" />
		</div>

		<button type="submit">Submit</button>
	</form>
</template>
