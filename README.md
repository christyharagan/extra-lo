Extra Lo
=======

Overview
------

A set of extra functions for [lo-dash](http://lodash.com). Specifically targeted at chained usage, or with the
[tacit](https://github.com/christyharagan/tacit) library.

Usage
------

Install:

```
npm install extra-lo
```

Basic usage:

```javascript

var _ = require('extra-lo');

// ...

```


Or, to mixin the functionality to your own version of lo-dash and promise library:

```javascript
var _ = require('lodash');

require('extra-lo/lib/mixin')(_, true);
```

The last parameter specifies whether a new instance of lo-dash is created to prevent clashes with other packages. Passing
```true``` creates a new instance and mixes the functions into that; passing ```false``` just mixes the functions in the provided instance.

API
------

See [API Documentation](doc/API.md) for full details of implemented functions.
