// 複数箇所でINCREMENTなどは使用されるため変数化しておく
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'INCREMENT'

// 下記のINCREMENTとDECREMENTでは書き方が違うが、
// 上はリファクタリングが行われているだけで意味は同じ
export const increment = () => ({
        type: INCREMENT
})

export const decrement = () => {
    return {
        type: DECREMENT
    }
}
