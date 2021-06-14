function solution(bridge_length, weight, truck_weights) {
  let time = 1;
  let onBridge = [];
  let afterBridge = [];
  let lengthFirstTruck_weights = truck_weights.length;
  for (let i = 0; i < bridge_length - 1; i++) onBridge[i] = 0;

  while (afterBridge.length !== lengthFirstTruck_weights) {
    time++;
    let truckWillOut = truck_weights[0] >= 0 ? truck_weights[0] : 0;
    let weightOnBridge = onBridge.reduce((a, truck_weight) => a + truck_weight);
    weightOnBridge + truckWillOut <= weight && truck_weights.length
      ? onBridge.push(truck_weights.shift())
      : onBridge.push(0);
    let bridgeOuted = onBridge.shift();
    if (bridgeOuted) afterBridge.push(bridgeOuted);
  }

  return time;
}
