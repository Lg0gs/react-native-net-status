import { NativeModules, NativeEventEmitter } from 'react-native';

const { NetStatus } = NativeModules;
NetStatus.isConnected(() => {});

// instantiate the event emitter
const CounterEvents = new NativeEventEmitter(NetStatus);
// CounterEvents.addListener('onStateChange', function() {});

// CounterEvents.addListener('onStateChange');
export default CounterEvents;
