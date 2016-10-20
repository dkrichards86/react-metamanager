A React implementation of MetaManager.

## Install

```
npm i -S react-metamanager
```

## Example

```js
import React from 'react';
import MetaManager from 'react-metamanager';

const METATAGS = {
    title: "My Page Title",
    meta: {
        name: "description",
        content: "My injected meta description content"
    }
};


export default class MyComponent extends React.Component {
    render () {
        <MetaManager tags={METATAGS} />
    }
}
```