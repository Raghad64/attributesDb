import * as yup from 'yup';
import {
  ConvectorModel,
  Default,
  ReadOnly,
  Required,
  Validate
} from '@worldsibu/convector-core-model';

export class Attribute extends ConvectorModel<Attribute>{
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.attribute';

  @Required()
  public content: any;//what does he changed

  @Required()
  @ReadOnly()
  @Validate(yup.number())
  public issuedDate: number;//when 

  public expiresDate: Date;

  @Default(false)
  @Validate(yup.boolean())
  public expired: boolean;

  @Required()
  @Validate(yup.string())
  public certifierID: string;//the participant id who gives certificates to persons
}

export class Person extends ConvectorModel<Person> {
  @ReadOnly()
  @Required()
  public readonly type = 'io.worldsibu.person';

  @Required()
  @Validate(yup.string())
  public name: string;

  @Validate(yup.array(Attribute.schema()))
  public attributes: Array<Attribute>;//what each person can do as attrbutes
}
