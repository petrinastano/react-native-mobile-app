import EventListHorizontal from './EventListHorizontal';
import EventListVertical from './EventListVertical';
import CategoriesListHorizontal from './CategoriesListHorizontal';

export default (variables) => {
  const platform = variables.platform;

  const moduleTheme = {

        ...EventListHorizontal(variables),

        ...EventListVertical(variables),

        ...CategoriesListHorizontal(variables),

  };

  return moduleTheme;
};
