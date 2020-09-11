import Network

@objc(NetStatus)
class NetStatus: RCTEventEmitter {

    @objc(isConnected:)
    func isConnected(_ callback: @escaping RCTResponseSenderBlock) -> Void {
        if #available(iOS 12, *) {
            let monitor = NWPathMonitor()
            
            monitor.pathUpdateHandler = { path in
                if path.status == .satisfied {
                    self.sendEvent(withName: "onStateChange", body: ["state": true])
                } else {
                    self.sendEvent(withName: "onStateChange", body: ["state": false])
                }
            }
            
            let queue = DispatchQueue(label: "Network")
            monitor.start(queue: queue)
        }
    }
    
    // we need to override this method and
    // return an array of event names that we can listen to
    override func supportedEvents() -> [String]! {
      return ["onStateChange"]
    }
}
