import {TestLib} from './lib/test-lib.mjs';

import {createMessage, createAnotherMessage} from './lib/test-lib-2.mjs';

let message1 = TestLib.createMessage();
let message2 = TestLib.createAnotherMessage();
console.log('===> message 1:\n' + (JSON.stringify(message1, null, 4)));
console.log('===> message 2:\n' + (JSON.stringify(message2, null, 4)));

let message3 = createMessage();
let message4 = createAnotherMessage();
console.log('===> message 3:\n' + JSON.stringify(message3, null, 4));
console.log('===> message 4:\n' + JSON.stringify(message4, null, 4));

