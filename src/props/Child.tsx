interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

//React.FC is telling TypeScript that it is a React 'Function Component' specifically

export const Child: React.FC<ChildProps> = ({ 
  color, 
  onClick ,
  children
}) => {

  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  )
};