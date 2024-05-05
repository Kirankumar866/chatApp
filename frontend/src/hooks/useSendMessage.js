import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import axios from "axios";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const {data} = await axios.post( `http://localhost:8000/api/message/send/${selectedConversation._id}`,{message},{withCredentials:true})
			
			if (data.error) throw new Error(data.error);
            console.log("newMessage", data)
            console.log("messages",messages)

			setMessages([...messages, data.newMessage]);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;