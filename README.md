# TF-JS-Storage

**Version 1.0.0**

TF-JS-Storage serves as an extension of [tensorflow.js](https://www.tensorflow.org/js/). It offers functions for storing tensors in web storage as well as turning them into strings.

An example of a use case for this extension might be to store a mode to later compare it to a different one or to store the training progress of a model to further improve it at a later point in time.
An example of a use case for this extension might be to store a model to later compare it to a different one or to store the training progress of a model to further improve it at a later point in time.

## Installation

Method 1: Install the *tfStorage.js* file and import it like this:
Method 1: Download the *tfStorage.js* file and import it like this:

```html
<script src="tfStorage.js"></script>
```

Method 2: Import the project from a CDN like this:

```html
<script src="https://cdn.jsdelivr.net/gh/N-Ziermann/tf-js-storage@1/tfStorage.js"></script>
```

## Usage

To store a tensor in local storage you can use the *toLocalStorage* Function as follows:

```javascript
toLocalStorage(key, tensor);
```

To retrieve the tensor from local storage you can then use *fromLocalStorage* like this:

```javascript
var tensor = fromLocalStorage(key);
```

**Note:** For session storage you'd use the *toSessionStorage* and *fromSessionStorage* functions. There's no difference in usage though.

To only convert a tensor into a string and not store it in web storage you'd use *tensorToString* like this:

```javascript
var str = tensorToString(tensor);
```

To then convert it back you'd just need to use *stringToTensor* like this:

```javascript
var tensor = stringToTensor(str);
```

## Contributors

- Niklas Ziermann

## Copyright & License

**© Niklas Ziermann** 

**GNU GPLv3**