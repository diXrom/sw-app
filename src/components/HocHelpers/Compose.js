const Compose = (...fns) => (item) => fns.reduceRight((acc, fn) => fn(acc), item);
export { Compose };