import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {CannDataSource} from '../datasources';
import {Usuario, UsuarioRelations} from '../models';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {
  constructor(
    @inject('datasources.cann') dataSource: CannDataSource,
  ) {
    super(Usuario, dataSource);
  }
}
