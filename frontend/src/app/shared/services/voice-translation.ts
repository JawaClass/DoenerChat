import { translations_de, translations_en } from "./voice-translation-table"

function translate(key: string, locale: "EN" | "DE") {
    if (locale === "DE") {
        return translations_de[key] ?? null
    }
    if (locale === "EN") {
        return translations_en[key] ?? null
    }
    return null
}

function single(n: number) {

    if (n === 0) return "zero"
    if (n === 1) return "one"
    if (n === 2) return "two"
    if (n === 3) return "three"
    if (n === 4) return "four"
    if (n === 5) return "five"
    if (n === 6) return "six"
    if (n === 7) return "seven"
    if (n === 8) return "eight"
    if (n === 9) return "nine"

    return ""
}

function doublePrefix(n: number) {

    if (n < 30) return "twenty"
    if (n < 40) return "theirty"
    if (n < 50) return "fourty"
    if (n < 60) return "fivty"
    if (n < 70) return "sixty"
    if (n < 80) return "seventy"
    if (n < 90) return "eighty"
    if (n < 100) return "ninety"

    return ""
}

function teens(n: number) {
    if (n === 11) return "eleven"
    if (n === 12) return "twelve"
    if (n === 13) return "theirteen"
    if (n === 14) return "fourty"
    if (n === 15) return "fivteen"
    if (n === 16) return "sixteen"
    if (n === 17) return "seventeen"
    if (n === 18) return "eighteen"
    if (n === 19) return "nineteen"

    return ""
}
export function number2text(n: number, locale: "DE" | "EN") {

    // 11..19
    if (n >= 11 && n <= 19) { return translate(teens(n), locale) }
    if (n <= 9) { return translate(single(n), locale) }
    if (n === 10) return translate("ten", locale)


    const digits = n.toString().split("").map(n => Number.parseInt(n))

    // 20..99
    if (n < 100) {
        const a = translate(doublePrefix(n), locale)
        const b = digits[1] === 0 ? "" : translate(single(digits[1]), locale)
        if (locale === "DE") {
            if (digits[1] !== 0) {
                return `${b}und${a}`
            }
        }
        return `${a}${b}`
    }

    // 100..999
    if (n < 1000) {
        const a = translate(single(digits[0]), locale)
        const b = translate("hundred", locale)
        const c = digits[1] === 0 ? "" : translate(doublePrefix(digits[1]), locale)
        const d = digits[2] === 0 ? "" : translate(single(digits[2]), locale)
        return `${a}${b}${c}${d}`
    }

    // greater numbers not supported yet
    return n.toString()

}
