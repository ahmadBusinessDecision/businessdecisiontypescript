import { AttributesHelper } from "../helpers/attributes";
import { ApiHelper } from "../helpers/server";
import { DataverseClient } from "../models/DataverseClient";

export class contactForm {
  static onload = async (context: Xrm.Events.EventContext) => {
    let formContext = context.getFormContext();
    debugger;
    let service: DataverseClient = new DataverseClient(formContext);
    service.hideMultiple(["jobtitle", "sdasdsadsadasdsa"]);
    let jobtitle: Xrm.Controls.StringControl =
      formContext.getControl("jobtitle");
    jobtitle.setVisible(false);
    let formType = formContext.ui.getFormType();
    if (formType === XrmEnum.FormType.Update) {
      let contact = await ApiHelper.retrieve(
        "contact",
        formContext.data.entity.getId(),
        "firstname"
      );
      alert(contact.firstname);
    }
  };
}
