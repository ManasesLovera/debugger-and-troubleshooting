function StoreAndDeleteWithObject(
    cleaningFunction: (object: { store: number[] }) => void
  ) {
    const storeObject: { store: number[] } = { store: [] };
    console.log(`initial store size: ${storeObject.store.length}`);

    for (let i = 0; i < 10000; i++) {
      storeObject.store.push(i);
    }

    console.log(`intermediate store size: ${storeObject.store.length}`);

    cleaningFunction(storeObject);
    
    console.log(`final store size: ${storeObject.store.length}`);
  }
  
StoreAndDeleteWithObject((storedObject) => {
    storedObject.store = [];
}); 