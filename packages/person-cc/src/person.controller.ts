import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Person } from './person.model';

@Controller('person')
export class PersonController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Person)
    person: Person
  ) {
    let exists = await Person.getOne(person.id);

    if (!!exists && exists.id) {//validate whether or not a Person already exists with that id.
      throw new Error('There is a person registered with that Id already');
    }
    let gov = await Participant.getOne('gov');//declearing the participant (in our case Sadara and the customs)

    if (!gov || !gov.identities) {//making sure that this participant exist
      throw new Error('No government identity has been registered yet');
    }
    const govActiveIdentity = gov.identities.filter(identity => identity.status === true)[0];//get the fingerprint of the Network Participant with the id gov

    if (this.sender !== govActiveIdentity.fingerprint) {//check that the property this.sender equals to the fingerprint of the Network Participant with the id gov
      throw new Error(`Just the government - ID=gov - can create people - requesting organization was ${this.sender}`);
    }

    await person.save();//if everything goes OK then the data will be created in the ledger
  }
}