[st.db](../README.md) / [Exports](../modules.md) / ElementInData

# Class: ElementInData

## Table of contents

### Constructors

- [constructor](ElementInData.md#constructor)

### Properties

- [ID](ElementInData.md#id)
- [data](ElementInData.md#data)
- [typeof](ElementInData.md#typeof)

### Methods

- [delete](ElementInData.md#delete)
- [edit](ElementInData.md#edit)
- [remove](ElementInData.md#remove)

## Constructors

### constructor

• **new ElementInData**(`key`, `database`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `database` | [`Database`](Database.md) |

#### Defined in

util/ElementInData.ts:8

## Properties

### ID

• **ID**: `any`

#### Defined in

util/ElementInData.ts:4

___

### data

• **data**: `any`

#### Defined in

util/ElementInData.ts:5

___

### typeof

• `Readonly` **typeof**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ID` | ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` |
| `data` | ``"string"`` \| ``"number"`` \| ``"bigint"`` \| ``"boolean"`` \| ``"symbol"`` \| ``"undefined"`` \| ``"object"`` \| ``"function"`` |

#### Defined in

util/ElementInData.ts:6

## Methods

### delete

▸ **delete**(): `Promise`<`boolean`\>

**`Name`**

delete

#### Returns

`Promise`<`boolean`\>

#### Defined in

util/ElementInData.ts:25

___

### edit

▸ **edit**(`input`): `any`

**`Name`**

edit

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Object` |
| `input.key?` | `any` |
| `input.value?` | `any` |

#### Returns

`any`

#### Defined in

util/ElementInData.ts:33

___

### remove

▸ **remove**(): `Promise`<`boolean`\>

**`Name`**

remove

#### Returns

`Promise`<`boolean`\>

#### Defined in

util/ElementInData.ts:18
