export class ApiHelper {
  static retrieve = async (
    entity: string,
    id: string,
    columns: string
  ): Promise<any> => {
    return await Xrm.WebApi.retrieveRecord(entity, id, `?$select=${columns}`);
  };
  static retrieveMultiple = async (
    entity: string,
    filter: string,
    columns: string
  ): Promise<any> => {
    return await Xrm.WebApi.retrieveMultipleRecords(
      entity,
      `?$select=${columns}&$filter=${filter}`
    );
  };
}
