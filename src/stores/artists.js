import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useArtistsStore = defineStore('artists', function () {
	// artists list
	const list = reactive([{ name: 'Metro Boomin' }, { name: 'Kaytranada' }]);
	// add an artist
	function add(artist) {
		list.push(artist);
	}

	return {
		list,
		add,
	};
});
