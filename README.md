# react-native-net-status

detecting network status

## Installation

```sh
npm install react-native-net-status
```

## Usage

```js
import NetStatus from "react-native-net-status";

// ...
// You can set listener to subscribe state change event

NetStatus.addListener('onStateChange', (data) => setNetworkState(data.state));
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
