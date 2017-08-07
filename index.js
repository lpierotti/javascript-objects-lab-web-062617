var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
	object[key] = value;
	return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
	let obj = {};
	obj[key] = value;
	let newobj = Object.assign({}, object, obj);
	return newobj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
	object[key] = value;
	return object;
}

function deleteFromObjectByKey(object, key) {
	let obj = Object.assign({}, object);
	delete obj[key];
	return obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
	delete object[key];
	return object
}