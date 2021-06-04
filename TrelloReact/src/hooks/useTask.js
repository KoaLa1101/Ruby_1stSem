import {useQuery} from '@apollo/client';
import getTasks from '../graphql/queries/getTasks';


const useTasks = () => {
    const {data, loading, error} = useQuery(getTasks);

    console.log(data);

    return {
        tasks: data?.cards || [],
        loading,
        error
    }
}

export default useTasks;