A higher order component for managing document head content

## Install

```
npm i -S react-pagehead
```

## Example

```js
import React from 'react';
import PageHead from 'react-pagehead';

const METATAGS = {
    title: "My Page Title",
    meta: {
        name: "description",
        content: "My injected meta description content"
    }
};


class MyComponent extends React.Component {
    render () {
        ...
    }
}

export default PageHead(MyComponent, METATAGS);
```