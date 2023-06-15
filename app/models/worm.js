import Model, { hasMany } from '@ember-data/model';

export default class WormModel extends Model {
  @hasMany('vote') votes;
}
