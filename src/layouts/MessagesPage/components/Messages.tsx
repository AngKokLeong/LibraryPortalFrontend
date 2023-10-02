import { useEffect, useState } from 'react';
import {useOktaAuth} from '@okta/okta-react';
import MessageModel from '../../../models/MessageModel';
import { SpinnerLoading } from '../../Utils/SpinnerLoading';

export const Messages = () => {
    
    const { authState } = useOktaAuth();
    const [ isLoadingMessages, setIsLoadingMessages ] = useState(true);
    const[ httpError, setHttpError ] = useState(false);


    //Messages
    const [messages, setMessages] = useState<MessageModel[]>([]);

    //Pagination
    const [messagesPerPage, setMessagesPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchUserMessages = async () => {

        }
        fetchUserMessages().catch((error:any) => {
            setIsLoadingMessages(false);
            setHttpError(true);
        })
        window.scrollTo(0, 0);
    }, [authState, currentPage]);

    if (isLoadingMessages){
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return ( 
            <div className="container m-5">
                <p>{httpError}</p>
            </div>
        );
    }

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return ();
}