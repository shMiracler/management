import { cloneDeep } from 'lodash-es'

// cookie 对象键值对
interface CookieObj {
    [key: string]: string
}

type SetCookieParams = {
    name: string,
    value: string,
    isEncoding?: boolean,
    expires?: number,
    path?: string
}

class Cookie {
    cookieMap: Record<string, string>
    constructor() {
        this.cookieMap = {} as Record<string, string>
        this.init()
    }
    private init(): void {
        const cookie: string = document.cookie || ''
        if(!cookie) return 
        const cookieResult: string[] = cookie.split('; ')
        const target:CookieObj = {}
        for (const v of cookieResult) {
            const [name, value] = v.split('=')
            target[name] = value
        }
        this.cookieMap = target
    }
    get(name:string, isEncoding = false): string {
        if (!Reflect.has(this.cookieMap, name)) return ''
        const res = Reflect.get(this.cookieMap, name)
        return isEncoding ? decodeURIComponent(res) : res
    }
    set(params: SetCookieParams): void {
        const { name, value, isEncoding = false, expires = 7, path = '/' } = params || {}
        const target: CookieObj = cloneDeep(this.cookieMap)
        const sourceValue: string = isEncoding ? encodeURIComponent(value) : value
        Reflect.set(target, name, sourceValue)
        // 设置过期时间
        if (!Reflect.has(target, 'expires')) {
            const time = new Date()
            time.setTime(time.getTime() + expires * 24 * 60 * 60 * 1000)
            Reflect.set(target, 'expires', time.toUTCString())
        }
        if (!Reflect.has(target, 'path')) {
            Reflect.set(target, 'path', path)
        }
        let cookie: string = ''
        for (const v of Object.keys(target)) {
            cookie += `${v}=${Reflect.get(target, v) || ''}; `
        }
        document.cookie = cookie
    }
}

export default new Cookie()