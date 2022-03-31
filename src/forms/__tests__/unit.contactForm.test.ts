import { contactForm } from "../contact";
import {
  DataMock,
  EntityMock,
  FormContextMock,
  ItemCollectionMock,
  UiMock,
  XrmMockGenerator,
} from "xrm-mock";
import * as sinon from "sinon";
import { AttributesHelper } from "../../helpers/attributes";
describe("contactForm.onload", () => {
  beforeEach(() => {
    XrmMockGenerator.initialise();
  });
  it("test string", () => {
    let _value = AttributesHelper.setForTest("");
    expect(_value).toBe("");
    _value = AttributesHelper.setForTest(null);
    expect(_value).toBe("Empty string");
    _value = AttributesHelper.setForTest(undefined);
    expect(_value).toBe("Empty string");
    _value = AttributesHelper.setForTest("Value entered");
    expect(_value).toBe("Value entered");
  });
  it("is jobtitle hidden", () => {
    const context = XrmMockGenerator.getEventContext();
    const jobtitleAttribute = XrmMockGenerator.Attribute.createString(
      "jobtitle",
      ""
    );
    const jobtitle = XrmMockGenerator.Control.createString(
      jobtitleAttribute,
      "jobtitle",
      true,
      false
    );
    expect(jobtitle.getVisible()).toBe(true);
    contactForm.onload(context);
    expect(jobtitle.getVisible()).toBe(false);
  });

  it("webapi test", () => {
    const stub = sinon.stub(Xrm.WebApi, "retrieveMultipleRecords");
    const _contacts = {
      entities: [
        {
          firstname: "Ahmad",
        },
        {
          firstname: "Nicolas",
        },
      ],
    };
    stub.withArgs("contact", "?$select=firstname&$top=3").resolves(_contacts);
    return Xrm.WebApi.retrieveMultipleRecords(
      "contact",
      "?$select=firstname&$top=3"
    ).then((result: { entities: any[] }) =>
      expect(AttributesHelper.setForTest(result.entities[0].firstname)).toBe(
        "Ahmad"
      )
    );
  });
});
