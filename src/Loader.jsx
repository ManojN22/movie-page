import { Loader } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

export default function LoaderTemplate(){
   return <div style={{ height: '100vh',width:'100%' }}>
    <Loader inverse center content="loading..." />
  </div>;
}