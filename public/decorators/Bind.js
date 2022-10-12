export function bind(target, name, descriptor) {
    const originalMethode = descriptor.value;
    const newDescriptor = {
        get() {
            return originalMethode.bind(this);
        },
    };
    return newDescriptor;
}
