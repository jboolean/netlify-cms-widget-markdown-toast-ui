import { Map as ImmutableMap } from 'immutable';
// As documented https://www.netlifycms.org/docs/custom-widgets/

interface NetlifyCmsWidgetProps {
  value: string;
  readonly field: ImmutableMap<string, string>;
  forID: string;
  classNameWrapper?: string;
  onChange: (newValue: string) => void;
}

export default NetlifyCmsWidgetProps;
