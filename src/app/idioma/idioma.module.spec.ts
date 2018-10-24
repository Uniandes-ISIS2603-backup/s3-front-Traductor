import { IdiomaModule}  from './idioma.module';

describe('IdiomaModule', () => {
  let idiomaModule: IdiomaModule;

  beforeEach(() => {
    idiomaModule = new IdiomaModule();
  });

  it('should create an instance', () => {
    expect(idiomaModule).toBeTruthy();
  });
});