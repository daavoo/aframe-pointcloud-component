## aframe-pointcloud-component

A Point Cloud component for [A-Frame](https://aframe.io).

![gif](pointcloud.gif)

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| src      | path to a .ply file   | -              |
| size     | size of the rendered points   | 1             |

You might have to also adjust the `scale` and `position` properties in order to fit the point cloud to your scene.

Take a look at the included example.

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.6.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-pointcloud-component/dist/aframe-pointcloud-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity pointcloud="src: url(sculpt.ply); size:0.01"></a-entity>
  </a-scene>
</body>
```

<!-- If component is accepted to the Registry, uncomment this. -->
<!--
Or with [angle](https://npmjs.com/package/angle/), you can install the proper
version of the component straight into your HTML file, respective to your
version of A-Frame:

```sh
angle install aframe-pointcloud-component
```
-->

#### npm

Install via npm:

```bash
npm install aframe-pointcloud-component
```

Then require and use.

```js
require('aframe');
require('aframe-pointcloud-component');
```
