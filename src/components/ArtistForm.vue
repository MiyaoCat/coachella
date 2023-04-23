<script setup>
	import { ref, reactive } from 'vue';
	import { useArtistsStore } from '@/stores/artists';

	const artists = useArtistsStore();

	const artist = reactive({
		name: '',
		song: '',
	});

	function save() {
		const record = {
			name: artist.name,
			song: artist.song,
		};
		artists.add(record);
		clear();
	}

	function clear() {
		artist.name = '';
		artist.song = '';
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

		<ul>
			<li v-for="artist in artists.list">
				{{ artist.name }}
			</li>
		</ul>
		<button type="submit">Submit</button>
	</form>
</template>
