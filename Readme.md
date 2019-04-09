# Node.js instructions 

## Make sure to include a package.json file.

```console
> cd /path/to/package
> npm init
```

A package.json file must contain "name" and "version" fields.
1) The "name" field contains your package’s name, and must be lowercase and one word, and may contain hyphens and underscores.
2) The "version" field must be in the form x.x.x

https://docs.npmjs.com/creating-a-package-json-file

## Installing Modules using NPM
There is a simple syntax to install any Node.js module 

```console
> npm install <Module Name>
```

For example, following is the command to install a famous Node.js web framework module called express 

```console
> npm install express
```

## Using modules in your js file

There is a simple syntax to use any Node.js module 

```console
var express = require('<Module Name>');
```

For example, now you can use express module in your js file as following 

```console
var express = require('express');
```
## Excecute example.js

```console
> node example.js
```

