import { PropuestaModule } from './propuesta.module';

describe('PropuestaModule', () => {
  let propuestaModule: PropuestaModule;

  beforeEach(() => {
    propuestaModule = new PropuestaModule();
  });

  it('should create an instance', () => {
    expect(propuestaModule).toBeTruthy();
  });
});
