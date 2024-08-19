import { Child } from './Child';

const Parent = () => {
  return <Child color='red' onClick={()=> console.log('clicked')}>
    Random Children Words
    </Child>;
};

export default Parent;