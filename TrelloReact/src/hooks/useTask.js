import {useQuery} from "@apollo/client";
import getTasks from "../graphql/getTasks";

const useTask = () => {
    const {data, loading, error} = useQuery(getTasks);

    return {
        tasks: data?.tasks || [],
        loading,
        error
    };
};

export default useTask;