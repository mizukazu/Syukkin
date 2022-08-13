interface TextStackProps {
  title: string;
  text: string;
  titleColor?: string;
  textColor?: string;
  isBorder?: boolean;
}

export const TextStack = (props: TextStackProps) => {
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>{props.title}</div>
      <div>{props.text}</div>
    </div>
  );
};
