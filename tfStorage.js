function tensorToString(tensor){			//saves Tensor + shape inside string
	var shape = tensor.shape;
	var arr = Array.from(tensor.dataSync());
	return JSON.stringify([arr, shape]);
}

function stringToTensor(str){				//turns previously saved string back into tensor
	var data = JSON.parse(str);
	return tf.tensor(data[0], data[1]);
}

function toLocalStorage(key, tensor){		//stores a tensor in localStorage
	var data = tensorToString(tensor);
	localStorage.setItem(key, data);
}

function fromLocalStorage(key){				//pulls tensor from localStorage
	return stringToTensor(localStorage.getItem(key));
}

function toSessionStorage(key, tensor){		//stores a tensor in SessionStorage
	var data = tensorToString(tensor);
	sessionStorage.setItem(key, data);
}

function fromSessionStorage(key){			//pulls tensor from SessionStorage
	return stringToTensor(sessionStorage.getItem(key));
}
