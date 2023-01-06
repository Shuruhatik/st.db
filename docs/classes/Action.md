[st.db](../README.md) / [Exports](../modules.md) / Action

# Class: Action

**`Description`**

Action is a class that is a dummy database where you can implement your methods without affecting the main database itself and save it for later whenever you want!

## Hierarchy

- [`Collection`](Collection.md)

  ↳ **`Action`**

## Table of contents

### Constructors

- [constructor](Action.md#constructor)

### Properties

- [capture](Action.md#capture)
- [map](Action.md#map)

### Methods

- [clear](Action.md#clear)
- [delete](Action.md#delete)
- [deleteEach](Action.md#deleteeach)
- [entries](Action.md#entries)
- [findByIndex](Action.md#findbyindex)
- [findByValue](Action.md#findbyvalue)
- [findIndex](Action.md#findindex)
- [get](Action.md#get)
- [has](Action.md#has)
- [isEmpty](Action.md#isempty)
- [keys](Action.md#keys)
- [math](Action.md#math)
- [reload](Action.md#reload)
- [reverse](Action.md#reverse)
- [save](Action.md#save)
- [set](Action.md#set)
- [size](Action.md#size)
- [toArray](Action.md#toarray)
- [toJSON](Action.md#tojson)
- [toObject](Action.md#toobject)
- [undo](Action.md#undo)
- [values](Action.md#values)

## Constructors

### constructor

• **new Action**(`database`, `values?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `database` | [`Database`](Database.md) |
| `values?` | `IterableIterator`<`any`\> |

#### Overrides

[Collection](Collection.md).[constructor](Collection.md#constructor)

#### Defined in

util/Action.ts:12

## Properties

### capture

• **capture**: [`Collection`](Collection.md)

#### Defined in

util/Action.ts:11

___

### map

• **map**: `Map`<`any`, `any`\>

#### Inherited from

[Collection](Collection.md).[map](Collection.md#map)

#### Defined in

util/Collection.ts:3

## Methods

### clear

▸ **clear**(): `void`

**`Description`**

make clear elements of the map

#### Returns

`void`

#### Inherited from

[Collection](Collection.md).[clear](Collection.md#clear)

#### Defined in

util/Collection.ts:39

___

### delete

▸ **delete**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`void`

#### Inherited from

[Collection](Collection.md).[delete](Collection.md#delete)

#### Defined in

util/Collection.ts:122

___

### deleteEach

▸ **deleteEach**(...`keys`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | `any` |

#### Returns

`void`

#### Inherited from

[Collection](Collection.md).[deleteEach](Collection.md#deleteeach)

#### Defined in

util/Collection.ts:108

___

### entries

▸ **entries**(): `IterableIterator`<`any`\>

**`Description`**

Get all entries

#### Returns

`IterableIterator`<`any`\>

#### Inherited from

[Collection](Collection.md).[entries](Collection.md#entries)

#### Defined in

util/Collection.ts:25

___

### findByIndex

▸ **findByIndex**(`index`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`any`

#### Inherited from

[Collection](Collection.md).[findByIndex](Collection.md#findbyindex)

#### Defined in

util/Collection.ts:83

___

### findByValue

▸ **findByValue**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

[Collection](Collection.md).[findByValue](Collection.md#findbyvalue)

#### Defined in

util/Collection.ts:89

___

### findIndex

▸ **findIndex**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`number`

number

#### Inherited from

[Collection](Collection.md).[findIndex](Collection.md#findindex)

#### Defined in

util/Collection.ts:77

___

### get

▸ **get**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`any`

#### Inherited from

[Collection](Collection.md).[get](Collection.md#get)

#### Defined in

util/Collection.ts:156

___

### has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Inherited from

[Collection](Collection.md).[has](Collection.md#has)

#### Defined in

util/Collection.ts:175

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Collection](Collection.md).[isEmpty](Collection.md#isempty)

#### Defined in

util/Collection.ts:71

___

### keys

▸ **keys**(): `IterableIterator`<`any`\>

**`Description`**

Get all keys

#### Returns

`IterableIterator`<`any`\>

#### Inherited from

[Collection](Collection.md).[keys](Collection.md#keys)

#### Defined in

util/Collection.ts:32

___

### math

▸ **math**(`key`, `operator`, `value`, `goToNegative?`): `void`

**`Description`**

Add an element with an arithmetic operation to the map

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `operator` | ``"-"`` \| ``"+"`` \| ``"*"`` \| ``"/"`` | `undefined` |
| `value` | `string` \| `number` | `undefined` |
| `goToNegative` | `boolean` | `false` |

#### Returns

`void`

#### Inherited from

[Collection](Collection.md).[math](Collection.md#math)

#### Defined in

util/Collection.ts:46

___

### reload

▸ **reload**(): [`Action`](Action.md)

**`Name`**

reload

#### Returns

[`Action`](Action.md)

#### Defined in

util/Action.ts:40

___

### reverse

▸ **reverse**(): `Map`<`any`, `any`\>

#### Returns

`Map`<`any`, `any`\>

#### Inherited from

[Collection](Collection.md).[reverse](Collection.md#reverse)

#### Defined in

util/Collection.ts:95

___

### save

▸ **save**(`database?`): `Promise`<`void`\>

**`Name`**

save

**`Description`**

Now it saves the data from cache to the database

#### Parameters

| Name | Type |
| :------ | :------ |
| `database?` | [`Database`](Database.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

util/Action.ts:31

___

### set

▸ **set**(`key`, `value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value` | `any` |

#### Returns

`any`

#### Inherited from

[Collection](Collection.md).[set](Collection.md#set)

#### Defined in

util/Collection.ts:141

___

### size

▸ **size**(): `number`

**`Description`**

It will return to you the size of the map

#### Returns

`number`

#### Inherited from

[Collection](Collection.md).[size](Collection.md#size)

#### Defined in

util/Collection.ts:11

___

### toArray

▸ **toArray**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[Collection](Collection.md).[toArray](Collection.md#toarray)

#### Defined in

util/Collection.ts:59

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

[Collection](Collection.md).[toJSON](Collection.md#tojson)

#### Defined in

util/Collection.ts:102

___

### toObject

▸ **toObject**(): `any`[]

#### Returns

`any`[]

#### Inherited from

[Collection](Collection.md).[toObject](Collection.md#toobject)

#### Defined in

util/Collection.ts:65

___

### undo

▸ **undo**(): [`Action`](Action.md)

**`Name`**

undo

**`Description`**

Back to the state of database when th action was initiated!

#### Returns

[`Action`](Action.md)

#### Defined in

util/Action.ts:22

___

### values

▸ **values**(): `IterableIterator`<`any`\>

**`Description`**

Get all values

#### Returns

`IterableIterator`<`any`\>

#### Inherited from

[Collection](Collection.md).[values](Collection.md#values)

#### Defined in

util/Collection.ts:18
