export class AttributesHelper {
  static set = (attribute: Xrm.Attributes.Attribute, value: any) => {
    if (attribute) {
      if (value === "Hello") attribute.setValue("Hello from the script");
      else attribute.setValue(value);
    }
  };
  static setForTest = (val: string): string =>
    val && val !== "" ? val : "Empty string";
}
