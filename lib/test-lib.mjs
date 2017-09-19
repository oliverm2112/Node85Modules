'use strict';

/** Wrap functions in a class */

export class TestLib {

	static createMessage() {
		return {
			message: 'Hello from first message function!'
		};
	}

	static createAnotherMessage() {
		return {
			message: 'Hello from second message function!'
		};
	}
}
