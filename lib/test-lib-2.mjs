'use strict';

/** Export functions explicitly */

function createMessage() {
	return {
		message: 'Hello from first message function!'
	};
}

function createAnotherMessage() {
	return {
		message: 'Hello from second message function!'
	};
}

export { createMessage, createAnotherMessage }
