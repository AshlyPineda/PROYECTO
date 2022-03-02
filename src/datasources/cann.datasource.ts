import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'cann',
  connector: 'mongodb',
  url: 'mongodb+srv://Ashly23:Ashlypineda2002@cluster0.qz0jw.mongodb.net/proyecto',
  host: 'cluster0.qz0jw.mongodb.net',
  port: 27017,
  user: 'Ashly23',
  password: '',
  database: 'proyecto',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CannDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'cann';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.cann', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
