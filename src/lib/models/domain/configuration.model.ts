import { ParentModel } from '@cartesianui/common';

export interface IConfiguration {
  id?: string | undefined;
  key?: string | undefined;
  configurable_type?: string | undefined;
  configurable_id?: string | undefined;
  configuration?: {};

}

export class Configuration extends ParentModel implements IConfiguration {
  public id: string;
  public key: string;
  public configurable_type: string;
  public configurable_id: string;
  configuration: {};

  constructor(data?: IConfiguration) {
    super(data);
  }
}
