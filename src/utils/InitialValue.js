import { Value } from 'slate';
import { getStorage } from './helper';
let valueFromStorage = JSON.parse(getStorage('value'));
const initialValue = Value.fromJSON( valueFromStorage || {
		document: {
		nodes: [
			{
				object: 'block',
				type: 'paragraph',
				nodes: [
					{
						object: 'text',
						leaves: [
							{
								text: 'My first paragraph!',
							},
						],
					},
				],
			},
		],
	},
});

export default initialValue;
