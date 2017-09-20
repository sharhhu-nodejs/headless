/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	var pianoEl = document.querySelector('.content--instrument > .piano')
	function init() {

		// Preload all sounds and initialize the instruments.
		MIDI.loadPlugin({
			soundfontUrl: './soundfont/',
			instruments: ['acoustic_grand_piano'],
			onsuccess: function() {
				document.body.classList.remove('loading');
				// Initialize the Piano.
				new Piano(pianoEl);
			}
		});
	}

	init();

})(window);