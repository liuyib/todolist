import { KeyboardEvent } from 'react'

export interface IKeyboard {
  Enter: number
  [propName: string]: number
}

/**
 * 判断键盘上指定的键是否被触发
 * @param event
 * @param key - 键盘上的键名称（可选值：Enter | Backspace）
 * @returns
 */
export const isKeyboard = (event: KeyboardEvent, key: string) => {
  const keyboardType: IKeyboard = {
    Enter: 13,
    Backspace: 8,
  }
  const keyCode: number = event.charCode || event.keyCode
  const eventKey = event.key

  return key === eventKey || keyboardType[key] === keyCode
}
