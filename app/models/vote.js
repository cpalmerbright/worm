import Model, { attr, belongsTo } from '@ember-data/model';

export default class VoteModel extends Model {
  @belongsTo('worm') worm;
  @attr('boolean') up;
  @attr('date') createdAt;
}
