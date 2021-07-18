const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((acc, func) => func(acc), comp)
}

export default compose