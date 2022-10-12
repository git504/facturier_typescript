// Methode decorator

export function bind(
  _target: any,
  _name: string,
  descriptor: PropertyDescriptor
) {
  const originalMethode = descriptor.value;
  const newDescriptor: PropertyDescriptor = {
    get() {
      return originalMethode.bind(this);
    },
  };
  return newDescriptor;
}
