import { useParams } from 'react-router-dom'

export function MyReport(props) {

    const params = useParams();
    console.log(params);

  return (
    <div>
      Hello!
    </div>
  );
};