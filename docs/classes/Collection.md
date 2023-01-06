[st.db](../README.md) / [Exports](../modules.md) / Collection

# Class: Collection

## Hierarchy

- **`Collection`**

  ↳ [`Action`](Action.md)

## Table of contents

### Constructors

- [constructor](Collection.md#constructor)

### Properties

- [map](Collection.md#map)

### Methods

- [clear](Collection.md#clear)
- [delete](Collection.md#delete)
- [deleteEach](Collection.md#deleteeach)
- [entries](Collection.md#entries)
- [findByIndex](Collection.md#findbyindex)
- [findByValue](Collection.md#findbyvalue)
- [findIndex](Collection.md#findindex)
- [get](Collection.md#get)
- [has](Collection.md#has)
- [isEmpty](Collection.md#isempty)
- [keys](Collection.md#keys)
- [math](Collection.md#math)
- [reverse](Collection.md#reverse)
- [set](Collection.md#set)
- [size](Collection.md#size)
- [toArray](Collection.md#toarray)
- [toJSON](Collection.md#tojson)
- [toObject](Collection.md#toobject)
- [values](Collection.md#values)

## Constructors

### constructor

• **new Collection**(`values?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `IterableIterator`<`any`\> |

#### Defined in

util/Collection.ts:4

## Properties

### map

• **map**: `Map`<`any`, `any`\>

#### Defined in

util/Collection.ts:3

## Methods

### clear

▸ **clear**(): `void`

**`Description`**

make clear elements of the map

#### Returns

`void`

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

#### Defined in

util/Collection.ts:108

___

### entries

▸ **entries**(): `IterableIterator`<`any`\>

**`Description`**

Get all entries

#### Returns

`IterableIterator`<`any`\>

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

#### Defined in

util/Collection.ts:175

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

util/Collection.ts:71

___

### keys

▸ **keys**(): `IterableIterator`<`any`\>

**`Description`**

Get all keys

#### Returns

`IterableIterator`<`any`\>

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

#### Defined in

util/Collection.ts:46

___

### reverse

▸ **reverse**(): `Map`<`any`, `any`\>

#### Returns

`Map`<`any`, `any`\>

#### Defined in

util/Collection.ts:95

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

#### Defined in

util/Collection.ts:141

___

### size

▸ **size**(): `number`

**`Description`**

It will return to you the size of the map

#### Returns

`number`

#### Defined in

util/Collection.ts:11

___

### toArray

▸ **toArray**(): `any`[]

#### Returns

`any`[]

#### Defined in

util/Collection.ts:59

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

util/Collection.ts:102

___

### toObject

▸ **toObject**(): `any`[]

#### Returns

`any`[]

#### Defined in

util/Collection.ts:65

___

### values

▸ **values**(): `IterableIterator`<`any`\>

**`Description`**

Get all values

#### Returns

`IterableIterator`<`any`\>

#### Defined in

util/Collection.ts:18
