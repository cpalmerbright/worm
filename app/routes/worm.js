import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class WormRoute extends Route {
  @service store;

  model(params) {
    const worm = this.store.createRecord('worm', { id: params.id });
    return worm;
  }
}
