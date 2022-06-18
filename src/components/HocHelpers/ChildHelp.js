// разве нельзя хелперы добавить в функции а не в HOC, что привезет к рендероингу ненужных оболовечк

const ChildHelp = (Item, chilFn) => (props) => (
  <Item {...props}>
    {chilFn}
  </Item>
);
export { ChildHelp };