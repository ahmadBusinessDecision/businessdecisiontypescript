import { DataverseClient } from "../models/DataverseClient";

export class accountForm {
  static onload = (context: Xrm.Events.EventContext) => {
    let formContext = context.getFormContext();
    let service: DataverseClient = new DataverseClient(formContext);
    service.hide("name");
  };
  static emailOnChange = (context: Xrm.Events.EventContext) => {
    let formContext = context.getFormContext();
  };
}
