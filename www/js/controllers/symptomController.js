import * as S from '../models/symptomModel.js';
import * as V from '../views/symptomView.js';
export const actions = { check: () => V.showResult(S.evaluate(V.selected())) };
export const setup = () => V.renderList(S.LIST);
