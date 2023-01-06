[st.db](../README.md) / [Exports](../modules.md) / Database

# Class: Database

## Hierarchy

- `EventEmitter`

  ↳ **`Database`**

  ↳↳ [`Table`](Table.md)

## Table of contents

### Constructors

- [constructor](Database.md#constructor)

### Properties

- [autoDecrypt](Database.md#autodecrypt)
- [crypto](Database.md#crypto)
- [encryption](Database.md#encryption)
- [encryptionPassword](Database.md#encryptionpassword)
- [fileExtension](Database.md#fileextension)
- [file\_exists](Database.md#file_exists)
- [inputPath](Database.md#inputpath)
- [isYML](Database.md#isyml)
- [options](Database.md#options)
- [parse](Database.md#parse)
- [path](Database.md#path)
- [pathOutsideTheProject](Database.md#pathoutsidetheproject)
- [readyInDate](Database.md#readyindate)
- [storageStyle](Database.md#storagestyle)
- [stringify](Database.md#stringify)
- [Style](Database.md#style)
- [captureRejectionSymbol](Database.md#capturerejectionsymbol)
- [captureRejections](Database.md#capturerejections)
- [defaultMaxListeners](Database.md#defaultmaxlisteners)
- [errorMonitor](Database.md#errormonitor)

### Accessors

- [cache](Database.md#cache)
- [fileSize](Database.md#filesize)
- [length](Database.md#length)
- [raw](Database.md#raw)
- [uptime](Database.md#uptime)

### Methods

- [action](Database.md#action)
- [add](Database.md#add)
- [addListener](Database.md#addlistener)
- [all](Database.md#all)
- [clear](Database.md#clear)
- [decryptString](Database.md#decryptstring)
- [delete](Database.md#delete)
- [deleteAll](Database.md#deleteall)
- [destroy](Database.md#destroy)
- [double](Database.md#double)
- [emit](Database.md#emit)
- [encryptString](Database.md#encryptstring)
- [endsWith](Database.md#endswith)
- [eventNames](Database.md#eventnames)
- [fetch](Database.md#fetch)
- [fetchAll](Database.md#fetchall)
- [filter](Database.md#filter)
- [get](Database.md#get)
- [getByValue](Database.md#getbyvalue)
- [getMaxListeners](Database.md#getmaxlisteners)
- [has](Database.md#has)
- [includes](Database.md#includes)
- [isEncryptString](Database.md#isencryptstring)
- [keysAll](Database.md#keysall)
- [listenerCount](Database.md#listenercount)
- [listeners](Database.md#listeners)
- [math](Database.md#math)
- [multiply](Database.md#multiply)
- [off](Database.md#off)
- [on](Database.md#on)
- [once](Database.md#once)
- [pop](Database.md#pop)
- [prependListener](Database.md#prependlistener)
- [prependOnceListener](Database.md#prependoncelistener)
- [pull](Database.md#pull)
- [push](Database.md#push)
- [rawListeners](Database.md#rawlisteners)
- [reload](Database.md#reload)
- [remove](Database.md#remove)
- [removeAllListeners](Database.md#removealllisteners)
- [removeListener](Database.md#removelistener)
- [set](Database.md#set)
- [setMaxListeners](Database.md#setmaxlisteners)
- [shift](Database.md#shift)
- [startsWith](Database.md#startswith)
- [subtract](Database.md#subtract)
- [type](Database.md#type)
- [unshift](Database.md#unshift)
- [valuesAll](Database.md#valuesall)
- [writeFileSync](Database.md#writefilesync)
- [getEventListeners](Database.md#geteventlisteners)
- [isNumeric](Database.md#isnumeric)
- [listenerCount](Database.md#listenercount-1)
- [on](Database.md#on-1)
- [once](Database.md#once-1)
- [setMaxListeners](Database.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Database**(`path`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | `DatabaseOptions` |

#### Overrides

EventEmitter.constructor

#### Defined in

util/Database.ts:49

## Properties

### autoDecrypt

• `Readonly` **autoDecrypt**: `boolean`

#### Defined in

util/Database.ts:32

___

### crypto

• **crypto**: `any`

#### Defined in

util/Database.ts:45

___

### encryption

• `Optional` `Readonly` **encryption**: `boolean`

#### Defined in

util/Database.ts:38

___

### encryptionPassword

• `Private` `Optional` **encryptionPassword**: `string`

#### Defined in

util/Database.ts:39

___

### fileExtension

• `Readonly` **fileExtension**: `string`

#### Defined in

util/Database.ts:33

___

### file\_exists

• `Readonly` **file\_exists**: `boolean`

#### Defined in

util/Database.ts:44

___

### inputPath

• **inputPath**: `string`

#### Defined in

util/Database.ts:37

___

### isYML

• `Readonly` **isYML**: `boolean`

#### Defined in

util/Database.ts:34

___

### options

• **options**: `DatabaseOptions`

#### Defined in

util/Database.ts:31

___

### parse

• **parse**: (`x`: `any`) => `any`

#### Type declaration

▸ (`x`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

##### Returns

`any`

#### Defined in

util/Database.ts:47

___

### path

• `Readonly` **path**: `string`

#### Defined in

util/Database.ts:35

___

### pathOutsideTheProject

• **pathOutsideTheProject**: `boolean`

#### Defined in

util/Database.ts:30

___

### readyInDate

• `Readonly` **readyInDate**: `Date`

#### Defined in

util/Database.ts:36

___

### storageStyle

• **storageStyle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `reading_format` | (`input`: `any`) => `any` |
| `writing_format` | (`input`: `any`) => `any` |

#### Defined in

util/Database.ts:40

___

### stringify

• **stringify**: (`x`: `any`) => `any`

#### Type declaration

▸ (`x`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

##### Returns

`any`

#### Defined in

util/Database.ts:46

___

### Style

▪ `Static` **Style**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Array` | { `reading_format`: (`a`: `any`) => `any` ; `writing_format`: <T\>(`arrayLike`: `ArrayLike`<`T`\>) => `T`[]<T, U\>(`arrayLike`: `ArrayLike`<`T`\>, `mapfn`: (`v`: `T`, `k`: `number`) => `U`, `thisArg?`: `any`) => `U`[]<T\>(`iterable`: `Iterable`<`T`\> \| `ArrayLike`<`T`\>) => `T`[]<T, U\>(`iterable`: `Iterable`<`T`\> \| `ArrayLike`<`T`\>, `mapfn`: (`v`: `T`, `k`: `number`) => `U`, `thisArg?`: `any`) => `U`[] = Array.from } |
| `Array.reading_format` | (`a`: `any`) => `any` |
| `Array.writing_format` | <T\>(`arrayLike`: `ArrayLike`<`T`\>) => `T`[]<T, U\>(`arrayLike`: `ArrayLike`<`T`\>, `mapfn`: (`v`: `T`, `k`: `number`) => `U`, `thisArg?`: `any`) => `U`[]<T\>(`iterable`: `Iterable`<`T`\> \| `ArrayLike`<`T`\>) => `T`[]<T, U\>(`iterable`: `Iterable`<`T`\> \| `ArrayLike`<`T`\>, `mapfn`: (`v`: `T`, `k`: `number`) => `U`, `thisArg?`: `any`) => `U`[] |
| `Object` | { `reading_format`: <T\>(`o`: { `[s: string]`: `T`;  } \| `ArrayLike`<`T`\>) => [`string`, `T`][](`o`: {}) => [`string`, `any`][] = Object.entries; `writing_format`: <T\>(`entries`: `Iterable`<readonly [`PropertyKey`, `T`]\>) => { `[k: string]`: `T`;  }(`entries`: `Iterable`<readonly `any`[]\>) => `any` = Object.fromEntries } |
| `Object.reading_format` | <T\>(`o`: { `[s: string]`: `T`;  } \| `ArrayLike`<`T`\>) => [`string`, `T`][](`o`: {}) => [`string`, `any`][] |
| `Object.writing_format` | <T\>(`entries`: `Iterable`<readonly [`PropertyKey`, `T`]\>) => { `[k: string]`: `T`;  }(`entries`: `Iterable`<readonly `any`[]\>) => `any` |

#### Defined in

util/Database.ts:526

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Database.md#capturerejectionsymbol)

#### Inherited from

EventEmitter.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:291

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

EventEmitter.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:296

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

EventEmitter.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:297

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Database.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

EventEmitter.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:290

## Accessors

### cache

• `get` **cache**(): [`Collection`](Collection.md)

**`Description`**

Read the file and return the data

**`Example`**

```ts
<db>.cache
```

#### Returns

[`Collection`](Collection.md)

#### Defined in

util/Database.ts:81

___

### fileSize

• `get` **fileSize**(): `Object`

**`Description`**

To get the file size

**`Example`**

```ts
<db>.fileSize
```

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `byte` | `number` |
| `kiloBytes` | `number` |
| `megaBytes` | `number` |

#### Defined in

util/Database.ts:216

___

### length

• `get` **length**(): () => `number`

**`Description`**

Returns the number of items in the database

#### Returns

`fn`

▸ (): `number`

**`Description`**

It will return to you the size of the map

##### Returns

`number`

#### Defined in

util/Database.ts:208

___

### raw

• `get` **raw**(): `any`

**`Description`**

See the raw data

**`Example`**

```ts
<db>.raw
```

#### Returns

`any`

#### Defined in

util/Database.ts:90

___

### uptime

• `get` **uptime**(): `number`

**`Description`**

Returns database connection uptime!

**`Example`**

console.log(`Database is up for ${db.uptime} ms.`);

#### Returns

`number`

#### Defined in

util/Database.ts:337

## Methods

### action

▸ **action**(): [`Action`](Action.md)

**`Description`**

Action is a class that is a dummy database where you can implement your methods without affecting the main database itself and save it for later whenever you want!

**`Example`**

```ts
<db>.action()
```

#### Returns

[`Action`](Action.md)

#### Defined in

util/Database.ts:493

___

### add

▸ **add**(`key`, `value?`): `Promise`<`void`\>

**`Example`**

<db>.add({key:`data`,value:2)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Data key |
| `value?` | `any` | The value, must be a number |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:472

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Database`](Database.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:317

___

### all

▸ **all**(`limit?`): [`ElementInData`](ElementInData.md)[]

**`Description`**

Returns all elements in Database

**`Example`**

```ts
<db>.all()
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `limit` | `number` | `0` | default = 0 |

#### Returns

[`ElementInData`](ElementInData.md)[]

#### Defined in

util/Database.ts:151

___

### clear

▸ **clear**(): `Promise`<`void`\>

**`Description`**

Clean all data

**`Example`**

```ts
<db>.clear()
```

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:388

___

### decryptString

▸ **decryptString**(`value`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string` \| `number`

#### Defined in

util/Database.ts:359

___

### delete

▸ **delete**(`key`): `Promise`<`boolean`\>

**`Description`**

delete element from database

**`Example`**

<db>.delete({key:`version`})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |

#### Returns

`Promise`<`boolean`\>

Promise<boolean>

#### Defined in

util/Database.ts:135

___

### deleteAll

▸ **deleteAll**(): `Promise`<`void`\>

**`Description`**

Delete all data

**`Example`**

```ts
<db>.deleteAll()
```

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:398

___

### destroy

▸ **destroy**(): `void`

**`Description`**

Destroy the database

**`Example`**

```ts
<db>.destroy()
```

#### Returns

`void`

#### Defined in

util/Database.ts:406

___

### double

▸ **double**(`key`, `value?`): `Promise`<`void`\>

**`Example`**

```ts
<db>.double({key:"coins"})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Data key |
| `value?` | `any` | The value, must be a number |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:502

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:573

___

### encryptString

▸ **encryptString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

util/Database.ts:329

___

### endsWith

▸ **endsWith**(`key`): { `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

**`Description`**

Check if the key ends with the key in the database

**`Example`**

<db>.endsWith({key:`st.db`})

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

{ `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

#### Defined in

util/Database.ts:425

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:632

___

### fetch

▸ **fetch**(`key`): `any`

**`Description`**

To fetch the value of a specific key element

**`Example`**

<db>.fetch({key:`version`})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |

#### Returns

`any`

#### Defined in

util/Database.ts:202

___

### fetchAll

▸ **fetchAll**(`limit?`): [`ElementInData`](ElementInData.md)[]

**`Description`**

Returns all elements in Database

**`Example`**

```ts
<db>.fetchAll()
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `limit` | `number` | `0` | default = 0 |

#### Returns

[`ElementInData`](ElementInData.md)[]

#### Defined in

util/Database.ts:165

___

### filter

▸ **filter**(`callback`, `argument?`): { `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

**`Description`**

Filter the database by the key

**`Example`**

```ts
<db>.filter(t => t == "test")
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |
| `argument?` | `any` |

#### Returns

{ `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

#### Defined in

util/Database.ts:435

___

### get

▸ **get**(`key`, `value?`): `any`

**`Description`**

To get the value of a specific key element

**`Example`**

<db>.get({key:`version`})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |
| `value?` | `any` | - |

#### Returns

`any`

Boolean

#### Defined in

util/Database.ts:185

___

### getByValue

▸ **getByValue**(`value`): ``false`` \| { `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

**`Description`**

Get all the elements in the database of value

**`Example`**

<db>.getByValue({value:`v6`})

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

``false`` \| { `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

#### Defined in

util/Database.ts:173

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Database.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:489

___

### has

▸ **has**(`key`): `boolean`

**`Description`**

Checking an item from the database if it exists or not

**`Example`**

<db>.has({key:`version`})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |

#### Returns

`boolean`

#### Defined in

util/Database.ts:319

___

### includes

▸ **includes**(`key`): { `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

**`Description`**

Check if the key includes with the key in the database

**`Example`**

<db>.includes({key:`st.db`})

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

{ `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

#### Defined in

util/Database.ts:445

___

### isEncryptString

▸ **isEncryptString**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

util/Database.ts:369

___

### keysAll

▸ **keysAll**(): `any`[]

**`Example`**

```ts
<db>.keysAll()
```

#### Returns

`any`[]

#### Defined in

util/Database.ts:352

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:579

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:502

___

### math

▸ **math**(`key`, `operator?`, `new_value?`, `goToNegative?`): `Promise`<`void`\>

**`Description`**

Does a math calculation and stores the value in the database!

**`Example`**

```ts
db.math({key:"points",operator:"+",value:150})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Data key |
| `operator?` | ``"-"`` \| ``"+"`` \| ``"*"`` \| ``"/"`` | One of +, -, %, * or / |
| `new_value?` | `string` \| `number` | - |
| `goToNegative?` | `boolean` | Move to negative |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:457

___

### multiply

▸ **multiply**(`key`, `value?`): `Promise`<`void`\>

**`Example`**

```ts
<db>.multiply({key:"coins", value:2})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Data key |
| `value?` | `any` | The value, must be a number |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:483

___

### off

▸ **off**(`eventName`, `listener`): [`Database`](Database.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:462

___

### on

▸ **on**(`eventName`, `listener`): [`Database`](Database.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:348

___

### once

▸ **once**(`eventName`, `listener`): [`Database`](Database.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:377

___

### pop

▸ **pop**(`key`): `any`

**`Description`**

**`Example`**

<db>.pop({key:`hello`})

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Defined in

util/Database.ts:242

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Database`](Database.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:597

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Database`](Database.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:613

___

### pull

▸ **pull**(`key`, `value?`): `Promise`<[`ElementInData`](ElementInData.md)\>

**`Description`**

To pull an element from an array into data

**`Example`**

<db>.pull({key:`version`,value:"v6"})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |
| `value?` | `any` | - |

#### Returns

`Promise`<[`ElementInData`](ElementInData.md)\>

#### Defined in

util/Database.ts:258

___

### push

▸ **push**(`key`, `value?`): `Promise`<`void`\>

**`Description`**

To push an element to an array into data

**`Example`**

<db>.push({key:`version`,value:"v6"})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |
| `value?` | `any` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:270

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:532

___

### reload

▸ **reload**(`timeout?`): `Promise`<`void`\>

**`Description`**

Reload the database

**`Example`**

```ts
<db>.reload(200)
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout` | `number` | `200` | Data relord working period |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:378

___

### remove

▸ **remove**(`key`): `Promise`<`boolean`\>

**`Description`**

delete element from database

**`Example`**

<db>.delete({key:`version`})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |

#### Returns

`Promise`<`boolean`\>

#### Defined in

util/Database.ts:126

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Database`](Database.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:473

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Database`](Database.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:457

___

### set

▸ **set**(`key`, `value?`): `Promise`<[`ElementInData`](ElementInData.md)\>

**`Description`**

set element in database

**`Example`**

<db>.set({key:`version`,value:"v6"})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |
| `value?` | `any` | Type a value for the element |

#### Returns

`Promise`<[`ElementInData`](ElementInData.md)\>

#### Defined in

util/Database.ts:110

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Database`](Database.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Database`](Database.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### shift

▸ **shift**(`key`): `Promise`<[`ElementInData`](ElementInData.md)\>

**`Description`**

Removes the first element of the array

**`Example`**

<db>.shift({key:`hello`})

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`Promise`<[`ElementInData`](ElementInData.md)\>

#### Defined in

util/Database.ts:226

___

### startsWith

▸ **startsWith**(`key`): { `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

**`Description`**

Check if the key starts with the key in the database

**`Example`**

<db>.startsWith({key:`st.db`})

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

{ `ID`: `any` ; `data`: `any` ; `typeof`: { `ID`: `string` ; `data`: `string`  }  }[]

#### Defined in

util/Database.ts:416

___

### subtract

▸ **subtract**(`key`, `value?`): `Promise`<`void`\>

**`Example`**

```ts
<db>.subtract({key:"coins", value:50})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Data key |
| `value?` | `any` | The value, must be a number |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:513

___

### type

▸ **type**(`key`): ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` \| ``"array"``

**`Description`**

To get the value type of a given key element

**`Example`**

<db>.type({key:`st.db`})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |

#### Returns

``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` \| ``"array"``

#### Defined in

util/Database.ts:308

___

### unshift

▸ **unshift**(`key`, `value?`): `Promise`<`void`\>

**`Description`**

To unshift an element to an array into data

**`Example`**

<db>.unshift({key:`version`,value:["v6"]})

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `any` | Type a key for the element |
| `value?` | `any` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:287

___

### valuesAll

▸ **valuesAll**(): `any`[]

**`Example`**

```ts
<db>.valuesAll()
```

#### Returns

`any`[]

#### Defined in

util/Database.ts:345

___

### writeFileSync

▸ **writeFileSync**(`collection`): `Promise`<`void`\>

**`Description`**

Write the data in the file

**`Example`**

```ts
<db>.writeFileSync()
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | [`Collection`](Collection.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Database.ts:100

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### isNumeric

▸ `Static` **isNumeric**(`val`): `boolean`

**`Description`**

Check if the value is numeric

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `string` \| `number` |

#### Returns

`boolean`

#### Defined in

util/Database.ts:523

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:158

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:280
