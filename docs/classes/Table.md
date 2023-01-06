[st.db](../README.md) / [Exports](../modules.md) / Table

# Class: Table

## Hierarchy

- [`Database`](Database.md)

  ↳ **`Table`**

## Table of contents

### Constructors

- [constructor](Table.md#constructor)

### Properties

- [ID](Table.md#id)
- [autoDecrypt](Table.md#autodecrypt)
- [crypto](Table.md#crypto)
- [encryption](Table.md#encryption)
- [fileExtension](Table.md#fileextension)
- [file\_exists](Table.md#file_exists)
- [inputPath](Table.md#inputpath)
- [isYML](Table.md#isyml)
- [options](Table.md#options)
- [parse](Table.md#parse)
- [path](Table.md#path)
- [pathOutsideTheProject](Table.md#pathoutsidetheproject)
- [readyInDate](Table.md#readyindate)
- [storageStyle](Table.md#storagestyle)
- [stringify](Table.md#stringify)
- [typeof](Table.md#typeof)
- [Style](Table.md#style)
- [captureRejectionSymbol](Table.md#capturerejectionsymbol)
- [captureRejections](Table.md#capturerejections)
- [defaultMaxListeners](Table.md#defaultmaxlisteners)
- [errorMonitor](Table.md#errormonitor)

### Accessors

- [cache](Table.md#cache)
- [fileSize](Table.md#filesize)
- [length](Table.md#length)
- [raw](Table.md#raw)
- [uptime](Table.md#uptime)

### Methods

- [action](Table.md#action)
- [add](Table.md#add)
- [addListener](Table.md#addlistener)
- [all](Table.md#all)
- [clear](Table.md#clear)
- [decryptString](Table.md#decryptstring)
- [delete](Table.md#delete)
- [deleteAll](Table.md#deleteall)
- [destroy](Table.md#destroy)
- [double](Table.md#double)
- [emit](Table.md#emit)
- [encryptString](Table.md#encryptstring)
- [endsWith](Table.md#endswith)
- [eventNames](Table.md#eventnames)
- [fetch](Table.md#fetch)
- [fetchAll](Table.md#fetchall)
- [filter](Table.md#filter)
- [get](Table.md#get)
- [getByValue](Table.md#getbyvalue)
- [getMaxListeners](Table.md#getmaxlisteners)
- [has](Table.md#has)
- [includes](Table.md#includes)
- [isEncryptString](Table.md#isencryptstring)
- [keysAll](Table.md#keysall)
- [listenerCount](Table.md#listenercount)
- [listeners](Table.md#listeners)
- [math](Table.md#math)
- [multiply](Table.md#multiply)
- [off](Table.md#off)
- [on](Table.md#on)
- [once](Table.md#once)
- [pop](Table.md#pop)
- [prependListener](Table.md#prependlistener)
- [prependOnceListener](Table.md#prependoncelistener)
- [pull](Table.md#pull)
- [push](Table.md#push)
- [rawListeners](Table.md#rawlisteners)
- [reload](Table.md#reload)
- [remove](Table.md#remove)
- [removeAllListeners](Table.md#removealllisteners)
- [removeListener](Table.md#removelistener)
- [set](Table.md#set)
- [setMaxListeners](Table.md#setmaxlisteners)
- [shift](Table.md#shift)
- [startsWith](Table.md#startswith)
- [subtract](Table.md#subtract)
- [type](Table.md#type)
- [unshift](Table.md#unshift)
- [valuesAll](Table.md#valuesall)
- [writeFileSync](Table.md#writefilesync)
- [getEventListeners](Table.md#geteventlisteners)
- [isNumeric](Table.md#isnumeric)
- [listenerCount](Table.md#listenercount-1)
- [on](Table.md#on-1)
- [once](Table.md#once-1)
- [setMaxListeners](Table.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Table**(`key`, `database`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `database` | [`Database`](Database.md) |

#### Overrides

[Database](Database.md).[constructor](Database.md#constructor)

#### Defined in

util/Table.ts:10

## Properties

### ID

• **ID**: ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"``

#### Defined in

util/Table.ts:7

___

### autoDecrypt

• `Readonly` **autoDecrypt**: `boolean`

#### Inherited from

[Database](Database.md).[autoDecrypt](Database.md#autodecrypt)

#### Defined in

util/Database.ts:32

___

### crypto

• **crypto**: `any`

#### Inherited from

[Database](Database.md).[crypto](Database.md#crypto)

#### Defined in

util/Database.ts:45

___

### encryption

• `Optional` `Readonly` **encryption**: `boolean`

#### Inherited from

[Database](Database.md).[encryption](Database.md#encryption)

#### Defined in

util/Database.ts:38

___

### fileExtension

• `Readonly` **fileExtension**: `string`

#### Inherited from

[Database](Database.md).[fileExtension](Database.md#fileextension)

#### Defined in

util/Database.ts:33

___

### file\_exists

• `Readonly` **file\_exists**: `boolean`

#### Inherited from

[Database](Database.md).[file_exists](Database.md#file_exists)

#### Defined in

util/Database.ts:44

___

### inputPath

• **inputPath**: `string`

#### Inherited from

[Database](Database.md).[inputPath](Database.md#inputpath)

#### Defined in

util/Database.ts:37

___

### isYML

• `Readonly` **isYML**: `boolean`

#### Inherited from

[Database](Database.md).[isYML](Database.md#isyml)

#### Defined in

util/Database.ts:34

___

### options

• **options**: `DatabaseOptions`

#### Inherited from

[Database](Database.md).[options](Database.md#options)

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

#### Inherited from

[Database](Database.md).[parse](Database.md#parse)

#### Defined in

util/Database.ts:47

___

### path

• `Readonly` **path**: `string`

#### Inherited from

[Database](Database.md).[path](Database.md#path)

#### Defined in

util/Database.ts:35

___

### pathOutsideTheProject

• **pathOutsideTheProject**: `boolean`

#### Inherited from

[Database](Database.md).[pathOutsideTheProject](Database.md#pathoutsidetheproject)

#### Defined in

util/Database.ts:30

___

### readyInDate

• `Readonly` **readyInDate**: `Date`

#### Inherited from

[Database](Database.md).[readyInDate](Database.md#readyindate)

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

#### Inherited from

[Database](Database.md).[storageStyle](Database.md#storagestyle)

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

#### Inherited from

[Database](Database.md).[stringify](Database.md#stringify)

#### Defined in

util/Database.ts:46

___

### typeof

• `Private` **typeof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` |
| `data` | ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` \| ``"array"`` |

#### Defined in

util/Table.ts:8

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

#### Inherited from

[Database](Database.md).[Style](Database.md#style)

#### Defined in

util/Database.ts:526

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Database.md#capturerejectionsymbol)

#### Inherited from

[Database](Database.md).[captureRejectionSymbol](Database.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:291

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[Database](Database.md).[captureRejections](Database.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:296

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[Database](Database.md).[defaultMaxListeners](Database.md#defaultmaxlisteners)

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

[Database](Database.md).[errorMonitor](Database.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:290

## Accessors

### cache

• `get` **cache**(): [`Collection`](Collection.md)

**`Description`**

to get the value of the element

#### Returns

[`Collection`](Collection.md)

#### Overrides

Database.cache

#### Defined in

util/Table.ts:20

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

#### Inherited from

Database.fileSize

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

#### Inherited from

Database.length

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

#### Inherited from

Database.raw

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

#### Inherited from

Database.uptime

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

#### Inherited from

[Database](Database.md).[action](Database.md#action)

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

#### Inherited from

[Database](Database.md).[add](Database.md#add)

#### Defined in

util/Database.ts:472

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`Table`](Table.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[addListener](Database.md#addlistener)

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

#### Inherited from

[Database](Database.md).[all](Database.md#all)

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

#### Inherited from

[Database](Database.md).[clear](Database.md#clear)

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

#### Inherited from

[Database](Database.md).[decryptString](Database.md#decryptstring)

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

#### Inherited from

[Database](Database.md).[delete](Database.md#delete)

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

#### Inherited from

[Database](Database.md).[deleteAll](Database.md#deleteall)

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

#### Inherited from

[Database](Database.md).[destroy](Database.md#destroy)

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

#### Inherited from

[Database](Database.md).[double](Database.md#double)

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

[Database](Database.md).[emit](Database.md#emit)

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

#### Inherited from

[Database](Database.md).[encryptString](Database.md#encryptstring)

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

#### Inherited from

[Database](Database.md).[endsWith](Database.md#endswith)

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

[Database](Database.md).[eventNames](Database.md#eventnames)

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

#### Inherited from

[Database](Database.md).[fetch](Database.md#fetch)

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

#### Inherited from

[Database](Database.md).[fetchAll](Database.md#fetchall)

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

#### Inherited from

[Database](Database.md).[filter](Database.md#filter)

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

#### Inherited from

[Database](Database.md).[get](Database.md#get)

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

#### Inherited from

[Database](Database.md).[getByValue](Database.md#getbyvalue)

#### Defined in

util/Database.ts:173

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Table.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[Database](Database.md).[getMaxListeners](Database.md#getmaxlisteners)

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

#### Inherited from

[Database](Database.md).[has](Database.md#has)

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

#### Inherited from

[Database](Database.md).[includes](Database.md#includes)

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

#### Inherited from

[Database](Database.md).[isEncryptString](Database.md#isencryptstring)

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

#### Inherited from

[Database](Database.md).[keysAll](Database.md#keysall)

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

[Database](Database.md).[listenerCount](Database.md#listenercount)

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

[Database](Database.md).[listeners](Database.md#listeners)

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

#### Inherited from

[Database](Database.md).[math](Database.md#math)

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

#### Inherited from

[Database](Database.md).[multiply](Database.md#multiply)

#### Defined in

util/Database.ts:483

___

### off

▸ **off**(`eventName`, `listener`): [`Table`](Table.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[off](Database.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:462

___

### on

▸ **on**(`eventName`, `listener`): [`Table`](Table.md)

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

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[on](Database.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:348

___

### once

▸ **once**(`eventName`, `listener`): [`Table`](Table.md)

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

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[once](Database.md#once)

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

#### Inherited from

[Database](Database.md).[pop](Database.md#pop)

#### Defined in

util/Database.ts:242

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Table`](Table.md)

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

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[prependListener](Database.md#prependlistener)

#### Defined in

node_modules/@types/node/events.d.ts:597

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Table`](Table.md)

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

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[prependOnceListener](Database.md#prependoncelistener)

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

#### Inherited from

[Database](Database.md).[pull](Database.md#pull)

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

#### Inherited from

[Database](Database.md).[push](Database.md#push)

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

[Database](Database.md).[rawListeners](Database.md#rawlisteners)

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

#### Inherited from

[Database](Database.md).[reload](Database.md#reload)

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

#### Inherited from

[Database](Database.md).[remove](Database.md#remove)

#### Defined in

util/Database.ts:126

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Table`](Table.md)

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

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[removeAllListeners](Database.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:473

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Table`](Table.md)

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

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[removeListener](Database.md#removelistener)

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

#### Inherited from

[Database](Database.md).[set](Database.md#set)

#### Defined in

util/Database.ts:110

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Table`](Table.md)

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

[`Table`](Table.md)

#### Inherited from

[Database](Database.md).[setMaxListeners](Database.md#setmaxlisteners)

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

#### Inherited from

[Database](Database.md).[shift](Database.md#shift)

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

#### Inherited from

[Database](Database.md).[startsWith](Database.md#startswith)

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

#### Inherited from

[Database](Database.md).[subtract](Database.md#subtract)

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

#### Inherited from

[Database](Database.md).[type](Database.md#type)

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

#### Inherited from

[Database](Database.md).[unshift](Database.md#unshift)

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

#### Inherited from

[Database](Database.md).[valuesAll](Database.md#valuesall)

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

#### Overrides

[Database](Database.md).[writeFileSync](Database.md#writefilesync)

#### Defined in

util/Table.ts:30

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

[Database](Database.md).[getEventListeners](Database.md#geteventlisteners)

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

#### Inherited from

[Database](Database.md).[isNumeric](Database.md#isnumeric)

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

[Database](Database.md).[listenerCount](Database.md#listenercount-1)

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

[Database](Database.md).[on](Database.md#on-1)

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

[Database](Database.md).[once](Database.md#once-1)

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

[Database](Database.md).[once](Database.md#once-1)

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

[Database](Database.md).[setMaxListeners](Database.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/events.d.ts:280
