import { Test, TestingModule } from '@nestjs/testing';
import { SermonsController } from './sermons.controller';

describe('Sermons Controller', () => {
  let controller: SermonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SermonsController],
    }).compile();

    controller = module.get<SermonsController>(SermonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
