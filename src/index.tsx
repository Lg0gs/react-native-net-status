import { NativeModules, NativeEventEmitter } from 'react-native';

const { NetStatus } = NativeModules;

// instantiate the event emitter
const CounterEvents = new NativeEventEmitter(NetStatus);
NetStatus.isConnected(() => {});
// CounterEvents.addListener('onStateChange', function() {});

// CounterEvents.addListener('onStateChange');
export default CounterEvents;
