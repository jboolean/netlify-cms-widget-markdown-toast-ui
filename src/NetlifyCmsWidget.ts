// As documented https://www.netlifycms.org/docs/custom-widgets/

interface NetlifyCmsWidgetProps {
  value: string;
  readonly field: object;
  forID: string;
  classNameWrapper?: string;
  onChange: (newValue: string) => void;
}

export default NetlifyCmsWidgetProps;
