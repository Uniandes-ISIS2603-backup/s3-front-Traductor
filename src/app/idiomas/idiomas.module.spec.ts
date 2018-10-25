import { IdiomasModule } from './idiomas.module';

describe('IdiomasModule', () => {
  let idiomasModule: IdiomasModule;

  beforeEach(() => {
    idiomasModule = new IdiomasModule();
  });

  it('should create an instance', () => {
    expect(idiomasModule).toBeTruthy();
  });
});
