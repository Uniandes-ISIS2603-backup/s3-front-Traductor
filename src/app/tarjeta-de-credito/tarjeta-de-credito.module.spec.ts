import { TarjetaDeCreditoModule } from './tarjeta-de-credito.module';

describe('TarjetaDeCreditoModule', () => {
  let tarjetaDeCreditoModule: TarjetaDeCreditoModule;

  beforeEach(() => {
    tarjetaDeCreditoModule = new TarjetaDeCreditoModule();
  });

  it('should create an instance', () => {
    expect(tarjetaDeCreditoModule).toBeTruthy();
  });
});
