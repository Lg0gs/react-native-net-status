#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(NetStatus, RCTEventEmitter)

RCT_EXTERN_METHOD(isConnected: (RCTResponseSenderBlock)callback)

@end
