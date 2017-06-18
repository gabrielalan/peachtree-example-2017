import initialState from '../../transactions.json';

export default function transactionsReducer(state = initialState.data, action) {
	switch (action.type) {
		case 'TRANSACTIONS_TRANSFER':
			return [{
				"amount": "82.02",
				"categoryCode": "#12a580",
				"merchant": "The Tea Lounge",
				"merchantLogo": "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1QUU1Q0Y5RTUwMjExRTY5MkU3RTBCOTk3OEREN0E3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY1QUU1Q0ZBRTUwMjExRTY5MkU3RTBCOTk3OEREN0E3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjVBRTVDRjdFNTAyMTFFNjkyRTdFMEI5OTc4REQ3QTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjVBRTVDRjhFNTAyMTFFNjkyRTdFMEI5OTc4REQ3QTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEB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",
				"transactionDate": 1476933842000,
				"transactionType": "Card Payment"
			}].concat(state);

		default:
			return state;
	}
}