'use strict';

/** Test external module import */

import _ from 'lodash'
import { isObject, isNumber } from 'lodash'

function testLodash() {

	const testObj = {
		prop1: 'Hello',
		prop2: 'Whurled'
	};

	const testIsObj = _.isObject(testObj);

	return {
		testObj: testObj,
		testIsObj: testIsObj
	};
}

export { testLodash }
