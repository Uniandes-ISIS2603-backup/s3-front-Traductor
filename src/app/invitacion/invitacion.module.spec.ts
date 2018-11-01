import { InvitacionModule } from './invitacion.module';

describe('InvitacionModule', () => {
  let invitacionModule: InvitacionModule;

  beforeEach(() => {
    invitacionModule = new InvitacionModule();
  });

  it('should create an instance', () => {
    expect(invitacionModule).toBeTruthy();
  });
});
