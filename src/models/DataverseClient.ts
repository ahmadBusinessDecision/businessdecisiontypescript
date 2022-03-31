export class DataverseClient {
  private formContext: Xrm.FormContext;
  constructor(formContext: Xrm.FormContext) {
    this.formContext = formContext;
  }
  hide = (name: string): void => this.setDisplay(name, false);
  show = (name: string): void => this.setDisplay(name, true);
  hideMultiple = (controls: string[]) =>
    this.setDisplayMultiple(controls, false);
  showMultiple = (controls: string[]) =>
    this.setDisplayMultiple(controls, true);
  private setDisplayMultiple = (names: string[], is: boolean) =>
    names.forEach((name) => this.setDisplay(name, is));
  private setDisplay = (name: string, is: boolean) => {
    let control: Xrm.Controls.StringControl = this.formContext.getControl(name);
    if (control) control.setVisible(is);
  };
}
