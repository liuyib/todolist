import { KeyboardEvent } from 'react'

export interface IKeyboard {
  Enter: number
  Backspace: number
  [propName: string]: number
}

/**
 * 键盘上的指定键被按下后，执行回调函数
 * @param key - 键盘上的键名称（可选值：Enter | Backspace）
 * @param cb - 回调函数
 * @returns Function
 */
export const onKeyPress = (key: string, cb: Function) => {
  return (event: KeyboardEvent) => {
    const keyboardType: IKeyboard = {
      Enter: 13,
      Backspace: 8,
    }

    const keyCode: number = event.charCode || event.keyCode
    const eventKey = event.key

    if (key === eventKey || keyboardType[key] === keyCode) {
      cb()
    }
  }
}

/**
 * 判断 key 是否是 obj 的键
 */
export const isObjKey = (
  key: string | number,
  obj: object,
): key is keyof typeof obj => {
  return key in obj
}

/**
 * 判断是否是空对象
 */
export const isEmptyObj = (obj: object): boolean => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false
    }
  }

  return JSON.stringify(obj) === JSON.stringify({})
}
