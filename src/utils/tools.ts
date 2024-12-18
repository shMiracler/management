interface UrlParams { // 地址栏参数类型声明
    [key: string]: string
}

interface ClipboardParams { // 调用剪贴板参数类型
    content: any,
    state: boolean
}

/**
 * @description 返回地址栏携带的参数
 * @param {string} url http://xxxxx?name=xx&age=xx 地址
 * @return {object} { name: xxx, age: xxx }
*/
export const queryString = (url:string = location.href):UrlParams => {
    const urlQuery:UrlParams = {}
    url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (urlQuery[k] = v))
    return urlQuery
}

/** 
 * @description 复制内容
 * @param {object} value
 * @param {any} value.content 要复制的内容
 * @param {boolean} value.state 是否方法内提示复制的状态
 */
export const copyContent = async (value: ClipboardParams) => {
    if (!navigator.clipboard) throw new Error('浏览器不支持clipboard API')
    return new Promise(resolve => {
        return navigator.clipboard.writeText(value.content).then(() => resolve(true)).catch(() => resolve(false))
    }) 
}

/** 
 * @description 将对象序列化
 * @param {object} value
 * @return {string} 'key=value&key=value'
*/
export const serializationData = (value:UrlParams): string => {
    const source: Array<string> = Object.keys(value)
    const len = source.length - 1
    if (len === 0) return ''
    return source.reduce((pre, next, index) => { 
        return pre += `${next}=${value[next]}${index !== len ? '&' : ''}`
    }, '')
}

/**
 * @description 将字符串反序列化
 */
export const deserializationData = (value: string) => {
    if (!value) return {}
    const list = value.split('&')
    console.log(list)
}