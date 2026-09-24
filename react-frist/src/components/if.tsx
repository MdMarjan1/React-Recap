interface IfRenProps {
  isLog: boolean;
}

const IfRen = ({ isLog }: IfRenProps) => {
  if (isLog === true) {
    return <li>Welcome House</li>;
  }
  return <li>Plz Try Again</li>;
};

export default IfRen;
