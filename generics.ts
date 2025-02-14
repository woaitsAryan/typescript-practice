interface freeFunctionSignature {
  <T>(someArr: T[]): Promise<T[]>
}

interface lockedFunctionSignature<T> {
  (arg: T[]): Promise<T[]>
}


async function identity<T>(someArr: T[]): Promise<T[]> {
  console.log(someArr.length)
  return someArr
}

const testingFree: freeFunctionSignature = identity

const testingLocked: lockedFunctionSignature<number> = identity


interface hasLength {
  length: number
}

function lengthFunction<T extends hasLength>(arg: T): number {
  return arg.length
}

lengthFunction([1, 2])
lengthFunction({ length: 10, name: 'woop' })


function getProperty<T, M extends keyof T>(theObj: T, objProperty: M): T[M] {
  return theObj[objProperty]
}

const sampleObj = {
  name: "Aryan Bharti",
  age: 20
}

getProperty(sampleObj, 'age')

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  numLegs = 6;
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<T extends Animal>(c: new () => T): T {
  return new c()
}

createInstance(Lion).keeper.nametag

