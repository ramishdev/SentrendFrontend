import  {useContext} from 'react'
import SocketContext from '../context/socket'

const useSock = () => {
    return useContext(SocketContext);
}

export default useSock;