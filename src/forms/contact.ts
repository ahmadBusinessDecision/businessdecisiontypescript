import { AttributesHelper } from "../helpers/attributes";
import { ApiHelper } from "../helpers/server";
import { DataverseClient } from "../models/DataverseClient";

export class contactForm {
  static onload = async (context: Xrm.Events.EventContext) => {
    let formContext = context.getFormContext();
    debugger;
    let service: DataverseClient = new DataverseClient(formContext);
    service.hideMultiple(["jobtitle", "sdasdsadsadasdsa"]);
    let formType = formContext.ui.getFormType();
    if (formType === XrmEnum.FormType.Update) {
      let contacts = await ApiHelper.retrieveMultiple(
        "contact",
        "firstname eq 'Ahmad'",
        "lastname"
      );
      contacts.forEach((contact) => {
        alert(contact.lastname);
      });
    }
  };
}
